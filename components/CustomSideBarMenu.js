import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import { Avatar, Icon } from 'react-native-elements';
import { RFValue } from 'react-native-responsive-fontsize'
//import * as ImagePicker from 'expo-image-picker';
//import * as Permissions from 'expo-permissions;'
import firebase from 'firebase'
import db from '../config';

export default class customSideBarMenu extends React.Component {
    constructor() {
        super();
        this.state = {
            image: "#",
            name: "",
            docId: "",
            userId: firebase.auth().currentUser.email
        }
    }

    selectPicture = async () => {

        const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
            borderRadius: 20
        });
        if (!cancelled) {
            this.uploadImage(uri, this.state.userId)
        }

    }

    uploadImage = async (uri, imageName) => {
        var response = await fetch(uri)
        var blob = await response.blob()
        var ref = firebase.storage()
            .ref()
            .child("user_profiles/" + imageName);

        return ref.put(blob).then(response => {
            this.fetchImage(imageName)
        })

    }

    fetchImage = (imageName) => {

        var storageref = firebase.storage()
            .ref()
            .child("user_profiles/" + imageName);

        storageref.getDownloadURL()
            .then(url => {
                this.setState({
                    image: url
                })
            })
            .catch(error => {
                this.setState({
                    image: "#"
                })
            })

    }

    getUserProfiles() {
        db.collection('users').where('email_id', "==", this.state.userId)
            .onSnapshot(snapshot => {
                snapshot.forEach(doc => {
                    this.setState({
                        name: doc.data().first_name + " " + doc.data().last_name,
                        docId: doc.id,
                        image: doc.data().image
                    })
                })
            })
    }



    componentDidMount() {
        this.fetchImage(this.state.userId)
        this.getUserProfiles()

    }





    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.4, alignItems: 'center', backgroundColor: 'white' }}>
                    <Avatar
                        rounded
                        source={{ uri: this.state.image }}
                        size='large'
                        onPress={() => { this.selectPicture() }}
                        containerStyle={styles.imageContainer}
                        showEditButton
                    />
                    <Text style={{ fontWeight: 'bold', fontSize: 20, paddingTop: 10, marginBottom: 10 }}>{this.state.name}</Text>
                </View>

                <View style={styles.draweritemscontainer}>
                    <DrawerItems {...this.props} />
                </View>

                <View style={styles.logoutcontainer}>
                    <TouchableOpacity style={styles.logoutbox}
                        onPress={
                            () => {
                                this.props.navigation.navigate('WelcomeScreen')
                                firebase.auth().signOut()
                            }
                        }>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.logouttext}>Logout</Text>
                            <Icon

                                name="logout"
                                type='antdesign'
                                size={RFValue(20)}
                                iconStyle={{ paddingLeft: RFValue(10) }}

                            />

                        </View>
                    </TouchableOpacity>



                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    draweritemscontainer: {
        flex: 0.8,

    },
    logoutcontainer: {
        flex: 0.2,
        justifyContent: 'flex-end',
        paddingBottom: 30
    },
    logoutbox: {
        width: 200,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        //borderWidth: 1,
        //borderRadius: 10,
        //marginTop: 30,
        marginLeft: 40,
        backgroundColor: "white",

    },
    logouttext: {
        fontSize: 15,
        color: '#09a6e3',
        fontWeight: 'bold'
    },
    imageContainer: {
        flex: 1.5,
        width: "90%",
        // height: '100%',
        //marginLeft: 20,
        marginTop: 30,
        borderRadius: 40,
        marginTop: 20
    },

});

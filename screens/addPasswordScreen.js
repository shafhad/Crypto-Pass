import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import MyHeader from '../components/MyHeader';
import { RFValue } from 'react-native-responsive-fontsize';
export default class AddPassword extends React.Component {
    constructor() {
        super();
        this.state = {
            Name: "",
            EmailId: "",
            Password: ""


        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>

                <MyHeader title="Crypto Pass" />

                <StatusBar
                    animated={true}
                    backgroundColor="#175ddc"

                />


                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TextInput
                        style={styles.formTextInput}
                        placeholder={"Name Of Application Or Website"}
                        onChangeText={(text) => {
                            this.setState({
                                Name: text
                            })
                        }}

                    />
                    <TextInput
                        style={styles.formTextInput}
                        placeholder={"Email ID Or Username"}
                        onChangeText={(text) => {
                            this.setState({
                                EmailId: text
                            })
                        }}

                    />
                    <TextInput
                        style={[styles.formTextInput]}
                        placeholder={"Password"}
                        onChangeText={(text) => {
                            this.setState({
                                Password: text
                            })
                        }}
                    //value={this.state.reasonToRequest}
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            this.addRequest(this.state.bookName, this.state.reasonToRequest);
                        }}
                    >
                        <Text style={{
                            color: 'white',
                            textAlign: 'center'
                        }}>Add Password</Text>
                    </TouchableOpacity>


                </View>
            </View>





        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        //alignItems: 'center',
        justifyContent: 'center',
    },

    formTextInput: {
        width: "75%",
        height: RFValue(35),
        alignSelf: 'center',
        borderColor: '#175ddc',
        borderRadius: RFValue(10),
        borderWidth: RFValue(1),
        marginTop: RFValue(20),
        padding: RFValue(10),
    },
    button: {
        width: RFValue(100),
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: "#175ddc",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        marginTop: 20
    },
});


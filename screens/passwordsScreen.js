import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import MyHeader from '../components/MyHeader';
export default class PasswordScreen extends React.Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <MyHeader
                    title="Crypto Pass"
                    justifyContent='center' />
                <StatusBar
                    animated={true}
                    justifyContent="center"
                    backgroundColor="#175ddc"

                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

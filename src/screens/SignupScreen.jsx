import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const SignupScreen = ({ navigation }) => {
    return(
        <>
            <Text style={{ fontSize: 48 }}>Signup Screen</Text>
            <Button title='Go to Signin' onPress={() => navigation.navigate('Signin')} />
            <Button title='Go to main flow' onPress={() => navigation.navigate('mainFlow')} />
        </>
    )
};

const  styles = StyleSheet.create({});

export default SignupScreen;
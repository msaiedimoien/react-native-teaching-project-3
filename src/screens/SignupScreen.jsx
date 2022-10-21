import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, Input, Button} from "react-native-elements";
import Spacer from "../components/Spacer";

const SignupScreen = ({ navigation }) => {
    return (
        <>
            <Spacer>
                <Text h3>Sign up for Tracker</Text>
            </Spacer>
            <Input label="Email"/>
            <Spacer/>
            <Input label="Password"/>
            <Spacer>
                <Button title="Sign up"/>
            </Spacer>
        </>
    )
};

const  styles = StyleSheet.create({});

export default SignupScreen;
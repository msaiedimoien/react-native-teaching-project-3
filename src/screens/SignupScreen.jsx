import React, { useContext } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";

const SignupScreen = ({ navigation }) => {
    const {state, signup} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <AuthForm
            headerText='Sign up for Tracker'
            errMessage={state.errMessage}
            submitButtonText='Sign up'
            onSubmit={signup}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                <Spacer>
                    <Text style={styles.link}>Already have an account? Sign in instead</Text>
                </Spacer>
            </TouchableOpacity>
        </View>
    )
};

SignupScreen.navigationOptions = () => {
    return{
        header: null
    };
};

const  styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 150,
        padding: 20
    },
    link: {
        color: 'blue'
    }
});

export default SignupScreen;
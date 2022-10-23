import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

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
            <NavLink
                routeName='Signin'
                text='Already have an account? Sign in instead'
            />
        </View>
    )
};

SignupScreen.navigationOptions = () => {
    return{
        header: false
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
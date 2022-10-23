import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Context as AuthContext} from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SigninScreen = ({ navigation }) => {
    const {state, signin} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <AuthForm
                headerText='Sign In for Tracker'
                errMessage={state.errMessage}
                submitButtonText='Sign in'
                onSubmit={signin}
            />
            <NavLink
                routeName='Signup'
                text='Dont have an account? Sign up instead'
            />
        </View>
    )
};

SigninScreen.navigationOptions = () => {
    return{
        header: null
    };
};

const styles = StyleSheet.create({
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

export default SigninScreen;
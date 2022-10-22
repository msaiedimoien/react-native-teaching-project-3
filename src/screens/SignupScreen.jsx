import React, {useState, useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Input, Button} from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Spacer>
                <Text h4 style={styles.title}>Sign up for Tracker</Text>
            </Spacer>
            <Spacer/>
            <Input
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Spacer/>
            <Input
                secureTextEntry
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Spacer>
                <Button title="Sign up" onPress={() => signup({email, password})}/>
            </Spacer>
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
    title: {
        textAlign: "center",
        color: 'gray',
        fontWeight: "bold"
    }
});

export default SignupScreen;
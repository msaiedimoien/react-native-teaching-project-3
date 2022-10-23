import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Text, Input, Button} from "react-native-elements";
import Spacer from "./Spacer";

const AuthForm = ({ headerText, errMessage, onSubmit, submitButtonText }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Spacer>
                <Text h4 style={styles.title}>{headerText}</Text>
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
            {errMessage ? <Text style={styles.errMessage}>{errMessage}</Text> : null}
            <Spacer>
                <Button title={submitButtonText} onPress={() => onSubmit({email, password})}/>
            </Spacer>
        </>
    )
};

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        color: 'gray',
        fontWeight: "bold"
    },
    errMessage: {
        fontSize: 16,
        color: 'red',
        textAlign: "center",
        marginTop: 10
    }
});

export default AuthForm;
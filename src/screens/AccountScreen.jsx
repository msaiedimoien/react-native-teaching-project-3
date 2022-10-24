import React,{useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from "react-native-elements";
import Spacer from "../components/Spacer";
import {Context as AuthContext} from "../context/AuthContext";

const AccountScreen = () => {
    const { signOut } = useContext(AuthContext);

    return(
        <View style={styles.container}>
            <Text style={{ fontSize: 48 }}>AccountScreen</Text>
            <Spacer>
                <Button title='Sign Out' onPress={signOut} />
            </Spacer>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        margin: 20,
        marginBottom: 250
    }
});

export default AccountScreen;
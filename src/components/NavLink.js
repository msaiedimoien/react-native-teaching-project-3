import React from "react";
import {withNavigation} from "react-navigation";
import {StyleSheet, TouchableOpacity} from "react-native";
import Spacer from "./Spacer";
import {Text} from "react-native-elements";

const NavLink = ({ navigation, text, routeName }) => {
    return(
        <TouchableOpacity onPress={() => navigation.navigate({routeName})}>
            <Spacer>
                <Text style={styles.link}>{text}</Text>
            </Spacer>
        </TouchableOpacity>
    )
};

const  styles = StyleSheet.create({
    link: {
        color: 'blue'
    }
});

export default withNavigation(NavLink);

import {Text, TouchableOpacity, View} from "../scenes/schedule/ScheduleTab";
import styles from "../scenes/styles";
import AntDesign from "react-native-vector-icons/AntDesign";
import colors from "../styles/colors";
import React from "react";

export default (props) => (<View style={styles.emptyScheduleContainer}>
    <AntDesign name='car' size={49} style={styles.emptyImg} color={colors.primary}/>
    <Text style={styles.emptyTxt}>{props.message}</Text>
    <TouchableOpacity style={[styles.emptyButton]} onPress={props.onPress}>
        <Text style={styles.emptyButtonTxt}>{props.message}</Text>
    </TouchableOpacity>
</View>)



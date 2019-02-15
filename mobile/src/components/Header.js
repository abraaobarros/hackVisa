import {TouchableOpacity, View} from "../scenes/routine/RoutineTab";
import styles from "../scenes/styles";
import HeaderTitle from "./HeaderTitle";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import colors from "../styles/colors";
import React from "react";

export Header =  (props) => {
    return (<View style={styles.tabHeader}>
        <HeaderTitle title={props.title} style={{padding: 10}}/>
        <TouchableOpacity
            onPress={props.onPress}>
            <SimpleLineIcons name='plus' size={25}
                             style={{alignSelf: 'flex-end', flexDirection: 'row', marginLeft: 30}}
                             color={colors.black}/>
        </TouchableOpacity>
    </View>)
}

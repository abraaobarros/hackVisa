import {Text} from "react-native-elements";
import React from "react";

export default class HeaderTitle extends React.Component {
    render() {
        return (
            <Text style={{fontSize: 32, fontWeight: 'bold'}}>{this.props.title}</Text>
        )
    }
}


import React from "react";
import {SafeAreaView, StyleSheet, ScrollView, KeyboardAvoidingView, View} from "react-native";
import {Ionicons} from 'react-native-vector-icons';
import connect from "react-redux/es/connect/connect";

class TabAreaView extends React.Component {
    render() {
        let {header, children} = this.props;
        return (
            <View style={{flex: 1, backgroundColor: "white"}}>
                <ScrollView
                    style={styles.scroll}
                    contentContainerStyle={styles.contentContainer}
                    keyboardShouldPersistTaps='handled'
                >
                    <View style={{
                        backgroundColor: 'white'
                    }}>
                        {header}
                    </View>
                    <View style={{
                        backgroundColor: '#fafafa'
                    }}>
                        {children}
                    </View>
                </ScrollView>
            </View>
        );
    }
}


const mapStateToProps = state => ({pending: state.ui.pending})
export default connect(mapStateToProps, {})(TabAreaView);

const
    styles = StyleSheet.create({
        scroll: {
            backgroundColor: '#fff',
            padding: 20,
        },
        container: {
            marginTop: 24,
            alignItems: 'center'
        },
        contentContainer: {
            padding: 8,
            flex: 1,
            alignItems: 'center'
        },
    });


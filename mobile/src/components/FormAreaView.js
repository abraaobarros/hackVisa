import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    Platform,
    KeyboardAvoidingView,
    ActivityIndicator
} from "react-native";
import {Ionicons} from 'react-native-vector-icons';
import Spinner from "react-native-loading-spinner-overlay";
import connect from "react-redux/es/connect/connect";
import HeaderTitle from "./HeaderTitle";

class FormAreaView extends React.Component {
    render() {
        let {pending, subtitle} = this.props
        let pd = {}
        if (Platform.OS === 'ios') {
            pd = {
                behavior: 'padding',
                keyboardVerticalOffset: 44
            }
        }
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: "white", flexDirection:'column'}}>
                <KeyboardAvoidingView
                    style={{flex:1}}
                    {...pd}
                    enabled>

                    <ScrollView
                        style={styles.scroll}
                        contentContainerStyle={[styles.contentContainer, this.props.contentContainer]}
                        keyboardShouldPersistTaps='handled'>
                        <View style={[{
                            paddingTop: 50,
                            paddingLeft: 20,
                            marginRight: 20,
                            flex:1,
                            alignItems: 'flex-start',
                            flexDirection: 'row'
                        },this.props.contentContainerStyle]}>
                            <HeaderTitle title={this.props.title}/>
                            {pending ?
                                <ActivityIndicator visible={false} style={{margin: 10}}/> : null}
                        </View>

                        {this.props.children}

                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
            ;
    }
}


const mapStateToProps = state => ({})
export default connect(mapStateToProps, {})(FormAreaView);

const
    styles = StyleSheet.create({
        scroll: {
            backgroundColor: '#fff',
        },
        contentContainer: {
            padding: 20,
        },
    });


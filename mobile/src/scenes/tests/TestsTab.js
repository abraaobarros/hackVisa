import React from 'react';
import {SafeAreaView, AsyncStorage, TouchableOpacity, Text, StyleSheet, Switch, ActivityIndicator} from "react-native"
import {connect} from 'react-redux';
import FormAreaView from "../../components/FormAreaView";
import TestsService from "../../services/api/TestsService";

class ProfileTab extends React.Component {

    static navigationOptions = {header: null};


    constructor(props) {
        super(props)
        this.state = {
            woman: false,
            only_for_women: false,
            invisible: false,
            pending: false,
            loaded: false
        }
    }

    componentDidMount() {
    }

    async onDriverMatch() {
        this.setState({pending:true})
        try {
            await TestsService.findDrivers()
        }catch (e) {
            alert("deu algum problema")
        }
        this.setState({pending:false})
    }

    async onRiderMatch() {
        this.setState({pending:true})
        try {
            await TestsService.findRiders()
        }catch (e) {
            alert("deu algum problema")
        }
        this.setState({pending:false})
    }

    async onClickFinish() {
        this.setState({pending:true})
        try {
            await TestsService.finishMatchs()
        }catch (e) {
            alert("deu algum problema")
        }
        this.setState({pending:false})
    }

    render() {
        let {pending} = this.state
        return (
            <FormAreaView contentContainer={{padding: 0, margin: 0}}
                          pending={pending}
                          title="Testes">
                <TouchableOpacity style={styles.logoutBtn} onPress={() => this.onDriverMatch()}>
                    <Text style={styles.logoutBtnText}>Fazer match com um motorista</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.logoutBtn} onPress={() => this.onRiderMatch()}>
                    <Text style={styles.logoutBtnText}>Fazer match com um caroneiro</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.logoutBtn} onPress={() => this.onClickFinish()}>
                    <Text style={styles.logoutBtnText}>Finalizar horário do match</Text>
                </TouchableOpacity>
            </FormAreaView>
        )
    }
}

const styles = StyleSheet.create({

    logoutBtn: {
        backgroundColor: '#ffffff',
        marginTop: 10,
        padding: 10,
    },

    logoutBtnText: {
        color: '#ff0000',
        fontSize: 15,
        textAlign: 'center',
    },

    icon: {
        fontSize: 26,
    },

    softIcon: {
        fontSize: 26,
        color: '#bbbbbb'
    }

});

const mapStateToProps = state => ({
    pending: state.ui.pending,
});
export default connect(mapStateToProps, {})(ProfileTab);

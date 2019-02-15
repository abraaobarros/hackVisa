import React from "react";

const headerConfig = (navigation) => {
    return {
        headerStyle: {
            backgroundColor: '#f4f',
            borderWidth: 0,
            borderBottomWidth: 0,
            borderBottomColor: '#eee',
        },
        container: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'left',
            paddingLeft: 8,
        },
        headerTitleStyle: {
            color: '#000',
        },
        headerBackTitleStyle: {
            color: '#000',
        },
        headerTintColor: '#000',
    }
}

export default headerConfig

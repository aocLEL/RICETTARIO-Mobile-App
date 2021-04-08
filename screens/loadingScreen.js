import React from 'react';
import {Text, View, ActivityIndicator} from 'react-native';


const loadingScreen = () => {
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
            <ActivityIndicator size={"large"} color={'pink'} />
        </View>
    )
}

export default loadingScreen;
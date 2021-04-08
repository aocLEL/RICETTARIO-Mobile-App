import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const addButton = (props) => {

    const addImage = require('../images/addButton.png')

    return(
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <Image source={addImage} style={{width: 50, height: 50,}} />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({

    container: {
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        marginTop: 30,
    }

})



export default addButton;
import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';


const ModalButton = (props) => {
    const plusImage = require('../images/plus.png');
    
    const isPlus = props.isPlus

    const ButtonColor = isPlus ? 'pink' : 'red';

    const transform = isPlus ? [{rotate: '0deg'}] : [{rotate: '45deg'}];

    return (
        <TouchableOpacity onPress={props.onPressModalButton} style={[styles.container, {...props.style}]}>
            <Image source={plusImage} style={[{transform: transform}, styles.plusImage, {tintColor: ButtonColor}]} />
        </TouchableOpacity>
    )
}




const styles = StyleSheet.create({
    container: {
        width: 50,                                               
        height: 50,                       
        marginTop: 20,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center', 
    },
    smallContainer: {
        width: 30,                                               
        height: 30,                      
        
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },

    plusImage: {
        width: 40,                                                                                                
        height: 40,                            
        tintColor: 'pink',                                                
    },
    plusImageSmall: {
        width: 20,
        height: 20,                                                                                                  
        tintColor: 'white',
    }

})

export default ModalButton;
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import {colors} from '../utils/colors'; 




const RecipeCard = (props) => {


    const gotoRecipeView = () => { //this function is for our touchable onPress
        props.navigation.navigate('RecipeView', { //I have setted navigation props in home js prima to write props.navigation.navigate
            title: props.RecipeDataName, //params RecipeTitle
            data: props.RecipeData //passing props.RecipeData that have in self always our fetching data. this prop have call in RecipeCard props in home.js
        })
    }

    return(
        <TouchableOpacity style={styles.RecipeCard} onPress={gotoRecipeView}>
           <View>
                <Text style={styles.textCard}>{props.RecipeDataName}</Text> 
            
                <Image //GIVE AT TEXT ONE PROP, THIS PROP REPRESENTS(RAPPRESENTA) OUR FETCHING RecipeName
                source={{uri: props.RecipeDataImage}} 
                style={{width: 250, height: 180}} />
                
            </View>
            
        </TouchableOpacity>
    )

}


const styles = StyleSheet.create({
    RecipeCard: {
        height: 270,
        width: 250,
        alignItems:'center',
        justifyContent: 'center',
        elevation: 12,
        marginBottom: 30,
        backgroundColor: colors.HomePink,
        borderRadius: 8,
        
        
    },
    space: {
        width: '100%',
    },
    textCard: {
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 35,
    }

})


export default RecipeCard;
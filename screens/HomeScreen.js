import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import axios from 'axios';
import SearchRecipeModal from '../components/SearchRecipeModal'; //import our modal
import RecipeCard from '../components/RecipeCard'; //import our recipecard
import { ScrollView } from 'react-native-gesture-handler';
import CakeAddButton from '../components/OpenModalButton';
import { useCallback } from 'react';
import * as Font from 'expo-font';



export default function Home(props) {

  const [visible, setVisible] = useState(false) //setting the state of modal visibility at false
  const [recipecard, setRecipeCard] = useState([]); //setting the state of recipe card
  const [isFetching, setFetching] = useState(false)

  const [isFontLoaded, setLoaded] = useState(false)

    async function loadFont() {
    await Font.loadAsync({
        // Load a font `Montserrat` from a static resource
        Cookies : require('../assets/fonts/Cookie-Regular.ttf')
    })
    setLoaded(true)
}
loadFont();

  
  

  const addRecipe = useCallback(async (recipe) => { //this function add recipe at the array recipeCard

    if(isFetching) return; //if RecipeData already fetching, stop the function

    setFetching(true) //else set isFetching at true

    let query = recipe.replace(/\s/g, '+')
    console.log(query)
    const data = await fetch(`http://192.168.1.6:3000/fullRecipeData?Recipe=${query}`)
    const RecipeData = await data.json();
    
    await setRecipeCard(recipecard.concat(RecipeData)); //concat the element in array and our element that insert now
    await console.warn(RecipeData);

    await closeModal(); //call closeModal function

    setFetching(false) //in the end of call , set Fetching at false
  })


  const openModal = () => { //create the openModal function
    setVisible(true)
  }


  const closeModal = () => { //create the closeModal function
    setVisible(false)
  }


  const imageRecipeSource = require('../images/torta.jpg') //our card image
  if(isFontLoaded) {
  let newRecipe = <Text>sto caricando le ricette</Text>
  if(recipecard) { //if an element exist in recipeCard
    console.log(recipecard)
    newRecipe = recipecard.map((recipe, index) => ( //map this array 
      <RecipeCard 
      //RecipeTitle={recipe} //give this props
      RecipeData = {recipe} //set this other prop for give the RecipeDATA at RecipeViewScreen 
      RecipeDataName={recipe.RecipeName} //give the RecipeData props created in RecipeCard, this props recived our fetching data
      RecipeDataImage={recipe.RecipeImage} //set this other prop for RecipeImage
      key={index} 
      navigation={props.navigation}  /> //we set the navigation props that we take in RecipeCard
    ))
  }



    return (
<ScrollView style={{backgroundColor: '#fff'}}>
  <View style={styles.container}>
        <SearchRecipeModal addRecipe={addRecipe} visible={visible} closeModal={closeModal}/>
        <CakeAddButton onPress={openModal} style={styles.CakeAddButton} />

      <View>
        <Text style={styles.my_recipe}>Le tue ricette: </Text>
      </View>

      

          <View style={styles.RecipeCardContainer}>
                  {newRecipe}
          </View>
      </View>
</ScrollView>
  ); } else {
    return null
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    
  },
  my_recipe: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20,
    fontSize: 50,
    fontWeight: '600',
    paddingBottom: 70,
    fontFamily: 'Cookies',
    
  },
  CakeAddButton: {
    marginTop: 20,
  }
});
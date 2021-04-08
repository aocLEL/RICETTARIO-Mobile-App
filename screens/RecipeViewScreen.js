import React from 'react';
import { StyleSheet, Text, View, Image, YellowBox } from 'react-native';
import { Directions, ScrollView } from 'react-native-gesture-handler';
import {colors} from '../utils/colors';

export default function RecipeView({route}, props) {
  const navigation = props.navigation;
  const {title, data} = route.params //this params are stupid now, then we will pass API params
    return (

<ScrollView>
  <View style={styles.container}>
        
        <View>
          <Image source={{uri: data.RecipeImage}} style={styles.recipeImage} />
        </View>

        <View style={styles.infoRecipeContainer}>
          <Text style={styles.infoRecipe}>{data.RecipeTime} min</Text>
          <Text style={styles.infoRecipe}>{data.RecipeDifficult}  </Text>
          <Text style={styles.infoRecipe}>Economico</Text>
        </View>

        <Text style={styles.descriptionTitle}>INIZIAMO</Text>
        
        <View style={styles.descriptionContainer}>

            <Text style={styles.description}>
                {data.RecipeDescription}
            </Text>

        </View>
      
  </View>
</ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  recipeImage: {
    width: 350,
    height: 300,
    marginTop: 30,
    borderRadius: 10,
  },
  infoRecipeContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 30,
    borderWidth: 1,
    paddingVertical: 10,
    marginLeft: 10,
    
  },
  infoRecipe: {
    flex: 1,
    marginRight: 20,
    fontSize: 18,
    color: 'orange',

  },
  descriptionTitle: {
      alignItems: 'center',
      marginTop: 20,
      fontSize: 30,
      fontWeight: '600',
      color: colors.HomePink,
      textDecorationLine: 'underline',
  },
  descriptionContainer: {
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 50,
  },
  description: {
    fontSize: 20,
  }
});
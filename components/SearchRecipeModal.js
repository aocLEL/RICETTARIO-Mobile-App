import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, Keyboard, Modal } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {colors} from '../utils/colors';
import ModalButton from '../components/ModalButton';
import { abs } from 'react-native-reanimated';

function SearchRecipe(props) {


  const [recipeText, setRecipeText] = useState("");

  const handleGrabRecipe = (value) => { //this function grab our input value 
      
    setRecipeText(value)
  }


  const addRecipeHandler = () => {
    if(recipeText.trim() === '') {
      alert('Scrivi qualcosa')
      return
    }
    props.addRecipe(recipeText)

    setRecipeText("");
  }
    return (

<Modal  visible={props.visible} animationType={'slide'} style={{backgroundColor: colors.HomePink}}>
  <TouchableWithoutFeedback onPress={() => {
    Keyboard.dismiss();
  }}>

      <View style={styles.container}>
          
            <Text style={styles.title}>Aggiungi una ricetta</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>

          
            <TextInput  
            value={recipeText}
            placeholder={'Inserire una ricetta'} 
            style={styles.input}
            onChangeText={handleGrabRecipe}
            autoCorrect={false}
            placeholder={'Aggiungi Ricetta'}
            />

                <ModalButton style={styles.addModalButton} isPlus={true} onPressModalButton={addRecipeHandler} />
            
          </View>

          <ModalButton style={styles.closeModalButton} isPlus={false} onPressModalButton={props.closeModal} />

      
    </View>
  </TouchableWithoutFeedback>
</Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },
  input: {
    marginTop: 30,
    width: '70%',
    justifyContent: 'center',
    borderBottomWidth: 1,
    paddingTop: 15,
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 20,
    paddingBottom: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
  },
  closeModalButton: {
      position: 'absolute',
      bottom: 30,
  },
  addModalButton: {
    paddingLeft: 40,
  }
  
});


export default SearchRecipe;
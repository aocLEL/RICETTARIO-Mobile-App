import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useState } from 'react/cjs/react.development';
import {colors} from '../utils/colors';
import axios from 'axios';
import { useLinkProps } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { signUp } from '../store/actions/authUser';
import * as Font from 'expo-font';

export default function SignUp({route, navigation}) {

  const [isFontLoaded, setLoaded] = useState(false)

    async function loadFont() {
    await Font.loadAsync({
        // Load a font `Montserrat` from a static resource
        Cookies : require('../assets/fonts/Cookie-Regular.ttf')
    })
    setLoaded(true)
}
loadFont();

  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
 

  const EmailChangeText = (EmailValue) => {
      setEmail(EmailValue)
      
  }


  const PasswordChangeText = (PasswordValue) => {
      setPassword(PasswordValue)
  }
  


  const SignUpSendData = async () => {
    if ( email.trim() === '' || password.trim() === '') {
     
        Alert.alert(
        "Registrazione non riuscita!!",
        "Hai lasciato dei campi vuoti!!",
        [
          {title: 'Riprova', style: 'destructive'}
        ]
      )
      return
    } else {
      dispatch(signUp(email, password));
      navigation.navigate("Home")
    }
  }
  if(isFontLoaded) {
    return (

<View style={styles.container}>
      
      <Text style={{marginBottom: 80, fontSize: 50, alignItems: 'center', fontFamily: 'Cookies',}}>Registrati</Text>
     
      
  <View style={styles.inputContainer}>

      
      
      <TextInput 
      value={email}
      textContentType={'emailAddress'}
      placeholder={'Inserisci una email'} 
      onChangeText={EmailChangeText}
      style={styles.input}
      autoCorrect={false} />
      
      
      <TextInput 
      value={password}
      placeholder={'Inserisci una password'} 
      textContentType={'password'}
      onChangeText={PasswordChangeText}
      style={styles.input}
      autoCorrect={false} />


     <TouchableOpacity onPress={SignUpSendData} style={{marginTop: 30}}>
        <Text style={styles.SignUpButton}>Registrati</Text>
     </TouchableOpacity>
  </View>
</View>
  ); } else {
    return null;
  }
    }



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.HomePink,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer:{
    width: 300,
    height: 400,
    flexDirection: 'column',
    backgroundColor: 'white',
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    
  },
  input: {
    marginVertical: 15,
    borderWidth: 5,
    paddingTop: 10,
    paddingBottom: 10,
    width: 200,
    borderColor: colors.HomePink,
    borderRadius: 10,
    paddingLeft: 12,
    fontSize: 16,
  },

  SignUpButton: {
    borderWidth: 3,
    borderColor: colors.HomePink,
    fontSize: 30,
    fontFamily: 'Cookies',
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#f0d3ef',
    justifyContent: 'center',
    alignItems: 'center',
  },
  already_existMessage: {
    fontSize: 15,
    marginTop: 10,
    borderWidth: 2,
    borderColor: 'red',
    backgroundColor: 'red',
  },
  successMessage: {
    fontSize: 15,
    marginTop: 10,
    borderWidth: 2,
    borderColor: 'green',
    backgroundColor: 'green',
  },
  responseMessage: {
    backgroundColor: 'green'
  }
})

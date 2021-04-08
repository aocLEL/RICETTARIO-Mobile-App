import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {useDispatch, useSelector} from 'react-redux';
import {logOut, retrieveData} from './store/actions/authUser';

//import my screens 
import CreateRecipe from './screens/CreateRecipeScreen';
import Home from './screens/HomeScreen';
import Login from './screens/LoginScreen';
import RecipeView from './screens/RecipeViewScreen';
import SignUp from './screens/SignUpScreen';
import LoadingScreen from './screens/loadingScreen';
import {colors} from './utils/colors'
import HeaderButton from './components/HeaderButton';
import * as Font from 'expo-font';
import { isLoaded } from 'expo-font';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();



function StackNavigator() {

    const [isFontLoaded, setLoaded] = useState(false)

    async function loadFont() {
    await Font.loadAsync({
        // Load a font `Montserrat` from a static resource
        Cookies : require('./assets/fonts/Cookie-Regular.ttf')
    })
    setLoaded(true)
}
loadFont();

if(isFontLoaded === true) {
    return(

        <Stack.Navigator screenOptions={{headerStyle: {
            backgroundColor: colors.HomePink,
        },
        headerTintColor: 'black',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30,
        },
        headerTitleAlign: 'center'}}>
            <Stack.Screen name='Il Ricettario' component={Home} options={({route, navigation})  => ({
                headerLeft: () => <HeaderButton onPressLeft={() => navigation.toggleDrawer() } /> 
             , headerTitleStyle: {fontSize: 50, fontWeight: '600', fontFamily: 'Cookies',}})} />
            <Stack.Screen options={({route}) => ({title: route.params.title})} name='RecipeView' component={RecipeView} />
        </Stack.Navigator>
    );
} else {
    return null;
}
}

/*function CreateRecipeNavigator() {
    return(

        <Stack.Navigator screenOptions={{headerStyle: {
            backgroundColor: colors.HomePink,
        },
        headerTintColor: 'black',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30,
        },
        headerTitleAlign: 'center'}}>
            <Stack.Screen name='Crea una ricetta' component={CreateRecipe} options={({route, navigation})  => ({
                headerLeft: () => <HeaderButton onPressLeft={() => navigation.toggleDrawer() } /> 
             })} />
        </Stack.Navigator>
    );
}*/

function CustomDrawerNewUser(props) {

    const [isFontLoaded, setLoaded] = useState(false)


    async function loadFont() {
        await Font.loadAsync({
            // Load a font `Montserrat` from a static resource
            Cookies : require('./assets/fonts/Cookie-Regular.ttf')
        })
        setLoaded(true)
    }
    loadFont();
    
    if(isFontLoaded === true) {
    return(
        <DrawerContentScrollView>
            <DrawerItem labelStyle={{fontSize: 30, fontFamily: 'Cookies'}} label='Home' activeTintColor={'fuchsia'} inactiveTintColor={'white'} onPress={() => props.navigation.navigate('Home') } />
            <DrawerItem labelStyle={{fontSize: 30, fontFamily: 'Cookies'}} label='Accedi' activeTintColor={'fuchsia'} inactiveTintColor={'white'} onPress={() => props.navigation.navigate('Accedi') } />
            <DrawerItem labelStyle={{fontSize: 30, fontFamily: 'Cookies'}} label='Registrati' activeTintColor={'fuchsia'} inactiveTintColor={'white'} onPress={() => props.navigation.navigate('Registrati') } />
        </DrawerContentScrollView>
    )
    } else {
        return null;
    }
}


function CustomDrawerUser(props) {

    const [isFontLoaded, setLoaded] = useState(false)

    async function loadFont() {
        await Font.loadAsync({
            // Load a font `Montserrat` from a static resource
            Cookies : require('./assets/fonts/Cookie-Regular.ttf')
        })
        setLoaded(true)
    }
    loadFont();
    
    if(isFontLoaded === true) {
    
    const dispatch = useDispatch() 
    return(
        <DrawerContentScrollView>
            <DrawerItem labelStyle={{fontSize: 30, fontFamily: 'Cookies'}} label='Home' activeTintColor={'fuchsia'} inactiveTintColor={'white'} onPress={() => props.navigation.navigate('Home') } />
            <DrawerItem labelStyle={{fontSize: 30, fontFamily: 'Cookies'}} label='Esci' activeTintColor={'red'} inactiveTintColor={'red'} onPress={() => dispatch(logOut())}/>
        </DrawerContentScrollView>
    )
    } else {
        return null
    }
}



function DrawerNavigation() {
    const userToken = useSelector(state => state.authUser.token)
    return(
        
            <Drawer.Navigator drawerContent={
    userToken ? props => <CustomDrawerUser navigation = {props.navigation} />
                 : props => <CustomDrawerNewUser navigation = {props.navigation} />
              } drawerStyle={{backgroundColor: 'pink'}} dra>
                <Drawer.Screen name='Home' component={StackNavigator} />
                <Drawer.Screen name='Accedi' component={Login} />
                <Drawer.Screen name='Registrati' component={SignUp} />
            </Drawer.Navigator>
        
    )
}


function MainNavigation () { //creat MainNavigator
    const [loading, setLoading] = useState(false); //set app loading state how false
    const dispatch = useDispatch();
    const userToken = useSelector(state => state.authUser.token)

    useEffect( () => { //create useEffect
        setLoading(true);
        userToken ? dispatch(retrieveData()).then(() => { //dispatch of retrieveData and take her promise and set loading at false
            setLoading(false) //when retrivedata finished loaded , loading is false
        }) : setLoading(false)
    }, [dispatch])

    return(
        <NavigationContainer>
             {loading ? <LoadingScreen /> : <DrawerNavigation />}
        </NavigationContainer>
    )
}

export default MainNavigation;




import {Platform, Dimensions} from 'react-native';



const isIos = Platform.OS === 'ios';

const isAndroid = Platform.OS === 'android';


const {widht: SCREEN_WIDHT, height: SCREEN_HEIGHT} = Dimensions.get('window');


export{
    
    isIos,
    isAndroid,
    SCREEN_HEIGHT,
    SCREEN_WIDHT,
}


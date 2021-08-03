import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {Image, Dimensions} from 'react-native';

import ZmanimScreen from '../screens/ZmanimScreen';
import HnzchotScreen from '../screens/HnzchotScreen';
import TfilotTimeScreen from '../screens/TfilotTimeScreen';
import GeneralMessagesScreen from '../screens/GeneralMessagesScreen';
import OlimLatoraScreen from '../screens/OlimLatoraScreen';
import WelcomeTimeScreen from '../screens/WelcomeTimeScreen';

const Stack = createStackNavigator();
const {width, height} = Dimensions.get('screen');

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Image
        source={require('../images/Bgk.png')}
        style={{
          width,
          height,
          position: 'absolute',
        }}
      />
      <Stack.Navigator
        screenOptions={{
          header: () => null,
          cardStyle: {
            backgroundColor: 'transparent',
          },
        }}>
        <Stack.Screen name="Zmanim" component={ZmanimScreen} />
        <Stack.Screen name="WelcomeTime" component={WelcomeTimeScreen} />
        <Stack.Screen name="TfilotTime" component={TfilotTimeScreen} />
        <Stack.Screen name="OlimLatora" component={OlimLatoraScreen} />
        <Stack.Screen name="Hnzchot" component={HnzchotScreen} />
        <Stack.Screen
          name="GeneralMessages"
          component={GeneralMessagesScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

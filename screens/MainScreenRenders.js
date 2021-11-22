import React from 'react';
import {DefaultImageLoder, ImageLoder} from '../components/ImageLoder';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ZmanimScreen from './ZmanimScreen';
import HnzchotScreen from './HnzchotScreen';
import TfilotTimeScreen from './TfilotTimeScreen';
import GeneralMessagesScreen from './GeneralMessagesScreen';
import OlimLatoraScreen from './OlimLatoraScreen';
import PrashaScreen from './PrashaScreen';
import ShiorimScreen from './ShiorimScreen';
import OmerScreen from './OmerScreen';
import HagimScreen from './HagimScreen';
import ShabatScreen from './ShabatScreen';
import FastScreen from './FastScreen';
import HalachYomitScreen from './HalachYomitScreen';
import Heder from '../components/Heder';
import Footer from '../components/Footer';
import 'react-native-gesture-handler';

export const Stack = createStackNavigator();

const MainScreenRenders = ({reaplaseScreanName, changeOptions}) => {
  const Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };
  return (
    <>
      <DefaultImageLoder
        source={require('../assets/images/screans/defaultBackground.png')}
      />
      <NavigationContainer theme={Theme}>
        <Stack.Navigator
          screenOptions={{
            header: () => null,
          }}>
          <Stack.Screen name="Zmanim">
            {props => (
              <ImageLoder
                source={require('../assets/images/screans/zmanimBackground.png')}>
                <Heder changeOptions={changeOptions} />
                <ZmanimScreen
                  {...props}
                  reaplaseScreanName={reaplaseScreanName}
                  changeOptions={changeOptions}
                />
                <Footer changeOptions={changeOptions} />
              </ImageLoder>
            )}
          </Stack.Screen>
          <Stack.Screen name="Prasha">
            {props => (
              <ImageLoder
                source={require('../assets/images/screans/parshBackground.png')}>
                <Heder changeOptions={changeOptions} />
                <PrashaScreen
                  {...props}
                  reaplaseScreanName={reaplaseScreanName}
                  changeOptions={changeOptions}
                />
                <Footer changeOptions={changeOptions} />
              </ImageLoder>
            )}
          </Stack.Screen>
          <Stack.Screen name="TfilotTime">
            {props => (
              <ImageLoder
                source={require('../assets/images/screans/tiflotBackground.png')}>
                <Heder changeOptions={changeOptions} />
                <TfilotTimeScreen
                  {...props}
                  reaplaseScreanName={reaplaseScreanName}
                  changeOptions={changeOptions}
                />
                <Footer changeOptions={changeOptions} />
              </ImageLoder>
            )}
          </Stack.Screen>

          <Stack.Screen name="OmerScreen">
            {props => (
              <ImageLoder
                source={require('../assets/images/screans/omerBackground.png')}>
                <Heder changeOptions={changeOptions} />
                <OmerScreen
                  {...props}
                  reaplaseScreanName={reaplaseScreanName}
                  changeOptions={changeOptions}
                />
                <Footer changeOptions={changeOptions} />
              </ImageLoder>
            )}
          </Stack.Screen>
          <Stack.Screen name="HagimScreen">
            {props => (
              <ImageLoder
                source={require('../assets/images/screans/hagimBackground.jpg')}>
                <Heder changeOptions={changeOptions} />
                <HagimScreen
                  {...props}
                  reaplaseScreanName={reaplaseScreanName}
                  changeOptions={changeOptions}
                />
                <Footer changeOptions={changeOptions} />
              </ImageLoder>
            )}
          </Stack.Screen>
          <Stack.Screen name="ShabatScreen">
            {props => (
              <ImageLoder
                source={require('../assets/images/screans/shabatBackground.jpg')}>
                <Heder changeOptions={changeOptions} />
                <ShabatScreen
                  {...props}
                  reaplaseScreanName={reaplaseScreanName}
                  changeOptions={changeOptions}
                />
                <Footer changeOptions={changeOptions} />
              </ImageLoder>
            )}
          </Stack.Screen>
          <Stack.Screen name="FastScreen">
            {props => (
              <ImageLoder
                source={require('../assets/images/screans/fastBackground.jpg')}>
                <Heder changeOptions={changeOptions} />
                <FastScreen
                  {...props}
                  reaplaseScreanName={reaplaseScreanName}
                  changeOptions={changeOptions}
                />
                <Footer changeOptions={changeOptions} />
              </ImageLoder>
            )}
          </Stack.Screen>
          <Stack.Screen name="OlimLatora">
            {props => (
              <ImageLoder
                source={require('../assets/images/screans/koraimBackground.png')}>
                <Heder changeOptions={changeOptions} />
                <OlimLatoraScreen
                  {...props}
                  reaplaseScreanName={reaplaseScreanName}
                  changeOptions={changeOptions}
                />
                <Footer changeOptions={changeOptions} />
              </ImageLoder>
            )}
          </Stack.Screen>
          <Stack.Screen name="Shiorim">
            {props => (
              <ImageLoder
                source={require('../assets/images/screans/shiorimBackground.png')}>
                <Heder changeOptions={changeOptions} />
                <ShiorimScreen
                  {...props}
                  reaplaseScreanName={reaplaseScreanName}
                  changeOptions={changeOptions}
                />
                <Footer changeOptions={changeOptions} />
              </ImageLoder>
            )}
          </Stack.Screen>
          <Stack.Screen name="HalachYomit">
            {props => (
              <ImageLoder
                source={require('../assets/images/screans/hlachYomitBackground.jpg')}>
                <Heder changeOptions={changeOptions} />
                <HalachYomitScreen
                  {...props}
                  reaplaseScreanName={reaplaseScreanName}
                  changeOptions={changeOptions}
                />
                <Footer changeOptions={changeOptions} />
              </ImageLoder>
            )}
          </Stack.Screen>
          <Stack.Screen name="Hnzchot">
            {props => (
              <ImageLoder
                source={require('../assets/images/screans/hantzchotBackground.png')}>
                <Heder changeOptions={changeOptions} />
                <HnzchotScreen
                  {...props}
                  reaplaseScreanName={reaplaseScreanName}
                  changeOptions={changeOptions}
                />
                <Footer changeOptions={changeOptions} />
              </ImageLoder>
            )}
          </Stack.Screen>
          <Stack.Screen name="GeneralMessages">
            {props => (
              <ImageLoder
                source={require('../assets/images/screans/messageBackground.png')}>
                <Heder changeOptions={changeOptions} />
                <GeneralMessagesScreen
                  {...props}
                  reaplaseScreanName={reaplaseScreanName}
                  changeOptions={changeOptions}
                />
                <Footer changeOptions={changeOptions} />
              </ImageLoder>
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default MainScreenRenders;

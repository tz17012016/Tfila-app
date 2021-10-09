import React, {useEffect, useRef} from 'react';
import ShiorimList from '../components/ShiorimList';
import {useFocusEffect} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {ImageBackground, Dimensions, View, Text} from 'react-native';
import Heder from '../components/Heder';
import Footer from '../components/Footer';
const {width, height} = Dimensions.get('screen');
const ShiorimScreen = ({
  zmanimsList,
  shiorimList,
  reaplaseScreanName,
  changeOptions,
}) => {
  const {Hnzchot = []} = changeOptions;
  const refCounter = useRef(changeOptions);
  const navigation = useNavigation();
  const checkOptions = (refCounter, reaplaseScreanName, navigation) => {
    switch (true) {
      case refCounter.current.Hnzchot?.length >= 1:
        return navigation.replace(reaplaseScreanName.Hnzchot);
      case refCounter.current.GeneralMessages?.length >= 1:
        return navigation.replace(reaplaseScreanName.GeneralMessages);
      case Object.keys(refCounter.current.Zmanim).length >= 1:
        return navigation.replace(reaplaseScreanName.Zmanim);
      default:
        return navigation.replace(reaplaseScreanName.WelcomeTime);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      // let secTimer = setTimeout(() => {
      //   checkOptions(refCounter, reaplaseScreanName, navigation);
      // }, 15 * 1000);
      // return () => clearTimeout(secTimer);
    }, []),
  );
  return (
    <>
      <Heder zmanimsList={zmanimsList} />
      <ShiorimList shiorimList={shiorimList} />
      <Footer zmanimsList={zmanimsList} changeOptions={changeOptions} />
    </>
  );
};

export default ShiorimScreen;

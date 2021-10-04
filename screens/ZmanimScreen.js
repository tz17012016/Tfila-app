import React, {useEffect, useRef} from 'react';
import ZmnimList from '../components/ZmnimList';
import {useFocusEffect} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

const ZmanimScreen = ({zmanimsList, reaplaseScreanName, changeOptions}) => {
  const refCounter = useRef(changeOptions);
  const navigation = useNavigation();
  const checkOptions = (refCounter, reaplaseScreanName, navigation) => {
    switch (true) {
      case refCounter.current.TfilotTime.length >= 1:
        return navigation.replace(reaplaseScreanName.WelcomeTime);
      case refCounter.current.OlimLatora?.length >= 1:
        return navigation.replace(reaplaseScreanName.TfilotTime);
      case changeOptions.Hnzchot?.length >= 1:
        return navigation.replace(reaplaseScreanName.OlimLatora);
      case changeOptions.GeneralMessages?.length >= 1:
        return navigation.replace(reaplaseScreanName.Hnzchot);
      case changeOptions.Zmanim?.length >= 1:
        return navigation.replace(reaplaseScreanName.GeneralMessages);
      default:
        return navigation.replace(reaplaseScreanName.Zmanim);
    }
  };

  // useEffect(() => {
  //   let secTimer = setInterval(() => {
  //     checkOptions(refCounter, reaplaseScreanName, navigation);
  //   }, 5 * 1000);
  //   return () => clearInterval(secTimer);
  // }, []);
  useFocusEffect(
    React.useCallback(() => {
      let secTimer = setTimeout(() => {
        checkOptions(refCounter, reaplaseScreanName, navigation);
      }, 50 * 1000);
      return () => clearTimeout(secTimer);
    }, []),
  );

  return <ZmnimList zmanimsList={zmanimsList} />;
};
export default ZmanimScreen;

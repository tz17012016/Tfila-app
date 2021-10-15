import React, {useRef} from 'react';
import ZmnimList from '../components/ZmnimList';
import {useFocusEffect} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import Heder from '../components/Heder';
import Footer from '../components/Footer';
const ZmanimScreen = ({reaplaseScreanName, changeOptions1}) => {
  const refCounter = useRef(changeOptions1);
  const navigation = useNavigation();
  const checkOptions = (refCounter, reaplaseScreanName, navigation) => {
    switch (true) {
      case Object.keys(refCounter.current.Zmanim).length >= 1:
        return navigation.replace(reaplaseScreanName.WelcomeTime);
      case refCounter.current.TfilotTime.length >= 1:
        return navigation.replace(reaplaseScreanName.TfilotTime);
      case refCounter.current.OlimLatora?.length >= 1:
        return navigation.replace(reaplaseScreanName.OlimLatora);
      case refCounter.current.Shiorim?.length >= 1:
        return navigation.replace(reaplaseScreanName.Shiorim);
      case refCounter.current.Hnzchot?.length >= 1:
        return navigation.replace(reaplaseScreanName.Hnzchot);
      case refCounter.current.GeneralMessages?.length >= 1:
        return navigation.replace(reaplaseScreanName.GeneralMessages);
      default:
        return navigation.replace(reaplaseScreanName.Zmanim);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      let secTimer = setTimeout(() => {
        checkOptions(refCounter, reaplaseScreanName, navigation);
      }, 30 * 1000);
      return () => clearTimeout(secTimer);
    }, []),
  );
  return (
    <>
      <Heder changeOptions1={changeOptions1} />
      <ZmnimList changeOptions1={changeOptions1} />
      <Footer changeOptions1={changeOptions1} />
    </>
  );
};
export default ZmanimScreen;

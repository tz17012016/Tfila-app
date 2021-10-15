import React, {useRef} from 'react';
import GeneralMessagesList from '../components/GeneralMessagesList';
import {useFocusEffect} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import Heder from '../components/Heder';
import Footer from '../components/Footer';
const GeneralMessagesScreen = ({reaplaseScreanName, changeOptions1}) => {
  const refCounter = useRef(changeOptions1);
  const navigation = useNavigation();
  //יש ליצור תיימר שלא יארך יותר מהתימר של המסך
  let mSTime = 0;
  //
  const checkOptions = (refCounter, reaplaseScreanName, navigation) => {
    switch (true) {
      case Object.keys(refCounter.current.Zmanim).length >= 1:
        return navigation.replace(reaplaseScreanName.Zmanim);
      case refCounter.current.OlimLatora?.length >= 1:
        return navigation.replace(reaplaseScreanName.OlimLatora);
      case refCounter.current.Hnzchot?.length >= 1:
        return navigation.replace(reaplaseScreanName.Hnzchot);
      default:
        return navigation.replace(reaplaseScreanName.GeneralMessages);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      let secTimer = setTimeout(() => {
        checkOptions(refCounter, reaplaseScreanName, navigation);
      }, 50 * 1000);
      return () => clearTimeout(secTimer);
    }, []),
  );

  return (
    <>
      <Heder changeOptions1={changeOptions1} />
      <GeneralMessagesList mSTime={mSTime} changeOptions1={changeOptions1} />
      <Footer changeOptions1={changeOptions1} />
    </>
  );
};

export default GeneralMessagesScreen;

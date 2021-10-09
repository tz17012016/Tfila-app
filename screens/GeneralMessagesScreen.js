import React, {useEffect, useRef} from 'react';
import GeneralMessagesList from '../components/GeneralMessagesList';
import {useFocusEffect} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import Heder from '../components/Heder';
import Footer from '../components/Footer';
const GeneralMessagesScreen = ({
  generalMessagesList,
  reaplaseScreanName,
  changeOptions,
  zmanimsList,
}) => {
  const refCounter = useRef(changeOptions);
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
      }, 15 * 1000);
      return () => clearTimeout(secTimer);
    }, []),
  );

  return (
    <>
      <Heder zmanimsList={zmanimsList} />
      <GeneralMessagesList
        mSTime={mSTime}
        generalMessagesList={generalMessagesList}
      />
      <Footer zmanimsList={zmanimsList} changeOptions={changeOptions} />
    </>
  );
};

export default GeneralMessagesScreen;

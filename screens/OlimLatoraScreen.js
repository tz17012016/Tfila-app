import React, {useEffect, useRef} from 'react';
import OlimLatoraList from '../components/OlimLatoraList';
import {useFocusEffect} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import Heder from '../components/Heder';
import Footer from '../components/Footer';
const OlimLatoraScreen = ({
  olimLatoraList,
  zmanimsList,
  reaplaseScreanName,
  changeOptions,
}) => {
  const refCounter = useRef(changeOptions);
  const navigation = useNavigation();
  const checkOptions = (refCounter, reaplaseScreanName, navigation) => {
    switch (true) {
      case refCounter.current.Shiorim?.length >= 1:
        return navigation.replace(reaplaseScreanName.Shiorim);
      case refCounter.current.Hnzchot?.length >= 1:
        return navigation.replace(reaplaseScreanName.Hnzchot);
      case refCounter.current.GeneralMessages?.length >= 1:
        return navigation.replace(reaplaseScreanName.GeneralMessages);
      case Object.keys(refCounter.current.Zmanim).length >= 1:
        return navigation.replace(reaplaseScreanName.Zmanim);
      default:
        return navigation.replace(reaplaseScreanName.OlimLatora);
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
      <OlimLatoraList olimLatoraList={olimLatoraList} />
      <Footer zmanimsList={zmanimsList} changeOptions={changeOptions} />
    </>
  );
};
// const OlimLatoraScreen = ({navigation, olimLatoraList}) => {
//   useFocusEffect(
//     React.useCallback(() => {
//       let secTimer = setTimeout(() => {
//         navigation.replace('Hnzchot');
//       }, 1 * 60 * 1000);
//       return () => clearTimeout(secTimer);
//     }, [navigation]),
//   );
//   return <OlimLatoraList olimLatoraList={olimLatoraList} />;
// };

export default OlimLatoraScreen;

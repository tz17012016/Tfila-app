import React, {useRef} from 'react';
import HnzchotList from '../components/HnzchotList';
import {useFocusEffect} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import Heder from '../components/Heder';
import Footer from '../components/Footer';
import {useRoute} from '@react-navigation/native';
const HnzchotScreen = ({reaplaseScreanName, changeOptions1}) => {
  const route = useRoute();
  const refCounter = useRef(changeOptions1);
  const navigation = useNavigation();
  const checkOptions = (refCounter, reaplaseScreanName, navigation) => {
    switch (true) {
      case refCounter.current.GeneralMessages?.length >= 1:
        return navigation.replace(reaplaseScreanName.GeneralMessages);
      case Object.keys(refCounter.current.Zmanim)?.length >= 1:
        return navigation.replace(reaplaseScreanName.Zmanim);
      case refCounter.current.TfilotTime?.length >= 1:
        return navigation.replace(reaplaseScreanName.TfilotTime);
      case refCounter.current.OlimLatora?.length >= 1:
        return navigation.replace(reaplaseScreanName.OlimLatora);
      default:
        return navigation.replace(reaplaseScreanName.Hnzchot);
    }
  };
  let screenName = refCounter.current.ScreenTimers?.filter(
    s => route?.name === s?.screenName,
  );
  useFocusEffect(
    React.useCallback(() => {
      let secTimer = setTimeout(() => {
        checkOptions(refCounter, reaplaseScreanName, navigation);
      }, (screenName[0]?.time === undefined || null || 0 ? 10 : screenName[0].time) * 1000);
      return () => clearTimeout(secTimer);
    }, []),
  );
  return (
    <>
      <Heder changeOptions1={changeOptions1} />
      <HnzchotList changeOptions1={changeOptions1} />
      <Footer changeOptions1={changeOptions1} />
    </>
  );
};

export default HnzchotScreen;

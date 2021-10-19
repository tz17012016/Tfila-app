import React, {useRef} from 'react';
import Prasha from '../components/Prasha';
import {useFocusEffect} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import Heder from '../components/Heder';
import Footer from '../components/Footer';
import {useRoute} from '@react-navigation/native';
const PrashaScreen = ({reaplaseScreanName, changeOptions}) => {
  const route = useRoute();
  const refCounter = useRef(changeOptions);
  const navigation = useNavigation();
  const checkOptions = (refCounter, reaplaseScreanName, navigation) => {
    switch (true) {
      case refCounter.current.TfilotTime?.length >= 1:
        return navigation.replace(reaplaseScreanName.TfilotTime);
      case refCounter.current.OlimLatora?.length >= 1:
        return navigation.replace(reaplaseScreanName.OlimLatora);
      case refCounter.current.Shiorim?.length >= 1:
        return navigation.replace(reaplaseScreanName.Shiorim);
      case refCounter.current.Hnzchot?.length >= 1:
        return navigation.replace(reaplaseScreanName.Hnzchot);
      case refCounter.current.GeneralMessages?.length >= 1:
        return navigation.replace(reaplaseScreanName.GeneralMessages);
      case Object.keys(refCounter.current.Zmanim)?.length >= 1:
        return navigation.replace(reaplaseScreanName.Zmanim);
      default:
        return navigation.replace(reaplaseScreanName.Prasha);
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
      <Heder changeOptions={changeOptions} />
      <Prasha changeOptions={changeOptions} />
      <Footer changeOptions={changeOptions} />
    </>
  );
};

export default PrashaScreen;

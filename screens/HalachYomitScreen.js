import React, {useRef, useState} from 'react';
import HalachYomit from '../components/HalachYomit';
import {useFocusEffect} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
const HalachYomitScreen = ({reaplaseScreanName, changeOptions}) => {
  const route = useRoute();
  const refCounter = useRef(changeOptions);
  const navigation = useNavigation();
  const [CounterTime, setCounterTime] = useState(5);
  let screenName = refCounter.current.ScreenTimers?.filter(
    s => route?.name === s?.screenName,
  );
  useFocusEffect(
    React.useCallback(() => {
      const checkOptions = () => {
        switch (true) {
          case refCounter.current.Hnzchot?.length >= 1:
            return navigation.replace(reaplaseScreanName.Hnzchot);
          case refCounter.current.GeneralMessages?.length >= 1:
            return navigation.replace(reaplaseScreanName.GeneralMessages);
          case Object.keys(refCounter.current.Zmanim)?.length >= 1:
            return navigation.replace(reaplaseScreanName.Zmanim);
          default:
            return navigation.replace(reaplaseScreanName.HalachYomit);
        }
      };
      setCounterTime(Number(screenName[0]?.time / 3 || 5));
      let secTimer = setTimeout(() => {
        navigation.replace(reaplaseScreanName.Zmanim);
        checkOptions(refCounter, reaplaseScreanName, navigation);
      }, (screenName[0]?.time === undefined || null || 0 ? 10 : screenName[0].time) * 1000);
      return () => clearTimeout(secTimer);
    }, [navigation, reaplaseScreanName, screenName]),
  );

  return (
    <>
      <HalachYomit changeOptions={changeOptions} CounterTime={CounterTime} />
    </>
  );
};

export default HalachYomitScreen;

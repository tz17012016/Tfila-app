import React, {useRef, useState} from 'react';
import HnzchotList from '../components/HnzchotList';
import {useFocusEffect} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import _ from 'lodash';
const HnzchotScreen = ({reaplaseScreanName, changeOptions}) => {
  const refCounter = useRef(changeOptions);
  const route = useRoute();
  const {Hnzchot = []} = refCounter.current;
  const navigation = useNavigation();
  const [Counter, setCounter] = useState(5);
  const [newHnzchots, setNewHnzchots] = useState([]);
  const [CounterTime, setCounterTime] = useState(5);
  let screenName = refCounter.current.ScreenTimers?.filter(
    s => route?.name === s?.screenName,
  );
  const sliceIntoChunks = (arr, chunkSize) => {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(chunk);
    }
    return res;
  };
  useFocusEffect(
    React.useCallback(() => {
      const checkOptions = () => {
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
      if (Hnzchot) {
        setNewHnzchots(sliceIntoChunks(Hnzchot, 6));
        setCounter(newHnzchots.length || 5);
        setCounterTime(Number((screenName[0]?.time || 5) / Counter));
      }
      let secTimer = setTimeout(() => {
        checkOptions(refCounter, reaplaseScreanName, navigation);
      }, (screenName[0]?.time === undefined || null || 0 ? 10 : screenName[0].time) * 1000);
      return () => clearTimeout(secTimer);
    }, [Counter, CounterTime]),
  );
  return (
    <>
      <HnzchotList changeOptions={changeOptions} CounterTime={CounterTime} />
    </>
  );
};

export default HnzchotScreen;

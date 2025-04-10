import React, {useRef} from 'react';
import GeneralMessagesList from '../components/GeneralMessagesList';
import {useFocusEffect} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
const GeneralMessagesScreen = ({reaplaseScreanName, changeOptions}) => {
  const route = useRoute();
  const refCounter = useRef(changeOptions);
  const navigation = useNavigation();
  let mSTime = 0;
  let screenName = refCounter.current.ScreenTimers?.filter(
    s => route?.name === s?.screenName,
  );
  useFocusEffect(
    React.useCallback(() => {
      const checkOptions = () => {
        switch (true) {
          case Object.keys(refCounter.current.Zmanim)?.length >= 1:
            return navigation.replace(reaplaseScreanName.Zmanim);
          case refCounter.current.OlimLatora?.length >= 1:
            return navigation.replace(reaplaseScreanName.OlimLatora);
          case refCounter.current.Hnzchot?.length >= 1:
            return navigation.replace(reaplaseScreanName.Hnzchot);
          default:
            return navigation.replace(reaplaseScreanName.GeneralMessages);
        }
      };
      let secTimer = setTimeout(() => {
        checkOptions(refCounter, reaplaseScreanName, navigation);
      }, (screenName[0]?.time === undefined || null || 0 ? 10 : screenName[0].time) * 1000);
      return () => clearTimeout(secTimer);
    }, [navigation, reaplaseScreanName, screenName]),
  );

  return (
    <>
      <GeneralMessagesList mSTime={mSTime} changeOptions={changeOptions} />
    </>
  );
};

export default GeneralMessagesScreen;

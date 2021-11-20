import React, {useRef} from 'react';
import OmerDescriptionfN from '../components/OmerDescriptionfN';
import {useFocusEffect} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
const OmerScreen = ({reaplaseScreanName, changeOptions}) => {
  const route = useRoute();
  const refCounter = useRef(changeOptions);
  const navigation = useNavigation();
  let screenName = refCounter.current.ScreenTimers?.filter(
    s => route?.name === s?.screenName,
  );
  useFocusEffect(
    React.useCallback(() => {
      const checkOptions = () => {
        switch (true) {
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
      <OmerDescriptionfN changeOptions={changeOptions} />
    </>
  );
};

export default OmerScreen;

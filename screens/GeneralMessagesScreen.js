import React, {useEffect} from 'react';
import GeneralMessagesList from '../components/GeneralMessagesList';
import {useFocusEffect} from '@react-navigation/native';
const GeneralMessagesScreen = ({
  navigation,
  generalMessagesList,
  reaplaseScreanName,
  changeOptions,
}) => {
  const checkOptions = (changeOptions, reaplaseScreanName, navigation) => {
    switch (changeOptions) {
      case changeOptions.zmanim.length >= 1:
        return navigation.replace(reaplaseScreanName.Zmanim);
      case changeOptions.tfilotTimes.length >= 1:
        return navigation.replace(reaplaseScreanName.TfilotTime);
      case changeOptions.hnzchots.length >= 1:
        return navigation.replace(reaplaseScreanName.OlimLatora);
      case changeOptions.GeneralMessages.length >= 1:
        return navigation.replace(reaplaseScreanName.Hnzchot);
      default:
        return navigation.replace(reaplaseScreanName.GeneralMessages);
    }
  };
  useEffect(() => {
    let secTimer = setInterval(() => {
      // checkOptions(changeOptions, reaplaseScreanName, navigation);
      switch (changeOptions) {
        case changeOptions.zmanim.length >= 1:
          return navigation.replace(reaplaseScreanName.Zmanim);
        case changeOptions.tfilotTimes.length >= 1:
          return navigation.replace(reaplaseScreanName.TfilotTime);
        case changeOptions.hnzchots.length >= 1:
          return navigation.replace(reaplaseScreanName.OlimLatora);
        case changeOptions.GeneralMessages.length >= 1:
          return navigation.replace(reaplaseScreanName.Hnzchot);
        default:
          return navigation.replace(reaplaseScreanName.GeneralMessages);
      }
    }, 1 * 60 * 1000);
    return () => clearInterval(secTimer);
  }, []);
  return <GeneralMessagesList generalMessagesList={generalMessagesList} />;
};
// const GeneralMessagesScreen = ({navigation, generalMessagesList}) => {
//   useFocusEffect(
//     React.useCallback(() => {
//       let secTimer = setTimeout(() => {
//         navigation.replace('Zmanim');
//       }, 1 * 60 * 1000);
//       return () => clearTimeout(secTimer);
//     }, [navigation]),
//   );
//   return <GeneralMessagesList generalMessagesList={generalMessagesList} />;
// };

export default GeneralMessagesScreen;

import React, {useEffect} from 'react';
import GeneralMessagesList from '../components/GeneralMessagesList';
import {useFocusEffect} from '@react-navigation/native';
// const GeneralMessagesScreen = ({navigation, generalMessagesList}) => {
//   useEffect(() => {
//     let secTimer = setInterval(() => {
//       navigation.replace('Zmanim');
//     }, 1 * 60 * 1000);
//     return () => clearInterval(secTimer);
//   }, []);
//   return <GeneralMessagesList generalMessagesList={generalMessagesList} />;
// };
const GeneralMessagesScreen = ({navigation, generalMessagesList}) => {
  useFocusEffect(
    React.useCallback(() => {
      let secTimer = setTimeout(() => {
        navigation.replace('Zmanim');
      }, 1 * 60 * 1000);
      return () => clearTimeout(secTimer);
    }, [navigation]),
  );
  return <GeneralMessagesList generalMessagesList={generalMessagesList} />;
};

export default GeneralMessagesScreen;

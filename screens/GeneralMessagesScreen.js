import React, {useEffect} from 'react';
import GeneralMessagesList from '../components/GeneralMessagesList';
const GeneralMessagesScreen = ({navigation}) => {
  useEffect(() => {
    let secTimer = setInterval(() => {
      navigation.replace('Zmanim');
    }, 2 * 60 * 1000);
    return () => clearInterval(secTimer);
  }, []);
  return <GeneralMessagesList />;
};

export default GeneralMessagesScreen;

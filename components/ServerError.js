import React from 'react';
import {View, Text} from 'react-native';
import ImageLoder from './ImageLoder';
import ChackEinternetConectionAgin from './ChackEinternetConectionAgin';

const ServerError = ({ErrorMessage}) => {
  ChackEinternetConectionAgin();
  ErrorMessage && console.log(ErrorMessage);
  return (
    <ImageLoder
      source={require('../assets/images/screans/splashBackground.jpg')}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            fontSize: 15,
            textAlign: 'center',
            fontFamily: 'HadasimCLM-Bold',
            color: '#ff0000',
            marginBottom: 20,
          }}>
          השרת נפל יש להמתין עד לחזרתו לפעילות...
        </Text>
      </View>
    </ImageLoder>
  );
};
export default ServerError;

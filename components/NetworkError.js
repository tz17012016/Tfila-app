import React from 'react';
import {View, Text} from 'react-native';
import {ImageLoder} from './ImageLoder';
import ChackEinternetConectionAgin from './ChackEinternetConectionAgin';
const NetworkError = ({loadDbFromRedux}) => {
  ChackEinternetConectionAgin(loadDbFromRedux);
  return (
    <ImageLoder
      source={require('../assets/images/screans/splashBackground.jpg')}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 15,
            textAlign: 'center',
            fontFamily: 'HadasimCLM-Bold',
            color: '#ff0000',
          }}>
          לא מחובר לאינטרנט! בדוק את החיבור ונסה שנית...
        </Text>
      </View>
    </ImageLoder>
  );
};
export default NetworkError;

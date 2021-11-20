import React from 'react';
import {View, Text} from 'react-native';
import {ImageLoder} from './ImageLoder';
import ChackIsAlive from './ChackIsAlive';

const Error = ({ErrorMessage}) => {
  ChackIsAlive();
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
          תקלה זמנית בקבלת המידע מהשרת יש לרענן את האפליקצייה בעוד מספר דקות
        </Text>
      </View>
    </ImageLoder>
  );
};
export default Error;

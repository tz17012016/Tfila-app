import React from 'react';
import {View, Dimensions, Image} from 'react-native';
const {width, height} = Dimensions.get('screen');
const Loding = () => {
  return (
    <View>
      <Image
        source={require('../assets/images/screans/splashBackground.jpg')}
        resizeMode="cover"
        style={{
          width,
          height,
          position: 'absolute',
        }}
      />
    </View>
  );
};
export default Loding;

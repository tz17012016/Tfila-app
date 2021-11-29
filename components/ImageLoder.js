import React from 'react';
import {Image, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
import FastImage from 'react-native-fast-image';
export const DefaultImageLoder = ({source, children}) => {
  const [didLoad, setLoad] = React.useState(false);
  const style = didLoad
    ? {
        position: 'absolute',
        width,
        height,
      }
    : {backgroundColor: 'rgba(0,0,0,0.8)'};
  return (
    <FastImage
      style={style}
      key={didLoad}
      source={{
        uri: Image.resolveAssetSource(source).uri,
        priority: FastImage.priority.high,
      }}
      resizeMode={FastImage.resizeMode.stretch}
      onLoad={() => setLoad(true)}>
      {children}
    </FastImage>
  );
};
export const ImageLoder = ({source, children}) => {
  const [didLoad, setLoad] = React.useState(false);
  const style = didLoad
    ? {
        position: 'absolute',
        width,
        height,
      }
    : {backgroundColor: 'rgba(0,0,0,0.8)'};
  return (
    <FastImage
      style={style}
      key={didLoad}
      source={{
        uri: Image.resolveAssetSource(source).uri,
        priority: FastImage.priority.high,
      }}
      resizeMode={FastImage.resizeMode.stretch}
      onLoad={() => setLoad(true)}>
      {children}
    </FastImage>
  );
};

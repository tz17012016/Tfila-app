import React from 'react';
import {Text, View, LogBox} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Yahrzeit from './Yahrzeit';
const Footer = ({changeOptions}) => {
  return (
    <View style={styles.container}>
      <>
        <View style={styles.innerBox}>
          <Yahrzeit changeOptions={changeOptions} />
        </View>

        <View style={styles.innerBox}>
          <View style={styles.innerBox1}>
            <Text style={styles.itemText}>בית כנסת בית התפילה</Text>
          </View>
        </View>
      </>
    </View>
  );
};
const styles = ScaledSheet.create({
  container: {
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'center',

    alignItems: 'center',
  },
  itemTitle: {
    fontSize: '25@s',
    textAlign: 'center',
    fontFamily: 'HadasimCLM-Bold',
    color: '#3333ff',
    fontWeight: '900',
    paddingBottom: '10@s',
  },
  innerBox: {
    flexDirection: 'column',

    width: '50%',
    alignItems: 'center',
  },
  innerBox1: {
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: '35@s',
    width: '70%',
  },
  itemText: {
    fontSize: '10@s',

    fontFamily: 'HadasimCLM-Bold',
    color: '#3333ff',
    fontWeight: '900',
    alignItems: 'center',
    paddingRight: '15@s',
  },
});

export default Footer;

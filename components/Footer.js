import React from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import Yahrzeit from './Yahrzeit';
const Footer = ({changeOptions}) => {
  const {Zmanim = {}} = changeOptions;

  return (
    <View style={styles.container}>
      <>
        <View style={styles.innerBox}>
          <Yahrzeit changeOptions={changeOptions} />
        </View>

        <View style={styles.innerBox}>
          {Zmanim && (Zmanim?.TefilaChanges || Zmanim?.Tahanun) ? (
            <></>
          ) : (
            <View style={styles.innerBox11}>
              <Text style={styles.itemText}>בית כנסת בית התפילה</Text>
            </View>
          )}
          <View
            style={
              Zmanim && (Zmanim?.TefilaChanges || Zmanim?.Tahanun)
                ? styles.innerBox1
                : styles.innerBox2
            }>
            <Text
              style={
                Zmanim && Zmanim?.TefilaChanges
                  ? [styles.sZmanimDate, styles.sZmanimDateSmall]
                  : styles.sZmanimDateSmall
              }>
              {`${Zmanim && Zmanim?.TefilaChanges.replace(/\n|\r/g, ' ')}`}
            </Text>
            <Text
              style={
                Zmanim && Zmanim?.Tahanun
                  ? [styles.sZmanimDate, styles.sZmanimDateSmall]
                  : styles.sZmanimDateSmall
              }>
              {`${Zmanim && Zmanim?.Tahanun}`}
            </Text>
            <Text
              style={
                Zmanim && Zmanim?.GeshemTal
                  ? [styles.sZmanimDate, styles.sZmanimDateSmall]
                  : styles.sZmanimDate
              }>
              {`${Zmanim && Zmanim?.GeshemTal}`}
            </Text>
            <Text
              style={
                Zmanim && Zmanim?.BirkatHashanim
                  ? [styles.sZmanimDate, styles.sZmanimDateSmall]
                  : styles.sZmanimDate
              }>
              {`${Zmanim && Zmanim?.BirkatHashanim}`}
            </Text>
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
    color: '#000',
    fontWeight: '900',
    paddingBottom: '10@s',
  },
  innerBox: {
    flexDirection: 'column',
    width: '50%',
    alignItems: 'center',
  },
  innerBox_A: {
    flexDirection: 'row',
  },
  innerBox1: {
    flex: 1,
    marginRight: '50@s',
    marginTop: '5@s',
    alignItems: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  innerBox11: {
    flex: 1,
    marginRight: '50@s',
    marginTop: '5@s',
    marginBottom: '-10@s',
    alignItems: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  innerBox2: {
    flex: 1,
    marginRight: '110@s',
    marginTop: '5@s',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: '10@s',
    fontFamily: 'HadasimCLM-Bold',
    color: '#000',
    fontWeight: '900',
    alignItems: 'center',
    marginLeft: '-17@s',
    marginTop: '3@s',
  },
  sZmanimDate: {
    fontSize: '10@s',
    fontFamily: 'HadasimCLM-Bold',
    color: '#000',
    fontWeight: '900',
    alignItems: 'center',
  },
  sZmanimDateSmall: {
    marginBottom: '1@s',
    marginTop: '1@s',
    marginLeft: '20@s',
    fontSize: '9@s',
    fontFamily: 'HadasimCLM-Bold',
    color: '#000',
    fontWeight: '900',
    alignItems: 'center',
  },
});

export default Footer;
/**
 * 
<View style={styles.innerBox1}>
  <Text style={styles.itemText}>בית כנסת בית התפילה</Text>
</View>
 */

import React from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Clock from './Clock';
import {GregDate, HebrewDate, holidayEvent} from '../utilities/Dates';

const Heder = ({changeOptions}) => {
  const {Zmanim = {}} = changeOptions;
  return (
    <View style={styles.container}>
      <View style={styles.innerBox}>
        <View style={styles.innerBox1}>
          <Text
            style={
              Zmanim && (Zmanim?.Omer || Zmanim?.Holiday)
                ? styles.sZmanimDate
                : styles.itemTitle
            }>
            {HebrewDate()}
          </Text>
          <Text
            style={
              Zmanim && (Zmanim?.Omer || Zmanim?.Holiday)
                ? [styles.sZmanimDate, styles.sZmanimDateSmall]
                : styles.sZmanimDateSmall
            }>
            {`${GregDate()}`}
            {Zmanim &&
              Zmanim?.Omer != 0 &&
              `       ${
                Zmanim && Zmanim?.Omer
                  ? `${Zmanim && Zmanim?.Omer} יום לעומר`
                  : ''
              }`}
            {Zmanim &&
              Zmanim.Holiday &&
              `        ${
                Zmanim && Zmanim.Holiday ? `${Zmanim && Zmanim?.Holiday}` : ''
              } `}
          </Text>
        </View>
      </View>
      <View style={styles.innerBox}>
        <Clock />
      </View>
      <View style={styles.innerBox}>
        <Text
          style={
            holidayEvent() != undefined ? styles.itemTitle11 : styles.itemTitle1
          }>
          {Zmanim && Zmanim?.SelectedDayHeader}
        </Text>
        {holidayEvent() != undefined ? (
          <Text style={styles.itemTitle112}>{`${holidayEvent()}`}</Text>
        ) : (
          <></>
        )}
      </View>
    </View>
  );
};
const styles = ScaledSheet.create({
  container: {
    height: '24%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemTitle: {
    fontSize: '18@s',
    textAlign: 'center',
    fontFamily: 'HadasimCLM-Bold',
    color: '#00308f',
    fontWeight: '900',
    marginLeft: '40@s',
  },
  itemTitle1: {
    fontSize: '20@s',
    textAlign: 'center',
    fontFamily: 'HadasimCLM-Bold',
    color: '#00308f',
    fontWeight: '900',
    marginBottom: '30@s',
    marginRight: '40@s',
  },
  itemTitle11: {
    fontSize: '20@s',
    textAlign: 'center',
    fontFamily: 'HadasimCLM-Bold',
    color: '#00308f',
    fontWeight: '900',
    marginRight: '40@s',
  },
  itemTitle112: {
    fontSize: '10@s',
    textAlign: 'center',
    fontFamily: 'HadasimCLM-Bold',
    color: '#00308f',
    fontWeight: '900',
    marginBottom: '30@s',
    marginRight: '40@s',
  },

  sZmanimDate: {
    fontSize: '15@s',
    textAlign: 'center',
    fontFamily: 'HadasimCLM-Bold',
    color: '#00308f',
    fontWeight: '900',
    marginLeft: '40@s',
  },
  sZmanimDateSmall: {
    fontSize: '11@s',
    textAlign: 'center',
    fontFamily: 'HadasimCLM-Bold',
    color: '#00308f',
    fontWeight: '900',
    marginLeft: '35@s',
  },
  sZmanimDate1: {},
  innerBox: {
    flexDirection: 'column',
    width: '33%',
    alignItems: 'center',
  },
  innerBox1: {
    paddingBottom: '36@s',
  },
});

export default Heder;

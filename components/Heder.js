import React from 'react';
import {Text, View, LogBox} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Clock from './Clock';
const Heder = ({zmanimsList}) => {
  const {loading, success, zmanim} = zmanimsList;
  return (
    <View style={styles.container}>
      {loading ? (
        <Text>loding...</Text>
      ) : success ? (
        <>
          <View style={styles.innerBox}>
            <Text
              style={
                zmanim && (zmanim.Omer || zmanim.Holiday)
                  ? styles.sZmanimDate
                  : styles.itemTitle
              }>
              {zmanim && zmanim.HebrewDate}
            </Text>
            {zmanim && zmanim.Omer ? (
              <Text style={[styles.sZmanimDate, styles.sZmanimDate1]}>
                היום יום ה {zmanim && zmanim.Omer} לעומר
              </Text>
            ) : (
              <></>
            )}
            {zmanim && zmanim.Holiday ? (
              <Text style={[styles.sZmanimDate, styles.sZmanimDate1]}>
                {zmanim && zmanim.Holiday}
              </Text>
            ) : (
              <></>
            )}
          </View>
          <View style={styles.innerBox}>
            <Clock />
          </View>
          <View style={styles.innerBox}>
            <Text style={styles.itemTitle}>
              {zmanim && zmanim.SelectedDayHeader}
            </Text>
          </View>
        </>
      ) : (
        <Text>error</Text>
      )}
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
    fontSize: '20@s',
    textAlign: 'center',
    fontFamily: 'HadasimCLM-Bold',
    color: '#3333ff',
    fontWeight: '900',
    paddingBottom: '10@s',
    paddingLeft: '5@s',
  },

  sZmanimDate: {
    fontSize: '15@s',
    textAlign: 'center',
    fontFamily: 'HadasimCLM-Bold',
    color: '#3333ff',
    fontWeight: '900',
    paddingLeft: '5@s',
    paddingBottom: '2@s',
  },
  sZmanimDate1: {
    paddingBottom: '10@s',
  },
  innerBox: {
    flexDirection: 'column',
    width: '33%',
    alignItems: 'center',
  },
});

export default Heder;

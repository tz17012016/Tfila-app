import React from 'react';
import {Text, View, Image} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import {HebrewCalendar, HDate, Zmanim} from '@hebcal/core';
const Yahrzeit = ({changeOptions: {Hnzchot = []}}) => {
  const [yahrzeitIndex, setYahrzeitIndex] = React.useState(0);
  const [yahrzeit, setYahrzeit] = React.useState([]);
  React.useEffect(() => {
    // Move on to the next yahrzeit every `n` milliseconds
    let timeout;
    setYahrzeit(checkYahrzeitDate(Hnzchot));
    if (yahrzeitIndex < yahrzeit.length - 1) {
      timeout = setTimeout(() => setYahrzeitIndex(yahrzeitIndex + 1), 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [yahrzeitIndex]);
  const checkYahrzeitDate = (Hnzchot = []) => {
    let tempArr = Hnzchot.filter(h => {
      let nextSutInTwoWeeks = new Date().setDate(
        new Date().getDate() + (((7 - new Date().getDay()) % 7) + 7 || 7),
      );
      let thisMonth = new Date().getMonth() + 1;
      let dateOfDeathMonth = new Date(h.dateOfDeath).getMonth() + 1;
      let firstDayOfThisWeek = new Date().setDate(
        new Date().getDate() -
          new Date().getDay() +
          (new Date().getDay() == 0 ? -6 : 0),
      );
      const getYahrzeitDate = HebrewCalendar.getYahrzeit(
        new HDate().getFullYear(),
        new Date(h.dateOfDeath),
      )?.greg();
      const getYahrzeitNextDateDay = new HDate(getYahrzeitDate).next().greg();

      if (
        dateOfDeathMonth === thisMonth &&
        firstDayOfThisWeek <= getYahrzeitDate &&
        nextSutInTwoWeeks >= getYahrzeitDate &&
        getYahrzeitNextDateDay > getYahrzeitDate
      ) {
        return {
          name: h.name ? h.name : '',
          gender: h.gender ? h.gender : '',
          parntName: h.parntName ? h.parntName : '',
          dateOfDeath: h.dateOfDeath ? h.dateOfDeath : '',
        };
      }
    });
    return tempArr;
  };
  return (
    <View style={styles.innerBox}>
      {yahrzeit[yahrzeitIndex] ? (
        <View style={styles.innerBox_A}>
          <Image
            source={require('../assets/images/objects/nerNeshama.png')}
            imageStyle={{resizeMode: 'contain'}}
            style={styles.image}
          />
          <View style={styles.innerBox_B}>
            <Text style={styles.itemText1}>{`יום השנה`}</Text>
            <Text style={styles.itemText}>
              {`${yahrzeit[yahrzeitIndex]?.name} ${yahrzeit[yahrzeitIndex]?.gender} ${yahrzeit[yahrzeitIndex]?.parntName} ז"ל`}
            </Text>
          </View>
          <Image
            source={require('../assets/images/objects/nerNeshama.png')}
            imageStyle={{resizeMode: 'contain'}}
            style={styles.image}
          />
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};
const styles = ScaledSheet.create({
  innerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginLeft: '60@s',
    flex: 1,
  },
  innerBox_A: {
    flexDirection: 'row',
  },
  innerBox_B: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  itemText: {
    fontSize: '11@s',
    fontFamily: 'HadasimCLM-Bold',
    color: '#000',
    fontWeight: '900',
    alignItems: 'center',
    marginBottom: '1@s',
  },
  itemText1: {
    marginTop: '6@s',
    fontSize: '10@s',
    fontFamily: 'HadasimCLM-Bold',
    color: '#000',
    fontWeight: '900',
    alignItems: 'center',
  },
  image: {
    width: '14@s',
    height: '12@s',
    marginTop: '14@s',
    marginHorizontal: '5@s',
  },
});
export default Yahrzeit;

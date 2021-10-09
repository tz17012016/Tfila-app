import React from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
const Yahrzeit = ({changeOptions}) => {
  const [yahrzeitIndex, setYahrzeitIndex] = React.useState(0);
  const [yahrzeit, setYahrzeit] = React.useState([]);
  const {Hnzchot} = changeOptions;
  console.log(Hnzchot);

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

  const checkYahrzeitDate = Hnzchot => {
    console.log('Hnzchot', Hnzchot);
    let tempArr = Hnzchot.filter(h => {
      let yahrzeitDate = new Date(h.dateOfDeath).setFullYear(
        new Date().getFullYear(),
      );
      let nextSutInTwoWeeks = new Date().setDate(
        new Date().getDate() + (((7 - new Date().getDay()) % 7) + 7 || 7),
      );
      let thisMonth = new Date().getMonth();
      let firstDayOfThisWeek = new Date().setDate(
        new Date().getDate() -
          new Date().getDay() +
          (new Date().getDay() == 0 ? -6 : 1),
      );
      if (
        new Date(yahrzeitDate).getMonth() === thisMonth &&
        firstDayOfThisWeek <= new Date(yahrzeitDate) &&
        nextSutInTwoWeeks >= new Date(yahrzeitDate)
      ) {
        return {
          name: h.name ? h.name : '',
          gender: h.gender ? h.gender : '',
          parntName: h.parntName ? h.parntName : '',
          dateOfDeath: h.dateOfDeath ? h.dateOfDeath : '',
        };
      }
    });
    console.log(tempArr);
    return tempArr;
  };
  console.log(yahrzeit);
  return (
    <View style={styles.innerBox}>
      <Text style={styles.itemText}>
        {`יום השנה של: ${yahrzeit[yahrzeitIndex]?.name} ${
          yahrzeit[yahrzeitIndex]?.gender === 'male' ? 'בת' : 'בן'
        } ${yahrzeit[yahrzeitIndex]?.parntName}`}
      </Text>
    </View>
  );
};
const styles = ScaledSheet.create({
  innerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '70%',
  },

  itemText: {
    fontSize: '10@s',
    fontFamily: 'HadasimCLM-Bold',
    color: '#3333ff',
    fontWeight: '900',
    alignItems: 'center',
    paddingRight: '5@s',
  },
});
export default Yahrzeit;

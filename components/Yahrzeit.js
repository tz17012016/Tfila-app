import React from 'react';
import {Text, View, Image} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
const Yahrzeit = ({changeOptions1: {Hnzchot = []}}) => {
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
    return tempArr;
  };
  return (
    <View style={styles.innerBox}>
      {yahrzeit[yahrzeitIndex] ? (
        <View style={styles.innerBox_A}>
          <Image
            source={require('../images/objects/nerNeshama.png')}
            imageStyle={{resizeMode: 'contain'}}
            style={styles.image}
          />
          <Text style={styles.itemText}>
            {`יום השנה של ${yahrzeit[yahrzeitIndex]?.name} ${yahrzeit[yahrzeitIndex]?.gender} ${yahrzeit[yahrzeitIndex]?.parntName}`}
          </Text>
          <Image
            source={require('../images/objects/nerNeshama.png')}
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
    width: '80%',
  },
  innerBox_A: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  itemText: {
    fontSize: '10@s',
    fontFamily: 'HadasimCLM-Bold',
    color: '#000',
    fontWeight: '900',
    alignItems: 'center',
    marginTop: '5@s',
  },
  image: {
    width: '14@s',
    height: '12@s',
    marginHorizontal: '10@s',
    marginTop: '2@s',
  },
});
export default Yahrzeit;

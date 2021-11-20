import React from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
const Hagim = ({changeOptions}) => {
  const {Zmanim = {}} = changeOptions;
  const s = `${Zmanim?.Holiday} שמח, לכל באי בית הכנסת ומשפחותיהם`;
  return (
    <View style={styles.container}>
      <View style={styles.containerB}>
        <View style={styles.innergridViewA} />
        <View style={styles.innergridViewB}>
          <View style={styles.gridView}>
            {(Zmanim && Zmanim?.Holiday.indexOf('סוכות') !== -1) ||
            Zmanim?.Holiday.indexOf('פסח') !== -1 ||
            Zmanim?.Holiday.indexOf('חנוכה') !== -1 ||
            Zmanim?.Holiday.indexOf('פורים') !== -1 ||
            Zmanim?.Holiday.indexOf('דחוה') !== -1 ||
            Zmanim?.Holiday.indexOf('שבועות') !== -1 ? (
              <View style={styles.boxContainer}>
                <Text style={styles.itemText}>
                  {Zmanim && s.replace(/(לכל[^\)]+)/g, '')}
                </Text>
                <Text style={styles.inerItemText}>
                  {Zmanim && s.match(/(לכל[^\)]+)/g, '')[0]}
                </Text>
              </View>
            ) : (
              <View />
            )}
          </View>
        </View>
        <View style={styles.innergridViewA} />
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    height: '66%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  containerB: {
    flex: 2.8,
    flexDirection: 'row',
  },
  gridView: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '100@s',
  },
  innergridViewA: {
    flex: 1.2,
    flexDirection: 'row',
  },
  innergridViewB: {
    borderRadius: '10@s',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 4.8,
    flexDirection: 'column',
  },
  boxContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '60@s',
  },
  itemText: {
    fontSize: '20@s',
    color: '#000',
    textAlign: 'center',
    fontFamily: 'stam',
    marginBottom: '15@s',
  },
  inerItemText: {
    fontSize: '20@s',
    color: '#000',
    textAlign: 'center',
    fontFamily: 'stam',
    marginBottom: '30@s',
  },
});

export default Hagim;

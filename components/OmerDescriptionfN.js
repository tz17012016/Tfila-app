import React from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
const OmerDescriptionfN = ({changeOptions1}) => {
  const {Zmanim = {}} = changeOptions1;

  return (
    <View style={styles.container}>
      <View style={styles.containerB}>
        <View style={styles.innergridViewA} />
        <View style={styles.innergridViewB}>
          <View style={styles.gridView}>
            <View style={styles.boxContainer}>
              <View>
                <Text style={styles.itemText}>
                  {Zmanim &&
                    Zmanim?.OmerDescription.replace(/(שהם[^\)]+)/g, '')}
                </Text>
                <Text style={styles.inerItemText}>
                  {Zmanim &&
                    Zmanim?.OmerDescription.match(/(שהם[^\)]+)/g, '')[0]}
                </Text>
              </View>
            </View>
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
    borderRadius: '10@s',
  },
  itemText: {
    fontSize: '17@s',
    color: '#000',
    textAlign: 'center',
    fontFamily: 'stam',
    marginBottom: '15@s',
    marginLeft: '20@s',
  },
  inerItemText: {
    fontSize: '17@s',
    color: '#000',
    textAlign: 'center',
    fontFamily: 'stam',
    marginBottom: '30@s',
    marginRight: '20@s',
  },
});

export default OmerDescriptionfN;

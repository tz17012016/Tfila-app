import React from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const Prasha = ({changeOptions1}) => {
  const {Zmanim = {}} = changeOptions1;
  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerA}>
          <View style={styles.innergridViewA}></View>
          <View style={styles.innergridViewB}>
            <View style={styles.innerViewA}>
              <View style={styles.box3}>
                <View style={styles.box5}>
                  <Text style={styles.itemTextShide}>
                    {Zmanim && Zmanim?.MotzeyShabat}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.innerViewB}>
              <View style={styles.box1}></View>
              <View style={styles.box2_1}>
                <Text style={styles.itemTextShide_A}>
                  {Zmanim && (Zmanim?.ParashaOnly || Zmanim?.Parasha)}
                </Text>
              </View>
              <View style={styles.box1}></View>
              <View style={styles.box2_2}>
                <Text style={styles.itemTextShide_B}>
                  {Zmanim &&
                    (Zmanim?.HaftaraTemani.replace(/\(([^\)]+)\)/g, '') ||
                      Zmanim?.Haftara.replace(/\(([^\)]+)\)/g, '') ||
                      Zmanim?.HaftaraSfaradi.replace(/\(([^\)]+)\)/g, ''))}
                </Text>
              </View>
            </View>
            <View style={styles.innerViewA}>
              <View style={styles.box3}>
                <View style={styles.box4}>
                  <Text style={styles.itemTextShide1}>
                    {Zmanim && Zmanim?.HadlakatNerot}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.innergridViewA}></View>
        </View>
      </View>
    </>
  );
};

const styles = ScaledSheet.create({
  container: {
    height: '66%',
    flexDirection: 'column',

    justifyContent: 'center',
    marginHorizontal: '5%',
    alignItems: 'center',
  },
  containerA: {
    flex: 1,
    flexDirection: 'row',
  },
  innergridViewA: {
    flex: 0.3,
    flexDirection: 'row',
  },
  innergridViewB: {
    flex: 2.5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderRadius: 10,
  },
  innerViewA: {
    flex: 1,
    flexDirection: 'column',
  },
  innerViewB: {
    flex: 1.3,

    flexDirection: 'column',
  },
  box1: {
    flex: 1.7,
    height: '100@s',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box2: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
    height: '100@s',
    marginBottom: '2@s',
  },
  box2_1: {
    flex: 1.5,
    marginTop: '15@s',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100@s',
  },
  box2_2: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
    height: '100@s',
    marginBottom: '20@s',
  },
  box3: {
    flex: 1.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box4: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '30@s',
    marginBottom: '47@s',
  },
  box5: {
    marginRight: '35@s',
    marginBottom: '45@s',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    fontSize: '10@s',
    fontFamily: 'mugrabi-bold-aaa',
    color: '#000',
    fontWeight: '900',
    alignItems: 'center',
    paddingRight: '5@s',
  },
  itemTextShide: {
    fontSize: '20@s',
    fontFamily: 'mugrabi-bold-aaa',
    color: '#000',
    fontWeight: '900',
    alignItems: 'center',
  },
  itemTextShide_A: {
    fontSize: '28@s',
    fontFamily: 'stam',
    color: '#000',
    fontWeight: '900',
    alignItems: 'center',
    paddingRight: '5@s',
  },
  itemTextShide_B: {
    fontSize: '15@s',
    fontFamily: 'stam',
    color: '#000',
    fontWeight: '900',
    alignItems: 'center',
    paddingRight: '5@s',
  },
  itemTextShide1: {
    fontSize: '20@s',
    fontFamily: 'mugrabi-bold-aaa',
    color: '#000',
    fontWeight: '900',
    alignItems: 'center',
  },
  itemTextShideTitle: {
    fontSize: '15@s',
    fontFamily: 'mugrabi-bold-aaa',
    color: '#000',
    fontWeight: '900',
  },
});

export default Prasha;

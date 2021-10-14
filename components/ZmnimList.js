import React from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
const ZmnimList = ({changeOptions1}) => {
  const {Zmanim} = changeOptions1;
  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerA}>
          <View style={styles.innergridViewA}></View>
          <View style={styles.innergridViewB}>
            <View style={styles.rowContainerA}>
              <View style={styles.columnContainerA}>
                <View style={styles.boxContainer_A}>
                  <Text style={[styles.itemName, styles.textAlign1]}>
                    {Zmanim && Zmanim.PlagHamincha}
                  </Text>
                </View>
              </View>
              <View style={styles.columnContainerA}>
                <View style={styles.boxContainer_A}>
                  <Text style={[styles.itemName, styles.textAlign2]}>
                    {Zmanim && Zmanim.AlotHashahar}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.rowContainerB}></View>
            <View style={styles.rowContainerA}>
              <View style={styles.columnContainerB}>
                <View style={styles.boxContainer_B}>
                  <Text style={[styles.itemName, styles.textAlign3]}>
                    {Zmanim && Zmanim.SunSet}
                  </Text>
                </View>
              </View>
              <View style={styles.columnContainerB}>
                <View style={styles.boxContainer_B}>
                  <Text style={[styles.itemName, styles.textAlign4]}>
                    {Zmanim && Zmanim.MidDay}
                  </Text>
                </View>
              </View>
              <View style={styles.columnContainerB}>
                <View style={styles.boxContainer_B}>
                  <Text style={[styles.itemName, styles.textAlign5]}>
                    {Zmanim && Zmanim.SofZmanKriatShmaGra}
                  </Text>
                </View>
              </View>
              <View style={styles.columnContainerB}>
                <View style={styles.boxContainer_B}>
                  <Text style={[styles.itemName, styles.textAlign6]}>
                    {Zmanim && Zmanim.SunRise}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.rowContainerB}></View>
            <View style={styles.rowContainerA}>
              <View style={styles.columnContainerB}>
                <View style={styles.boxContainer_C}>
                  <Text style={[styles.itemName, styles.textAlign7]}>
                    {Zmanim && Zmanim.ZetHakochavim}
                  </Text>
                </View>
              </View>
              <View style={styles.columnContainerB}>
                <View style={styles.boxContainer_C}>
                  <Text style={[styles.itemName, styles.textAlign8]}>
                    {Zmanim && Zmanim.MinhaGedola}
                  </Text>
                </View>
              </View>
              <View style={styles.columnContainerB}>
                <View style={styles.boxContainer_C}>
                  <Text style={[styles.itemName, styles.textAlign9]}>
                    {Zmanim && Zmanim.SofZmanTfilaGra}
                  </Text>
                </View>
              </View>
              <View style={styles.columnContainerB}>
                <View style={styles.boxContainer_C}>
                  <Text style={[styles.itemName, styles.textAlign10]}>
                    {Zmanim && Zmanim.ZmanTalitVeTfilin}
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
  },
  containerA: {
    flex: 2.9,
    flexDirection: 'row',
  },
  innergridViewA: {
    flex: 1,

    flexDirection: 'row',
  },
  innergridViewB: {
    flex: 5,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  innerContainerB: {},
  rowContainerA: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1.5,
  },
  rowContainerB: {
    flex: 0.3,
  },
  columnContainerA: {
    justifyContent: 'center',
    flex: 1,
  },
  columnContainerB: {
    flex: 1,
    justifyContent: 'center',
  },
  boxContainer_A: {
    alignItems: 'center',
    marginBottom: '5@s',
    justifyContent: 'center',
  },
  boxContainer_B: {
    alignItems: 'center',
    marginBottom: '5@s',
    justifyContent: 'center',
  },
  boxContainer_C: {
    alignItems: 'center',
    marginTop: '5@s',
    justifyContent: 'center',
  },

  itemName: {
    fontSize: '20@s',
    color: '#000',
    textAlign: 'center',
    fontFamily: 'DavidCLM-Bold',
  },
  textAlign1: {
    marginRight: '70@s',
  },
  textAlign2: {
    marginLeft: '70@s',
  },
  textAlign3: {
    marginRight: '10@s',
  },
  textAlign4: {
    marginRight: '5@s',
  },
  textAlign5: {
    marginLeft: '7@s',
  },
  textAlign6: {
    marginLeft: '15@s',
  },
  textAlign7: {
    marginRight: '10@s',
  },
  textAlign8: {
    marginRight: '5@s',
  },
  textAlign9: {
    marginLeft: '7@s',
  },
  textAlign10: {
    marginLeft: '15@s',
  },
});

export default ZmnimList;

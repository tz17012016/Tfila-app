import React from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const OlimLatoraList = ({changeOptions1}) => {
  const {OlimLatora} = changeOptions1;
  const oleObject = Object.assign({}, OlimLatora);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerB}>
          <View style={styles.innergridViewA}></View>
          <View style={styles.innergridViewB}>
            <View style={styles.column}>
              <View style={[styles.row, styles.space]}>
                <View style={styles.box1}>
                  <Text style={styles.itemTitle}>{oleObject[5]?.name}</Text>
                </View>
              </View>
              <View style={[styles.row, styles.bigRow]}>
                <View style={styles.box2}>
                  <Text style={styles.itemTitle}>{oleObject[2]?.name}</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.box3}>
                  <Text style={styles.itemTitle}>{oleObject[0]?.name}</Text>
                </View>
              </View>
            </View>
            <View style={styles.column}>
              <View style={styles.row}></View>
              <View style={styles.row}>
                <View style={styles.box4}>
                  <Text style={styles.itemTitle}>{oleObject[6]?.name}</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.box5}>
                  <Text style={styles.itemTitle}>{oleObject[3]?.name}</Text>
                </View>
              </View>
            </View>
            <View style={styles.column}>
              <View style={[styles.row, styles.space]}>
                <View style={styles.box6}>
                  <Text style={styles.itemTitle}>{oleObject[7]?.name}</Text>
                </View>
              </View>
              <View style={[styles.row, styles.bigRow]}>
                <View style={styles.box7}>
                  <Text style={styles.itemTitle}>{oleObject[4]?.name}</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.box8}>
                  <Text style={styles.itemTitle}>{oleObject[1]?.name}</Text>
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
  containerB: {
    flex: 2.8,
    flexDirection: 'row',
  },

  innergridViewA: {
    flex: 0.7,
    flexDirection: 'row',
  },
  innergridViewB: {
    flex: 6,
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
    flex: 1,
  },
  row: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.6,
  },
  bigRow: {
    flex: 1,
  },
  space: {
    flex: 1,
  },
  box1: {
    marginLeft: '50@s',
    marginTop: '25@s',
  },
  box2: {
    marginTop: '20@s',
    marginRight: '5@s',
  },
  box3: {
    marginTop: '20@s',
    marginLeft: '40@s',
  },
  box4: {
    marginLeft: '5@s',
  },
  box5: {
    marginLeft: '10@s',
  },
  box6: {
    marginRight: '15@s',
    marginTop: '27@s',
  },
  box7: {
    marginTop: '20@s',
    marginLeft: '10@s',
  },
  box8: {
    marginTop: '20@s',
    marginRight: '25@s',
  },
  itemTitle: {
    fontSize: '16@s',
    textAlign: 'center',
    fontFamily: 'HadasimCLM-Bold',
    color: '#000',
    fontWeight: '900',
  },
});

export default OlimLatoraList;

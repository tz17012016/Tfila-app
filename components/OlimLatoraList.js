import React from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const OlimLatoraList = ({changeOptions}) => {
  const {OlimLatora = []} = changeOptions;
  let o1 = OlimLatora.filter(ol => ol.title === 'ראשון')[0]?.name || '';
  let o2 = OlimLatora.filter(ol => ol.title === 'שני')[0]?.name || '';
  let o3 = OlimLatora.filter(ol => ol.title === 'שלישי')[0]?.name || '';
  let o4 = OlimLatora.filter(ol => ol.title === 'רביעי')[0]?.name || '';
  let o5 = OlimLatora.filter(ol => ol.title === 'חמישי')[0]?.name || '';
  let o6 = OlimLatora.filter(ol => ol.title === 'שישי')[0]?.name || '';
  let o7 = OlimLatora.filter(ol => ol.title === 'שביעי')[0]?.name || '';
  let o8 = OlimLatora.filter(ol => ol.title === 'מפטיר')[0]?.name || '';

  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerB}>
          <View style={styles.innergridViewA}></View>
          <View style={styles.innergridViewB}>
            <View style={styles.column}>
              <View style={[styles.row, styles.space]}>
                <View style={styles.box1}>
                  <Text style={styles.itemTitle}>{o3}</Text>
                </View>
              </View>
              <View style={[styles.row, styles.bigRow]}>
                <View style={styles.box2}>
                  <Text style={styles.itemTitle}>{o6}</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.box3}>
                  <Text style={styles.itemTitle}>{o8}</Text>
                </View>
              </View>
            </View>
            <View style={styles.column}>
              <View style={styles.row}></View>
              <View style={styles.row}>
                <View style={styles.box4}>
                  <Text style={styles.itemTitle}>{o2}</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.box5}>
                  <Text style={styles.itemTitle}>{o5}</Text>
                </View>
              </View>
            </View>
            <View style={styles.column}>
              <View style={[styles.row, styles.space]}>
                <View style={styles.box6}>
                  <Text style={styles.itemTitle}>{o1}</Text>
                </View>
              </View>
              <View style={[styles.row, styles.bigRow]}>
                <View style={styles.box7}>
                  <Text style={styles.itemTitle}>{o4}</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.box8}>
                  <Text style={styles.itemTitle}>{o7}</Text>
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
    marginLeft: '40@s',
    marginTop: '25@s',
  },
  box2: {
    marginTop: '15@s',
    marginRight: '15@s',
  },
  box3: {
    marginTop: '15@s',
    marginLeft: '35@s',
  },
  box4: {
    marginLeft: '7@s',
    marginBottom: '8@s',
  },
  box5: {
    marginLeft: '15@s',
    marginBottom: '8@s',
  },
  box6: {
    marginRight: '8@s',
    marginTop: '27@s',
  },
  box7: {
    marginTop: '15@s',
    marginLeft: '25@s',
  },
  box8: {
    marginTop: '15@s',
    marginRight: '10@s',
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
/**
 *  <View style={styles.container}>
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
 */

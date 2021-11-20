import React from 'react';
import {Text, View, ImageBackground} from 'react-native';
import {HebrewDateFromDate} from '../utilities/Dates';
import {ScaledSheet} from 'react-native-size-matters';

const HnzchotList = ({changeOptions, CounterTime}) => {
  const {Hnzchot = []} = changeOptions;
  const [arrIndex, setArrIndex] = React.useState(0);
  let newHnzchots = [];
  React.useEffect(() => {
    // Move on to the next arr every `n` milliseconds
    let timeout;
    if (arrIndex < newHnzchots.length - 1) {
      timeout = setTimeout(() => setArrIndex(arrIndex + 1), CounterTime * 1000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [newHnzchots, arrIndex]);

  const sliceIntoChunks = (arr, chunkSize) => {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(chunk);
    }
    return res;
  };
  if (Hnzchot) {
    newHnzchots = sliceIntoChunks(Hnzchot, 6);
  }
  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerB}>
          <View style={styles.innergridViewA} />
          <View style={styles.innergridViewB}>
            <View style={styles.innerViewA}></View>
            <View style={styles.innerViewB}>
              <View style={styles.gridView}>
                <View style={styles.gridView}>
                  {newHnzchots[arrIndex] &&
                    newHnzchots[arrIndex].map(hnzchot => {
                      return (
                        <View key={hnzchot?._id} style={styles.boxContainer}>
                          <ImageBackground
                            style={styles.ImageBackground}
                            source={require('../assets/images/objects/neshamaBox.png')}>
                            <View style={styles.innerBoxContainer}>
                              <View style={styles.innerContainerC}></View>
                              <View style={styles.innerContainerB}>
                                <Text style={styles.itemTitle}>
                                  {`${hnzchot?.name} ${hnzchot?.gender} ${hnzchot?.parntName}`}
                                </Text>

                                <Text style={styles.itemName}>
                                  {HebrewDateFromDate(hnzchot?.dateOfDeath)}
                                </Text>
                                <Text
                                  style={styles.itemName}>{`ת.נ.צ.ב.ה`}</Text>
                              </View>
                            </View>
                          </ImageBackground>
                        </View>
                      );
                    })}
                </View>
              </View>
            </View>
          </View>
          <View style={styles.innergridViewA} />
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
    flex: 0.7,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  containerB: {
    flex: 2.8,

    flexDirection: 'row',
  },
  innerBoxContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerViewA: {
    flex: 1,
  },
  innerViewB: {
    flex: 4.5,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  gridView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  innergridViewA: {
    flex: 1,
    flexDirection: 'row',
  },
  innergridViewB: {
    flex: 5.5,
    flexDirection: 'column',
  },
  innergridViewC: {},

  innerContainerA: {},
  innerContainerB: {},
  boxContainer: {
    width: '150@s',
    height: '120@ms',
  },
  innerContainerC: {},
  headerTextColor: {
    fontSize: '35@s',
    color: '#3333ff',
    textAlign: 'center',
    fontFamily: 'DavidCLM-Bold',
  },
  itemName: {
    fontSize: '10@s',
    color: '#000',
    textAlign: 'center',
    fontFamily: 'DavidCLM-Bold',
  },
  itemTitle: {
    fontSize: '10@s',
    textAlign: 'center',
    fontFamily: 'DavidCLM-Bold',
    color: '#000',
    fontWeight: '900',
    marginTop: '15@s',
  },
  ImageBackground: {
    flex: 1,
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  textWithShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
});

export default HnzchotList;

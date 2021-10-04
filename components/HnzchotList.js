import React from 'react';
import {Text, View, Image, ImageBackground, LogBox} from 'react-native';
import Hebcal from 'hebcal';
import {ScaledSheet} from 'react-native-size-matters';

const HnzchotList = ({hnzchotList}) => {
  const {hnzchots, loading, success} = hnzchotList;
  const [arrIndex, setArrIndex] = React.useState(0);
  let newHnzchots = [];
  React.useEffect(() => {
    // Move on to the next arr every `n` milliseconds
    let timeout;
    if (arrIndex < newHnzchots.length - 1) {
      timeout = setTimeout(() => setArrIndex(arrIndex + 1), 5 * 1000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [newHnzchots, arrIndex]);

  const HebrewDate = dateOfDeath => {
    let hebrewDate = new Hebcal.HDate(new Date(dateOfDeath)).toString('h');
    return hebrewDate;
  };

  const sliceIntoChunks = (arr, chunkSize) => {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(chunk);
    }
    return res;
  };
  if (hnzchots) {
    newHnzchots = sliceIntoChunks(hnzchots, 8);
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerA}>
          <Text style={[styles.headerTextColor, styles.textWithShadow]}>
            הנצחות
          </Text>
        </View>
        <View style={styles.containerB}>
          {loading ? (
            <Text>loding...</Text>
          ) : success ? (
            <>
              <View style={styles.innergridViewA} />
              <View style={styles.innergridViewB}>
                <View style={styles.gridView}>
                  {newHnzchots[arrIndex] &&
                    newHnzchots[arrIndex].map(hnzchot => {
                      return (
                        <View key={hnzchot._id} style={styles.boxContainer}>
                          <ImageBackground
                            style={styles.ImageBackground}
                            source={require('../images/Untitled-1.png')}>
                            <View style={styles.innerBoxContainer}>
                              <View style={styles.innerContainerC}>
                                <Image
                                  style={{
                                    height: 50,
                                    width: 10,
                                  }}
                                  source={require('../images/giphy.gif')}
                                />
                              </View>
                              <View style={styles.innerContainerB}>
                                <Text style={styles.itemTitle}>
                                  {`${hnzchot?.parntName}  ${hnzchot?.name}`}
                                </Text>
                                <Text style={styles.itemName}>
                                  {HebrewDate(hnzchot?.dateOfDeath)}
                                </Text>
                              </View>
                            </View>
                          </ImageBackground>
                        </View>
                      );
                    })}
                </View>
              </View>
              <View style={styles.innergridViewA} />
            </>
          ) : (
            <Text>error</Text>
          )}
        </View>
      </View>
    </>
  );
};

const styles = ScaledSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  containerA: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  innerBoxContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innA: {
    flexDirection: 'row',

    flex: 2,
  },
  innB: {
    flex: 1,
    flexDirection: 'row',

    justifyContent: 'center',
  },
  containerB: {
    flex: 2.8,
    flexDirection: 'row',
  },

  containerA1: {
    height: '50@s',
    width: '50@s',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  gridView: {
    flexDirection: 'row',
    flexWrap: 'wrap',

    justifyContent: 'space-evenly',
  },
  innergridViewA: {
    flex: 1,
    flexDirection: 'row',
  },
  innergridViewB: {
    flex: 5.5,
    flexDirection: 'column',
    borderRadius: 10,
    margin: '5@s',
    marginBottom: '45@s',

    padding: '2@s',
  },
  innergridViewC: {},

  innerContainerA: {},
  innerContainerB: {},
  boxContainer: {
    width: '120@s',
    height: '70@ms',
    borderRadius: 5,
    backgroundColor: '#a6a6a6',
    padding: '3@s',
    margin: '3@s',
  },
  innerContainerC: {},
  headerTextColor: {
    marginBottom: '13@s',

    fontSize: '35@s',
    color: '#ff4d4d',
    textAlign: 'center',
    fontFamily: 'DavidCLM-Bold',
  },
  itemName: {
    fontSize: '8@s',
    color: '#000',
    textAlign: 'center',
    fontFamily: 'DavidCLM-Bold',
  },
  itemTitle: {
    fontSize: '8@s',
    textAlign: 'center',
    fontFamily: 'HadasimCLM-Bold',
    color: '#ff0000',
    fontWeight: '900',
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

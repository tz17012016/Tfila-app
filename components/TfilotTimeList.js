import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getTfilotTime} from '../redux/actions/tfilotTimeActions';
import {
  ImageBackground,
  FlatList,
  StyleSheet,
  Text,
  Image,
  View,
  LogBox,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const TfilotTimeList = () => {
  const dispatch = useDispatch();
  const tfilotTimeList = useSelector(state => ({...state.tfilotTimeList}));
  const {tfilotTimes, loading, success} = tfilotTimeList;

  const tfilotTimeObject = Object.assign({}, tfilotTimes);
  LogBox.ignoreLogs(['Setting a timer']);

  useEffect(() => {
    loadTfilotTime();

    setInterval(() => loadTfilotTime(), 1000 * 60 * 60);
  }, [dispatch]);

  const loadTfilotTime = () => {
    return dispatch(getTfilotTime());
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerA}>
          <Text style={[styles.headerTextColor, styles.textWithShadow]}>
            זמני תפילות
          </Text>
        </View>
        <View style={styles.containerB}>
          {loading ? (
            <Text>loding...</Text>
          ) : success ? (
            <>
              <View style={styles.innergridViewA}></View>
              <View style={styles.innergridViewB}>
                <View style={styles.gridView}>
                  <View style={styles.boxContainer}>
                    <View style={styles.innerContainerA}></View>
                    <View style={styles.innerContainerB}>
                      <Text style={styles.itemName}>
                        {tfilotTimeObject[3]?.title}
                      </Text>
                      <Text style={styles.itemName}>
                        {new Date(tfilotTimeObject[3]?.time)
                          .toLocaleTimeString('he-IL', {
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: false,
                          })
                          .slice(0, 5)}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.boxContainer}>
                    <View style={styles.innerContainerA}></View>
                    <View style={styles.innerContainerB}>
                      <Text style={styles.itemName}>
                        {tfilotTimeObject[4]?.title}
                      </Text>
                      <Text style={styles.itemName}>
                        {new Date(tfilotTimeObject[4]?.time)
                          .toLocaleTimeString('he-IL', {
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: false,
                          })
                          .slice(0, 5)}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.boxContainer}>
                    <View style={styles.innerContainerA}></View>
                    <View style={styles.innerContainerB}>
                      <Text style={styles.itemName}>
                        {tfilotTimeObject[5]?.title}
                      </Text>
                      <Text style={styles.itemName}>
                        {new Date(tfilotTimeObject[5]?.time)
                          .toLocaleTimeString('he-IL', {
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: false,
                          })
                          .slice(0, 5)}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.gridView}>
                  <View style={styles.boxContainer}>
                    <View style={styles.innerContainerA}></View>
                    <View style={styles.innerContainerB}>
                      <Text style={styles.itemName}>
                        {tfilotTimeObject[0]?.title}
                      </Text>
                      <Text style={styles.itemName}>
                        {new Date(tfilotTimeObject[0]?.time)
                          .toLocaleTimeString('he-IL', {
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: false,
                          })
                          .slice(0, 5)}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.boxContainer}>
                    <View style={styles.innerContainerA}></View>
                    <View style={styles.innerContainerB}>
                      <Text style={styles.itemName}>
                        {tfilotTimeObject[1]?.title}
                      </Text>
                      <Text style={styles.itemName}>
                        {new Date(tfilotTimeObject[1]?.time)
                          .toLocaleTimeString('he-IL', {
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: false,
                          })
                          .slice(0, 5)}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.boxContainer}>
                    <View style={styles.innerContainerA}></View>
                    <View style={styles.innerContainerB}>
                      <Text style={styles.itemName}>
                        {tfilotTimeObject[2]?.title}
                      </Text>
                      <Text style={styles.itemName}>
                        {new Date(tfilotTimeObject[2]?.time)
                          .toLocaleTimeString('he-IL', {
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: false,
                          })
                          .slice(0, 5)}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.innergridViewA}></View>
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
    justifyContent: 'space-evenly',
  },
  innergridViewA: {
    flex: 1,
    flexDirection: 'row',
  },
  innergridViewB: {
    flex: 6,
    flexDirection: 'column',
    borderRadius: 10,
    margin: '5@s',
    marginBottom: '60@s',
    padding: '10@s',
  },
  innergridViewC: {
    flex: 2,
  },
  innerContainerA: {
    height: '20@s',
  },
  innerContainerB: {},
  boxContainer: {
    width: '120@s',
    height: '100@ms',
    borderRadius: 3,
    backgroundColor: '#ffd24d',
    opacity: 0.6,
    margin: '6@s',
  },
  headerTextColor: {
    fontSize: '35@s',
    marginBottom: '12@s',
    color: '#ff4d4d',
    textAlign: 'center',
    fontFamily: 'DavidCLM-Bold',
  },
  itemName: {
    fontSize: '18@s',
    color: '#000',
    textAlign: 'center',
    fontFamily: 'DavidCLM-Bold',
  },
  textWithShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
});

export default TfilotTimeList;

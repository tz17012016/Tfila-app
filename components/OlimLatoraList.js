import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getOlimLatora} from '../redux/actions/olimLatoraActions';
import {Text, View, LogBox} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const OlimLatoraList = () => {
  const dispatch = useDispatch();
  const olimLatoraList = useSelector(state => ({
    ...state.olimLatoraList,
  }));
  const {olimLatoras, loading, success} = olimLatoraList;
  const oleObject = Object.assign({}, olimLatoras?.reverse());
  LogBox.ignoreLogs(['Setting a timer']);

  useEffect(() => {
    loadOlimLatora();

    setInterval(() => loadOlimLatora(), 1000 * 60 * 60);
  }, [dispatch]);

  const loadOlimLatora = () => {
    return dispatch(getOlimLatora());
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerA}>
          <Text style={[styles.headerTextColor, styles.textWithShadow]}>
            עולים לתורה
          </Text>
        </View>
        <View style={styles.containerB}>
          {loading ? (
            <Text>loding...</Text>
          ) : success ? (
            <>
              <View style={styles.innergridViewA}></View>
              <View style={styles.innergridViewB}>
                <View style={styles.innA}>
                  <View style={styles.gridView}>
                    <View style={styles.boxContainer}>
                      <View style={styles.innerContainerA}></View>
                      <View style={styles.innerContainerB}>
                        <Text style={styles.itemName}>
                          {oleObject[3]?.title}
                        </Text>
                        <Text style={styles.itemName}>
                          {oleObject[3]?.name}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.boxContainer}>
                      <View style={styles.innerContainerA}></View>
                      <View style={styles.innerContainerB}>
                        <Text style={styles.itemName}>
                          {oleObject[2]?.title}
                        </Text>
                        <Text style={styles.itemName}>
                          {oleObject[2]?.name}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.boxContainer}>
                      <View style={styles.innerContainerA}></View>
                      <View style={styles.innerContainerB}>
                        <Text style={styles.itemName}>
                          {oleObject[1]?.title}
                        </Text>
                        <Text style={styles.itemName}>
                          {oleObject[1]?.name}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.boxContainer}>
                      <View style={styles.innerContainerA}></View>
                      <View style={styles.innerContainerB}>
                        <Text style={styles.itemName}>
                          {oleObject[0]?.title}
                        </Text>
                        <Text style={styles.itemName}>
                          {oleObject[0]?.name}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.boxContainer}>
                      <View style={styles.innerContainerA}></View>
                      <View style={styles.innerContainerB}>
                        <Text style={styles.itemName}>
                          {oleObject[6]?.title}
                        </Text>
                        <Text style={styles.itemName}>
                          {oleObject[6]?.name}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.boxContainer}>
                      <View style={styles.innerContainerA}></View>
                      <View style={styles.innerContainerB}>
                        <Text style={styles.itemName}>
                          {oleObject[5]?.title}
                        </Text>
                        <Text style={styles.itemName}>
                          {oleObject[5]?.name}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.boxContainer}>
                      <View style={styles.innerContainerA}></View>
                      <View style={styles.innerContainerB}>
                        <Text style={styles.itemName}>
                          {oleObject[4]?.title}
                        </Text>
                        <Text style={styles.itemName}>
                          {oleObject[4]?.name}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.innB}>
                  <View style={styles.gridView}>
                    <View style={styles.boxContainer}>
                      <View style={styles.innerContainerA}></View>
                      <View style={styles.innerContainerB}>
                        <Text style={styles.itemName}>
                          {oleObject[7]?.title}
                        </Text>
                        <Text style={styles.itemName}>
                          {oleObject[7]?.name}
                        </Text>
                      </View>
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
    flex: 0.9,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  containerB: {
    flex: 2.8,

    flexDirection: 'row',
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
    backgroundColor: '#fff5cc',
    borderRadius: 10,
    margin: '5@s',
    marginTop: '15@s',
    marginBottom: '45@s',
    padding: '10@s',
  },
  innergridViewC: {
    flex: 2,
  },
  innerContainerA: {
    height: '12@s',
  },
  innerContainerB: {},
  boxContainer: {
    width: '100@s',
    height: '65@ms',
    borderRadius: 5,
    backgroundColor: '#ffd24d',
    opacity: 0.6,
    margin: '3@s',
    marginTop: '4@s',
  },
  headerTextColor: {
    fontSize: '32@s',
    marginBottom: '6@s',
    color: '#ff4d4d',
    textAlign: 'center',
    fontFamily: 'DavidCLM-Bold',
  },
  itemName: {
    fontSize: '15@s',
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

export default OlimLatoraList;
/**
 *
 */

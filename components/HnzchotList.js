import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getHnzchot, getHebrowDate} from '../redux/actions/hnzchotActions';
import {Text, View, LogBox} from 'react-native';
import Hebcal from 'hebcal';
import {ScaledSheet} from 'react-native-size-matters';

const HnzchotList = () => {
  const dispatch = useDispatch();
  const hnzchotsList = useSelector(state => ({...state.hnzchotList}));
  const {hnzchots, loading, success} = hnzchotsList;
  LogBox.ignoreLogs(['Setting a timer']);

  useEffect(() => {
    loadHnzchots();

    setInterval(() => loadHnzchots(), 1000 * 60 * 60);
  }, [dispatch]);

  const loadHnzchots = () => {
    return dispatch(getHnzchot());
  };

  const HebrewDate = dateOfDeath => {
    let hebrewDate = new Hebcal.HDate(new Date(dateOfDeath)).toString('h');
    return hebrewDate;
  };
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
                  {hnzchots &&
                    hnzchots.map(hnzchot => {
                      return (
                        <View key={hnzchot._id} style={styles.boxContainer}>
                          <View style={styles.innerContainerA} />
                          <View style={styles.innerContainerB}>
                            <Text style={styles.itemName}>
                              {`${hnzchot?.parntName} בן ${hnzchot?.name}`}
                            </Text>
                            {console.log(HebrewDate(hnzchot?.dateOfDeath))}
                            <Text style={styles.itemName}>
                              {HebrewDate(hnzchot?.dateOfDeath)}
                            </Text>
                          </View>
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
    marginTop: '15@s',
    marginBottom: '45@s',
    padding: '10@s',
  },
  innergridViewC: {
    flex: 2,
  },
  innerContainerA: {
    height: '10@s',
  },
  innerContainerB: {},
  boxContainer: {
    width: '70@s',
    height: '70@ms',
    borderRadius: 5,
    backgroundColor: '#ffd24d',
    opacity: 0.6,
    padding: '3@s',
    margin: '3@s',
  },
  headerTextColor: {
    marginBottom: '13@s',
    fontSize: '35@s',
    color: '#ff4d4d',
    textAlign: 'center',
    fontFamily: 'DavidCLM-Bold',
  },
  itemName: {
    fontSize: '10@s',
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

export default HnzchotList;

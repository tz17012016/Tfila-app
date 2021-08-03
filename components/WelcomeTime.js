import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getZmanim} from '../redux/actions/zmanimActions';
import {ImageBackground, Text, View, LogBox} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const WelcomeTime = () => {
  const dispatch = useDispatch();
  const zmanimsList = useSelector(state => ({...state.zmanimsList}));
  const {loading, success, zmanim} = zmanimsList;
  const [time, setTime] = useState('');
  LogBox.ignoreLogs(['Setting a timer']);
  const s = 'היום חמישה ושלושים יום לעומר שהם חמישה שבועות';
  useEffect(() => {
    loadZmanims();
    let clock = setInterval(() => {
      setTime(new Date().toLocaleTimeString('he-IL'));
    }, 1000);
    let secTimer = setInterval(() => loadZmanims(), 1000 * 60 * 60 * 24);
    return () => (clearInterval(secTimer), clearInterval(clock));
  }, [dispatch]);

  const loadZmanims = () => {
    return dispatch(getZmanim());
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerA}>
          <Text style={[styles.headerTextColor, styles.textWithShadow]}>
            {time}
          </Text>
        </View>
        <View style={styles.containerB}>
          {loading ? (
            <Text>loding...</Text>
          ) : success ? (
            <>
              <View style={styles.innergridViewA}></View>
              <View style={styles.innergridViewB}>
                <View style={styles.box}>
                  <View style={styles.innerContainerA1}>
                    <View style={styles.innerContainerA11}>
                      <View style={styles.innerContainerA}>
                        <View style={styles.widthBox}>
                          <Text style={[styles.itemName, styles.headerColor]}>
                            הפטרה
                          </Text>

                          <Text style={styles.itemName}>
                            {zmanim && zmanim.HaftaraTemani}
                          </Text>
                        </View>
                      </View>
                      <View style={styles.innerContainerA}>
                        <View>
                          <Text style={[styles.itemName, styles.headerColor]}>
                            פרשת השבוע
                          </Text>
                          <Text style={styles.itemName}>
                            {zmanim && zmanim.ParashaOnly}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.boxContainer}>
                    <View style={styles.boxContainer1}>
                      <View style={styles.innerContainerA}>
                        <View style={styles.innerContainerA}>
                          <Text style={styles.itemName}>
                            {zmanim && zmanim.Date}
                          </Text>
                        </View>

                        <View style={styles.innerContainerA}>
                          <Text style={styles.itemName}>
                            {zmanim && zmanim.HebrewDate}
                          </Text>
                        </View>
                      </View>
                      <View style={styles.innerContainerB}>
                        <Text style={styles.itemClock}>
                          {zmanim && zmanim.ParashaDetails}
                        </Text>
                      </View>
                      <View style={styles.innerContainerB}>
                        <Text style={styles.itemClock}>
                          {zmanim && zmanim.GeshemTal}
                        </Text>
                      </View>
                      <View style={styles.innerContainerB}>
                        <Text style={styles.itemName}>
                          {zmanim && zmanim.SelectedDayHeader}
                        </Text>
                      </View>
                      {zmanim && zmanim.OmerDescription.length >= 1 ? (
                        <View style={styles.innerContainerA}>
                          <Text style={styles.itemOmer}>
                            {zmanim && zmanim.OmerDescription}
                          </Text>
                        </View>
                      ) : (
                        <></>
                      )}
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
    marginHorizontal: '5%',
    alignItems: 'center',
  },
  containerA: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  box: {
    flex: 1,
    alignItems: 'center',
  },
  innergridViewA: {
    flex: 0.5,
    flexDirection: 'row',
  },
  innergridViewB: {
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#f5f5dc',
    justifyContent: 'center',
    borderRadius: 10,
  },
  widthBox: {
    width: '300@s',
    marginRight: '5@s',
  },
  containerB: {
    marginTop: '15@s',
    flex: 2.6,
    flexDirection: 'row',
  },
  boxContainer1: {
    borderRadius: '10@s',
    backgroundColor: '#80bfff',
  },
  innerContainerA1: {
    height: '100@ms',
    marginTop: '10@s',
  },
  headerColor: {
    color: '#ff0000',
  },
  innerContainerA11: {
    flex: 1,

    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  innerContainerA: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  innerContainerB: {
    alignItems: 'center',
  },
  boxContainer: {
    width: '400@s',
  },
  itemName: {
    fontSize: '15@s',
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerTextColor: {
    fontSize: '40@s',
    color: '#ff4d4d',
    textAlign: 'center',
    fontFamily: 'DavidCLM-Bold',
  },
  itemClock: {
    fontSize: '20@s',
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  itemOmer: {
    fontSize: '15@s',
    color: '#80bfff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default WelcomeTime;

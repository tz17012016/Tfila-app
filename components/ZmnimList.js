import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getZmanim} from '../redux/actions/zmanimActions';
import {View, Text, Image, LogBox} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
const ZmnimList = () => {
  const dispatch = useDispatch();
  const zmanimsList = useSelector(state => ({...state.zmanimsList}));
  const {loading, success, zmanim} = zmanimsList;

  LogBox.ignoreLogs(['Setting a timer']);

  useEffect(() => {
    loadZmanims();
    setInterval(() => loadZmanims(), 1000 * 60 * 60 * 24);
  }, [dispatch]);

  const loadZmanims = () => {
    return dispatch(getZmanim());
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerA}>
          <Text style={[styles.headerTextColor, styles.textWithShadow]}>
            זמני היום
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
                      <Text style={styles.itemTitle}>פלג המנחה</Text>
                      <Text style={styles.itemName}>
                        {zmanim && zmanim.PlagHamincha}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.boxContainer}>
                    <View style={styles.innerContainerA}></View>
                    <View style={styles.innerContainerB}>
                      <Text style={styles.itemTitle}>מנחה קטנה</Text>
                      <Text style={styles.itemName}>
                        {zmanim && zmanim.MinhaKtana}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.gridView}>
                  <View style={styles.boxContainer}>
                    <View style={styles.innerContainerA}></View>
                    <View style={styles.innerContainerB}>
                      <Text style={styles.itemTitle}>צאת הכוכבים</Text>
                      <Text style={styles.itemName}>
                        {zmanim && zmanim.ZetHakochavim}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.boxContainer}>
                    <View style={styles.innerContainerA}></View>
                    <View style={styles.innerContainerB}>
                      <Text style={styles.itemTitle}>שקיעה</Text>
                      <Text style={styles.itemName}>
                        {zmanim && zmanim.SunSet}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.gridView}>
                  <View style={styles.boxContainer}>
                    <View style={styles.innerContainerA}></View>
                    <View style={styles.innerContainerB}>
                      <Text style={styles.itemTitle}>דף היומי</Text>
                      <Text style={styles.itemName}>
                        {zmanim && zmanim.DafYomi}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.innergridViewB}>
                <View style={styles.gridView}>
                  <View style={styles.boxContainer}>
                    <View style={styles.innerContainerA}></View>
                    <View style={styles.innerContainerB}>
                      <Text style={styles.itemTitle}>חצות היום</Text>
                      <Text style={styles.itemName}>
                        {zmanim && zmanim.MidDay}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.boxContainer}>
                    <View style={styles.innerContainerA}></View>
                    <View style={styles.innerContainerB}>
                      <Text style={styles.itemTitle}>זריחה</Text>
                      <Text style={styles.itemName}>
                        {zmanim && zmanim.SunRise}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.gridView}>
                  <View style={styles.boxContainer}>
                    <View style={styles.innerContainerA}></View>
                    <View style={styles.innerContainerB}>
                      <Text style={styles.itemTitle}>סוזת"פ</Text>
                      <Text style={styles.itemName}>
                        {zmanim && zmanim.SofZmanTfilaGra}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.boxContainer}>
                    <View style={styles.innerContainerA}></View>
                    <View style={styles.innerContainerB}>
                      <Text style={styles.itemTitle}>סוזק"ש</Text>
                      <Text style={styles.itemName}>
                        {zmanim && zmanim.SofZmanKriatShmaGra}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.gridView}>
                  <View style={styles.boxContainer}>
                    <View style={styles.innerContainerA}></View>
                    <View style={styles.innerContainerB}>
                      <Text style={styles.itemTitle}>מנחה גדולה</Text>
                      <Text style={styles.itemName}>
                        {zmanim && zmanim.MinhaGedola}
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
    flex: 2.9,

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
    flex: 0.9,
    flexDirection: 'row',
  },
  innergridViewB: {
    flex: 3.9,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderRadius: 10,
    margin: '5@s',
    marginBottom: '40@s',
    padding: '10@s',
  },
  innergridViewC: {
    flex: 2,
  },
  innerContainerA: {
    height: '5@s',
  },
  innerContainerB: {},
  boxContainer: {
    width: '110@s',
    height: '75@ms',
    borderRadius: 3,
    backgroundColor: '#ffd24d',
    opacity: 0.6,
    margin: '3@s',
    marginTop: '3@s',
    padding: '2@s',
  },
  headerTextColor: {
    marginBottom: '8@s',
    fontSize: '40@s',
    color: '#ff4d4d',
    textAlign: 'center',
    fontFamily: 'DavidCLM-Bold',
  },
  itemName: {
    fontSize: '17@s',
    color: '#000',
    textAlign: 'center',
    fontFamily: 'DavidCLM-Bold',
  },
  itemTitle: {
    fontSize: '18@s',
    textAlign: 'center',
    fontFamily: 'HadasimCLM-Bold',
    color: '#ff0000',
    fontWeight: '900',
  },
  textWithShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
});

export default ZmnimList;

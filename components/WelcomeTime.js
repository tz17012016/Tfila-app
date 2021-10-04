import React, {useEffect, useState} from 'react';
import {Text, View, LogBox} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const WelcomeTime = ({zmanimsList}) => {
  const {loading, success, zmanim} = zmanimsList;
  //יש לבדוק את הזמן
  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString('he-IL'),
  );
  LogBox.ignoreLogs(['Setting a timer']);
  useEffect(() => {
    let clock = setInterval(() => {
      setTime(new Date().toLocaleTimeString('he-IL'));
    }, 1000);
    return () => (
      clearInterval(clock),
      setTime(() => new Date().toLocaleTimeString('he-IL'))
    );
  }, []);

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
                  <View style={styles.box1}>
                    <View style={styles.innerContainerA1}>
                      <View style={styles.innerContainerA11}>
                        <View style={styles.innerContainerA}>
                          <View style={styles.widthBox}>
                            <Text style={styles.itemTitle}>הפטרה</Text>
                            <Text style={styles.itemName}>
                              {zmanim &&
                                zmanim.HaftaraTemani.split('\\{.*?\\}')}
                              {console.log(
                                zmanim.HaftaraTemani.split('\\{.*?\\}'),
                              )}
                            </Text>
                          </View>
                        </View>
                        <View style={styles.innerContainerA}>
                          <View>
                            <Text style={styles.itemTitle}>פרשת השבוע</Text>
                            <Text style={styles.itemName}>
                              {zmanim && zmanim.ParashaOnly}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>

                  <View style={styles.box2A}>
                    <View style={styles.box2}>
                      <View style={styles.boxContainer}>
                        <View style={styles.boxContainer1}>
                          <View style={styles.innerContainerA}>
                            <View style={styles.innerContainerA}>
                              <Text style={styles.itemTitle1}>
                                {zmanim && zmanim.Date}
                              </Text>
                            </View>

                            <View style={styles.innerContainerA}>
                              <Text style={styles.itemTitle1}>
                                {zmanim && zmanim.HebrewDate}
                              </Text>
                            </View>
                          </View>
                          <View style={styles.innerContainerB}>
                            <Text style={styles.itemTitle}>
                              {zmanim && zmanim.SelectedDayHeader}
                            </Text>
                          </View>

                          <View style={styles.innerContainerB}>
                            <Text style={styles.itemTitle}>
                              {zmanim && zmanim.GeshemTal}
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
  },
  box1: {
    flex: 1,
  },
  box2A: {
    flex: 1,
    alignItems: 'center',
  },
  box2: {
    flex: 1,
    height: '100@s',
    width: '400@s',
  },
  innergridViewA: {
    flex: 0.3,
    flexDirection: 'row',
  },
  innergridViewB: {
    flex: 2.5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: '45@s',
  },
  widthBox: {
    width: '200@s',
    marginRight: '5@s',
  },
  containerB: {
    marginTop: '15@s',
    flex: 2.6,
    flexDirection: 'row',
  },
  boxContainer1: {
    borderRadius: '10@s',
    width: '400@s',
    backgroundColor: '#80bfff',
    height: '100@s',
  },
  innerContainerA1: {
    height: '100@ms',
    marginTop: '10@s',
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
  boxContainer: {},
  itemName: {
    fontSize: '15@s',
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  itemTitle: {
    fontSize: '24@s',
    textAlign: 'center',
    fontFamily: 'HadasimCLM-Bold',
    color: '#ff0000',
    fontWeight: '900',
  },
  itemTitle1: {
    fontSize: '24@s',
    textAlign: 'center',
    fontFamily: 'HadasimCLM-Bold',
    color: '#000',
    fontWeight: '900',
  },
  headerTextColor: {
    fontSize: '40@s',
    marginBottom: '8@s',
    color: '#ff4d4d',
    textAlign: 'center',
    fontFamily: 'HadasimCLM-Bold',
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

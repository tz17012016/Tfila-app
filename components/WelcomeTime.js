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
          {loading ? (
            <Text>loding...</Text>
          ) : success ? (
            <>
              <View style={styles.innergridViewA}></View>
              <View style={styles.innergridViewB}>
                <View style={styles.innerViewA}>
                  <View style={styles.box3}>
                    <View style={styles.box5}>
                      <Text style={styles.itemTextShideTitle}>צאת השבת</Text>
                      <Text style={styles.itemTextShide}>
                        {zmanim && zmanim.MotzeyShabat}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.innerViewB}>
                  <View style={styles.box1}></View>
                  <View style={styles.box2}>
                    <Text style={styles.itemTextShideTitle}>פרשת השבוע</Text>
                    <Text style={styles.itemTextShide}>
                      {zmanim && zmanim.ParashaOnly}
                    </Text>
                  </View>
                  <View style={styles.box2}></View>
                  <View style={styles.box2}>
                    <Text style={styles.itemTextShideTitle}>הפטרה</Text>
                    <Text style={styles.itemTextShide}>
                      {zmanim &&
                        zmanim.HaftaraTemani.replace(/\(([^\)]+)\)/g, '')}
                    </Text>
                  </View>
                </View>
                <View style={styles.innerViewA}>
                  <View style={styles.box3}>
                    <View style={styles.box4}>
                      <Text style={styles.itemTextShideTitle}>כניסת שבת</Text>
                      <Text style={styles.itemTextShide1}>
                        {zmanim && zmanim.HadlakatNerot}
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
    height: '66%',
    flexDirection: 'column',

    justifyContent: 'center',
    marginHorizontal: '5%',
    alignItems: 'center',
  },
  containerA: {
    flex: 1,
    flexDirection: 'row',
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
  innerViewA: {
    flex: 1,
    flexDirection: 'column',
  },
  innerViewB: {
    flex: 1.3,

    flexDirection: 'column',
  },
  box1: {
    flex: 1.7,
    height: '100@s',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100@s',
    marginLeft: '10@s',
    marginBottom: '2@s',
  },
  box3: {
    flex: 1.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box4: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '55@s',
    marginTop: '20@s',
  },
  box5: {
    marginRight: '35@s',
    marginTop: '20@s',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    fontSize: '10@s',
    fontFamily: 'HadasimCLM-Bold',
    color: '#3333ff',
    fontWeight: '900',
    alignItems: 'center',
    paddingRight: '5@s',
  },
  itemTextShide: {
    fontSize: '20@s',
    fontFamily: 'HadasimCLM-Bold',
    color: '#3333ff',
    fontWeight: '900',
    alignItems: 'center',
    paddingRight: '5@s',
  },
  itemTextShide1: {
    fontSize: '20@s',
    fontFamily: 'HadasimCLM-Bold',
    color: '#3333ff',
    fontWeight: '900',
    alignItems: 'center',
  },
  itemTextShideTitle: {
    fontSize: '15@s',
    fontFamily: 'HadasimCLM-Bold',
    color: '#00ccff',
    fontWeight: '900',
  },
});

export default WelcomeTime;
/**
 * <Text style={styles.itemName}>
                              {zmanim &&
                                zmanim.HaftaraTemani.replace(
                                  /\(([^\)]+)\)/g,
                                  '',
                                )}
                              {console.log(zmanim.HaftaraTemani)}
                            </Text>
 */

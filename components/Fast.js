import React from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
const Hagim = ({changeOptions}) => {
  const {Zmanim = {}} = changeOptions;
  const s = `לכל באי ביהכ"ס, שיהיה צום מועיל. בעז"ה נזכה לגאולה ברחמים בקרוב!`;
  return (
    <View style={styles.container}>
      <View style={styles.containerB}>
        <View style={styles.innergridViewA} />
        <View style={styles.innergridViewB}>
          <View style={styles.gridView}>
            {Zmanim && Zmanim?.Holiday.indexOf('צום') !== -1 ? (
              <>
                <View style={styles.boxContainerA}>
                  <Text style={styles.itemTextA}>
                    {Zmanim && s.replace(/(בעז"ה[^\)]+)/g, '')}
                  </Text>
                  <Text style={styles.itemTextA}>
                    {Zmanim && s.match(/(בעז"ה[^\)]+)/g, '')[0]}
                  </Text>
                </View>
                <View style={styles.boxContainerB}>
                  <View style={styles.boxContainerc}>
                    <Text style={styles.itemTextB}>סוף הצום</Text>
                    <Text style={styles.itemTextA}>
                      {Zmanim && Zmanim?.EndFast}
                    </Text>
                  </View>
                  <View style={styles.boxContainerc}>
                    <Text style={styles.itemTextB}>תחילת הצום</Text>
                    <Text style={styles.itemTextA}>
                      {Zmanim && Zmanim?.StartFast}
                    </Text>
                  </View>
                </View>
              </>
            ) : (
              <Text></Text>
            )}
          </View>
        </View>
        <View style={styles.innergridViewA} />
      </View>
    </View>
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
  gridView: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '55@s',
    marginLeft: '200@s',
  },
  innergridViewA: {
    flex: 1.2,
    flexDirection: 'row',
  },
  innergridViewB: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 4.8,
    flexDirection: 'column',
  },
  boxContainerA: {
    justifyContent: 'center',
  },
  boxContainerB: {
    width: '200@s',
    flexDirection: 'row',
    marginTop:'15@s',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  boxContainerC: {
    marginTop: '10@s',
  },
  itemTextA: {
    fontSize: '13@s',
    color: '#000',
    textAlign: 'center',
    fontFamily: 'stam',
    marginBottom: '15@s',
  },
  itemTextB: {
    fontSize: '12@s',
    color: '#e60000',
    textAlign: 'center',
    fontFamily: 'stam',
    marginBottom: '15@s',
  },
  inerItemText: {
    fontSize: '10@s',
    color: '#000',
    textAlign: 'center',
    fontFamily: 'stam',
    marginBottom: '30@s',
  },
});

export default Hagim;

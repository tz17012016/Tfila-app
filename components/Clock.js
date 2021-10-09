import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
const Clock = () => {
  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString('he-IL'),
  );
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
    <View style={styles.container}>
      <Text style={styles.headerTextColor}>{time}</Text>
    </View>
  );
};
const styles = ScaledSheet.create({
  container: {
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'flex-end',
  },
  headerTextColor: {
    fontSize: '35@s',
    marginBottom: '12@s',
    color: '#ff4d4d',
    fontFamily: 'HadasimCLM-Bold',
  },
});
export default Clock;

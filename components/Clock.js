import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
const Clock = () => {
  const [timeS, setTimeS] = useState(() =>
    new Date()
      .toLocaleTimeString([], {
        hour: '2-digit',
        hourCycle: 'h23',
        minute: '2-digit',
        second: '2-digit',
      })
      .slice(6, 8),
  );
  const [time, setTime] = useState(() =>
    new Date()
      .toLocaleTimeString([], {
        hour: '2-digit',
        hourCycle: 'h23',
        minute: '2-digit',
      })
      .slice(0, 5),
  );
  useEffect(() => {
    let clock = setInterval(() => {
      setTime(
        new Date()
          .toLocaleTimeString([], {
            hour: '2-digit',
            hourCycle: 'h23',
            minute: '2-digit',
          })
          .slice(0, 5),
      );
      setTimeS(
        new Date()
          .toLocaleTimeString([], {
            hour: '2-digit',
            hourCycle: 'h23',
            minute: '2-digit',
            second: '2-digit',
          })
          .slice(6, 8),
      );
    }, 1000);
    return () => (
      clearInterval(clock),
      setTime(() =>
        new Date()
          .toLocaleTimeString([], {
            hour: '2-digit',
            hourCycle: 'h23',
            minute: '2-digit',
          })
          .slice(0, 5),
      ),
      setTimeS(() =>
        new Date()
          .toLocaleTimeString([], {
            hour: '2-digit',
            hourCycle: 'h23',
            minute: '2-digit',
            second: '2-digit',
          })
          .slice(6, 8),
      )
    );
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.headerTextColor}>
        {time}
        <Text style={styles.headerTextColor1}>{`:${timeS}`}</Text>
      </Text>
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
    marginBottom: '2@s',
    color: '#00308f',
    fontFamily: 'mugrabi-bold-aaa',
  },
  headerTextColor1: {
    fontSize: '25@s',
    marginBottom: '2@s',
    color: '#00308f',
  },
});
export default Clock;

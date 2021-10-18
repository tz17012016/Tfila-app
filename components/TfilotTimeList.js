import React from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const TfilotTimeList = ({changeOptions1}) => {
  const {TfilotTime = []} = changeOptions1;
  const [arrIndex, setArrIndex] = React.useState(0);
  let newTfilotTimes = [];
  React.useEffect(() => {
    // Move on to the next arr every `n` milliseconds

    let timeout;
    if (arrIndex < newTfilotTimes.length - 1) {
      timeout = setTimeout(() => setArrIndex(arrIndex + 1), 10 * 1000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [newTfilotTimes, arrIndex]);

  const sliceIntoChunks = (arr, chunkSize) => {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(chunk);
    }
    return res;
  };
  if (TfilotTime) {
    newTfilotTimes = sliceIntoChunks(TfilotTime, 4);
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.mainViewA}></View>
          <View style={styles.mainViewB}>
            <View style={styles.gridView_A}></View>
            <View style={styles.gridView_B}>
              <View style={styles.gridView_B_A}>
                {newTfilotTimes[arrIndex] &&
                  newTfilotTimes[arrIndex].map(tfila => {
                    return (
                      <View key={tfila._id} style={styles.boxContainer_A}>
                        <Text style={styles.itemTime}>
                          {new Date(tfila?.time)
                            .toLocaleTimeString('he-IL', {
                              hour: '2-digit',
                              minute: '2-digit',
                              hour12: false,
                            })
                            .slice(0, 5)}
                        </Text>
                      </View>
                    );
                  })}
              </View>
              <View style={styles.gridView_B_B}>
                {newTfilotTimes[arrIndex] &&
                  newTfilotTimes[arrIndex].map(tfila => {
                    return (
                      <View key={tfila._id} style={styles.boxContainer_B}>
                        <Text style={styles.itemTitle}>{tfila?.title}</Text>
                      </View>
                    );
                  })}
              </View>
            </View>
          </View>

          <View style={styles.mainViewA}></View>
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
  },
  innerContainer: {
    flex: 2.8,
    flexDirection: 'row',
  },
  gridView_A: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  gridView_B: {
    flex: 2.5,
    marginRight: '16@s',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  gridView_B_A: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  gridView_B_B: {
    flex: 2.2,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  mainViewA: {
    flex: 1.1,
    flexDirection: 'row',
  },
  mainViewB: {
    flex: 1.2,
    flexDirection: 'column',
  },
  boxContainer_A: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxContainer_B: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  itemTitle: {
    fontSize: '15@s',
    fontFamily: 'stam',
    color: '#000',
    fontWeight: '900',
  },
  itemTime: {
    fontSize: '15@s',
    fontFamily: 'stam',
    color: '#000',
    fontWeight: '900',
  },
});

export default TfilotTimeList;

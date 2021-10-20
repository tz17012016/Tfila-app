import React from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Col, Row} from 'react-native-easy-grid';

const ShiorimList = ({changeOptions}) => {
  const {Shiorim = []} = changeOptions;
  const [arrIndex, setArrIndex] = React.useState(0);
  let newShiorim = [];
  React.useEffect(() => {
    // Move on to the next arr every `n` milliseconds
    let timeout;
    if (arrIndex < newShiorim.length - 1) {
      timeout = setTimeout(() => setArrIndex(arrIndex + 1), 2 * 1000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [newShiorim, arrIndex]);

  const sliceIntoChunks = (arr, chunkSize) => {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(chunk);
    }
    return res;
  };
  if (Shiorim) {
    newShiorim = sliceIntoChunks(Shiorim, 5);
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerB}>
          <View style={styles.innergridViewA} />
          <View style={styles.innergridViewB}>
            <View style={styles.blank}></View>
            <View style={styles.gridView}>
              <View style={styles.gridViewA}>
                <Col>
                  {newShiorim[arrIndex] &&
                    newShiorim[arrIndex].map(sh => {
                      return (
                        <Row style={[styles.row, styles.col11]} key={sh?._id}>
                          <Text style={[styles.cell, styles.col1]}>
                            {sh?.subject}
                          </Text>
                          <Text style={[styles.cell, styles.col2]}>
                            {new Date(sh?.time)
                              .toLocaleTimeString('he-IL', {
                                hour: '2-digit',
                                minute: '2-digit',
                                hour12: false,
                              })
                              .slice(0, 5)}
                          </Text>
                          <Text style={[styles.cell, styles.col3]}>
                            {sh?.name}
                          </Text>
                          <Text style={[styles.cell, styles.col4]}>
                            {sh?.title}
                          </Text>
                        </Row>
                      );
                    })}
                </Col>
              </View>
            </View>
          </View>
          <View style={styles.innergridViewA} />
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
  containerA: {
    flex: 0.7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  containerB: {
    flex: 2.7,
    flexDirection: 'row',
  },
  blank: {
    flex: 1,
  },

  innerBoxContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cell: {
    flex: 1,
    marginTop: '2@s',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '12@s',
    color: '#000',
    fontFamily: 'DavidCLM-Bold',
  },
  col11: {
    marginVertical: '7@s',
  },
  row: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  col: {
    flex: 1.5,
  },
  col1: {
    flex: 1.4,
    marginRight: '30@s',
    textAlign: 'right',
  },
  col2: {
    marginLeft: '-7@s',
    textAlign: 'center',
  },
  col3: {
    marginRight: '10@s',
    textAlign: 'center',
  },
  col4: {
    marginRight: '10@s',
    textAlign: 'center',
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

  gridView: {
    flexDirection: 'column',

    flex: 1.2,
  },
  gridViewA: {
    flex: 1,

    flexDirection: 'column',
  },
  innergridViewA: {
    flex: 1,
    flexDirection: 'row',
  },
  innergridViewB: {
    flex: 4.5,

    flexDirection: 'column',
  },
  innergridViewC: {},

  innerContainerA: {},
  innerContainerB: {},
  boxContainer: {
    width: '120@s',
    height: '95@ms',
    borderRadius: 5,
  },
  innerContainerC: {},
  headerTextColor: {
    fontSize: '35@s',
    color: '#3333ff',
    textAlign: 'center',
    fontFamily: 'DavidCLM-Bold',
  },
  itemName: {
    fontSize: '8@s',
    color: '#000',
    textAlign: 'center',
    fontFamily: 'DavidCLM-Bold',
  },
  itemTitle: {
    fontSize: '8@s',
    textAlign: 'center',
    fontFamily: 'HadasimCLM-Bold',
    color: '#ff0000',
    fontWeight: '900',
  },
  ImageBackground: {
    flex: 1,
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  textWithShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
});

export default ShiorimList;

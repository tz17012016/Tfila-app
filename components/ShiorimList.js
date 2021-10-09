import React from 'react';
import {Text, View, Image, ImageBackground, LogBox} from 'react-native';
import Hebcal from 'hebcal';
import {ScaledSheet} from 'react-native-size-matters';
import {DataTable} from 'react-native-paper';
import {Col, Row, Grid} from 'react-native-easy-grid';

const ShiorimList = ({shiorimList}) => {
  const {shiorim, loading, success} = shiorimList;
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

  const HebrewDate = time => {
    let hebrewDate = new Hebcal.HDate(new Date(time)).toString('h');
    return hebrewDate;
  };

  const sliceIntoChunks = (arr, chunkSize) => {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(chunk);
    }
    return res;
  };
  if (shiorim) {
    newShiorim = sliceIntoChunks(shiorim, 6);
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerA}>
          <Text style={[styles.headerTextColor, styles.textWithShadow]}>
            שיעורי תורה
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
                  <View style={styles.container22}>
                    <Grid>
                      <Col>
                        <Row>
                          <Text style={styles.cell}>נושא השיעור</Text>
                          <Text style={styles.cell}>זמן השיעור</Text>
                          <Text style={styles.cell}>שם הרב</Text>
                          <Text style={styles.cell}>ימים</Text>
                        </Row>
                        {newShiorim[arrIndex] &&
                          newShiorim[arrIndex].map(sh => {
                            return (
                              <Row key={sh._id}>
                                <Text style={styles.cell}>{sh?.subject}</Text>
                                <Text style={styles.cell}>
                                  {new Date(sh?.time)
                                    .toLocaleTimeString('he-IL', {
                                      hour: '2-digit',
                                      minute: '2-digit',
                                      hour12: false,
                                    })
                                    .slice(0, 5)}
                                </Text>
                                <Text style={styles.cell}>{sh?.name}</Text>
                                <Text style={styles.cell}>{sh?.title}</Text>
                              </Row>
                            );
                          })}
                      </Col>
                    </Grid>
                  </View>
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
  container22: {
    width: '100%',
    height: 200,
    padding: 16,
  },
  innerBoxContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cell: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '8@s',
    color: '#000',
    textAlign: 'center',
    fontFamily: 'DavidCLM-Bold',
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  innergridViewA: {
    flex: 1,
    flexDirection: 'row',
  },
  innergridViewB: {
    flex: 5,
    flexDirection: 'column',
    borderRadius: 10,
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
/**
 * <View style={styles.innergridViewA} />
              <View style={styles.innergridViewB}>
                <View style={styles.gridView}>
                  <DataTable style={styles.itemName}>
                    <DataTable.Header>
                      <DataTable.Title>נושא השיעור</DataTable.Title>
                      <DataTable.Title>זמן השיעור</DataTable.Title>
                      <DataTable.Title>שם הרב</DataTable.Title>
                      <DataTable.Title>ימים</DataTable.Title>
                    </DataTable.Header>

                    {newShiorim[arrIndex] &&
                      newShiorim[arrIndex].map(sh => {
                        return (
                          <DataTable.Row key={sh._id}>
                            <DataTable.Cell style={styles.itemName}>
                              {sh?.subject}
                            </DataTable.Cell>
                            <DataTable.Cell style={styles.itemName}>
                              {new Date(sh?.time)
                                .toLocaleTimeString('he-IL', {
                                  hour: '2-digit',
                                  minute: '2-digit',
                                  hour12: false,
                                })
                                .slice(0, 5)}
                            </DataTable.Cell>
                            <DataTable.Cell style={styles.itemName}>
                              {sh?.name}
                            </DataTable.Cell>
                            <DataTable.Cell style={styles.itemName}>
                              {sh?.title}
                            </DataTable.Cell>
                          </DataTable.Row>
                        );
                      })}
                  </DataTable>
                </View>
              </View>
              <View style={styles.innergridViewA} />
 */

import React from 'react';
import {Text, View, LogBox} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
const generalMessagesList = ({generalMessagesList}) => {
  const {generalMessages, loading, success} = generalMessagesList;
  return (
    <View style={styles.container}>
      <View style={styles.containerA}>
        <Text style={[styles.headerTextColor, styles.textWithShadow]}>
          הודעות
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
                {generalMessages &&
                  generalMessages.map(generalMessage => {
                    return (
                      <View
                        key={generalMessage._id}
                        style={styles.boxContainer}>
                        <View>
                          <Text style={styles.itemTitle}>
                            {generalMessage?.title}
                          </Text>
                          <Text style={styles.itemName}>
                            {generalMessage?.content}
                          </Text>
                        </View>
                      </View>
                    );
                  })}
              </View>
            </View>
            <View style={styles.innergridViewA} />
          </>
        ) : (
          <Text>error</Text>
        )}
      </View>
    </View>
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
    flex: 2.8,
    flexDirection: 'row',
  },
  gridView: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  innergridViewA: {
    flex: 1.2,
    flexDirection: 'row',
  },
  innergridViewB: {
    borderRadius: '10@s',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 5,
    flexDirection: 'column',
    marginTop: '15@s',
    margin: '5@s',
    padding: '10@s',
    marginBottom: '45@s',
  },
  boxContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '300@s',
    height: '90@ms',
    padding: '3@s',
    borderRadius: '10@s',
    backgroundColor: '#ffd24d',
  },
  headerTextColor: {
    marginBottom: '13@s',
    fontSize: '35@s',
    color: '#ff4d4d',
    textAlign: 'center',
    fontFamily: 'DavidCLM-Bold',
  },
  itemCode: {
    fontWeight: '900',
    fontSize: '40@s',
    color: '#000',
  },
  itemTitle: {
    fontSize: '15@s',
    textAlign: 'center',
    fontFamily: 'HadasimCLM-Bold',
    color: '#ff0000',
  },
  itemName: {
    fontSize: '12@s',
    color: '#000',
    textAlign: 'center',
    fontFamily: 'DavidCLM-Bold',
  },

  textWithShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
});

export default generalMessagesList;

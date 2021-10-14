import React from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
const generalMessagesList = ({changeOptions1, mSTime}) => {
  const {GeneralMessages} = changeOptions1;
  const [messageIndex, setMessageIndex] = React.useState(0);
  React.useEffect(() => {
    // Move on to the next message every `n` milliseconds
    let timeout;
    if (messageIndex < GeneralMessages.length - 1) {
      timeout = setTimeout(() => setMessageIndex(messageIndex + 1), 4 * 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [GeneralMessages, messageIndex]);
  return (
    <View style={styles.container}>
      <View style={styles.containerB}>
        <View style={styles.innergridViewA} />
        <View style={styles.innergridViewB}>
          <View style={styles.gridView}>
            <View style={styles.boxContainer}>
              <View>
                <Text style={styles.itemTitle}>
                  {GeneralMessages[messageIndex].title}
                </Text>
                <Text style={styles.itemName}>
                  {GeneralMessages[messageIndex].content}
                </Text>
              </View>
            </View>
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
    marginTop: '45@s',
  },
  innergridViewA: {
    flex: 1.2,
    flexDirection: 'row',
  },
  innergridViewB: {
    borderRadius: '10@s',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 4.8,
    flexDirection: 'column',
  },
  boxContainer: {
    flex: 1,
    alignItems: 'center',

    justifyContent: 'center',
    borderRadius: '10@s',
  },
  headerTextColor: {
    fontSize: '35@s',
    color: '#3333ff',
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
    marginBottom: '20@s',
  },
  itemName: {
    fontSize: '12@s',
    color: '#000',
    textAlign: 'center',
    fontFamily: 'DavidCLM-Bold',
    marginBottom: '30@s',
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

export default generalMessagesList;

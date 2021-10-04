import React from 'react';
import {Text} from 'react-native';
const Test = props => {
  const {generalMessages} = props;
  // Default to the first message passed
  const [messageIndex, setMessageIndex] = React.useState(0);

  React.useEffect(() => {
    // Move on to the next message every `n` milliseconds
    let timeout;
    if (messageIndex < generalMessages.length - 1) {
      timeout = setTimeout(() => setMessageIndex(messageIndex + 1), 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [generalMessages, messageIndex]);

  return console.log(generalMessages[messageIndex]);
};
export default Test;
/**
 * <Text>{generalMessages[messageIndex]}</Text>;
 */

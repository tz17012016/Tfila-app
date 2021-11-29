import React from 'react';
import 'react-native-gesture-handler';
import Loding from '../components/Loding';
import Error from '../components/Error';
import NetworkError from '../components/NetworkError';
import MainScreenRenders from '../screens/MainScreenRenders';

const AppNavigator = ({
  changeOptions,
  reaplaseScreanName,
  ErrorMessage,
  dbError,
  dbLoading,
  dbSuccess,
  isConnected,
  isInternetReachable,
  loadDbFromRedux,
  connectionSuccess,
  connectionLoading,
}) => {
  const [LoadingStage, setLoadingStage] = React.useState(true);
  React.useEffect(() => {
    !connectionLoading ? setLoadingStage(false) : setLoadingStage(true);
  }, [LoadingStage, connectionLoading, isInternetReachable, loadDbFromRedux]);

  return (
    <>
      {LoadingStage === false &&
      isInternetReachable === true &&
      isConnected === true ? (
        dbLoading === true &&
        connectionSuccess === true &&
        dbSuccess === false ? (
          <Loding />
        ) : dbError === false && dbSuccess === true ? (
          <MainScreenRenders
            reaplaseScreanName={reaplaseScreanName}
            changeOptions={changeOptions}
          />
        ) : (
          <Error ErrorMessage={ErrorMessage} />
        )
      ) : (
        <NetworkError loadDbFromRedux={loadDbFromRedux} />
      )}
    </>
  );
};

export default AppNavigator;

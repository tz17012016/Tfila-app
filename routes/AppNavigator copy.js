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
  }, [LoadingStage, connectionLoading]);
  const run = () =>
    setTimeout(() => {
      return <NetworkError loadDbFromRedux={loadDbFromRedux} />;
    }, 30 * 1000);
  const L = run();
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
        <>
          <L />
          {/* {() =>
            setTimeout(() => {
              return <NetworkError loadDbFromRedux={loadDbFromRedux} />;
            }, 30 * 1000)
          } */}
        </>
      )}
    </>
  );
};

export default AppNavigator;

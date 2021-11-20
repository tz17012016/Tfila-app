import NetInfo from '@react-native-community/netinfo';
export class NetworkUtils {
  static async isNetworkAvailable() {
    const response = await NetInfo.fetch();
    return response;
  }
}
export const Connection = async () => {
  const isConnected = await NetworkUtils.isNetworkAvailable();
  return isConnected;
};

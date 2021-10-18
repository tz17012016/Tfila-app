import axios from 'axios';
export const isAlive = async () => {
  const BASE_URL = 'https://btmanagement.herokuapp.com';
  const BASE_URL1 = 'https://btmanagement1.herokuapp.com';
  const BASE_URL2 = 'https://btmanagement2.herokuapp.com';
  const BASE_URL_DEVELOPMENT = 'http://192.168.1.100:5000';

  let resultBASE_URL = await axios.get(`${BASE_URL}`);
  let resultBASE_URL1 = await axios.get(`${BASE_URL1}`);
  let resultBASE_URL2 = await axios.get(`${BASE_URL2}`);
  let resultBASE_URL_DEVELOPMENT = await axios.get(`${BASE_URL_DEVELOPMENT}`);

  switch (true) {
    case resultBASE_URL_DEVELOPMENT.status === 200:
      console.log('development server');
      return BASE_URL_DEVELOPMENT;
    case resultBASE_URL.status === 200:
      console.log('live server 1');
      return BASE_URL;
    case resultBASE_URL1.status === 200:
      console.log('live server 2');
      return BASE_URL1;
    case resultBASE_URL2.status === 200:
      console.log('live server 3');
      return BASE_URL2;
    default:
      console.log('default live server 1');
      return BASE_URL;
  }
};

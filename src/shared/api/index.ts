import {
  AxiosError,
  AxiosResponse,
} from './../../../node_modules/axios/index.d';
import axios from 'axios';

export const getTempSongs = async (token: string) => {
  return axios
    .get('http://213.234.25.62:10050/api/v1/audio/all', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res: AxiosResponse) => {
      console.log('fetch success');
      return res.data;
    })
    .catch((err: AxiosError) => {
      console.log(`error ${err.message}`);
    });
};

export const login = async () => {
  return axios.post('http://213.234.25.62:10050/api/v1/auth/login', {
    email: 'user@mail.ru',
    password: 'password',
  });
};

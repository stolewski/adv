import axios, { AxiosResponse } from 'axios';

interface IData {
  name: string;
  mail: string;
  tel: string;
  msg: string;
}

const postForm = (data: IData): Promise<AxiosResponse> => {
  const options = JSON.stringify(data);
  const url =
    'https://advocate-b33c7-default-rtdb.europe-west1.firebasedatabase.app/leads.json';
  return axios.post(url, options);
};

export default postForm;

import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://dev-tbl8.pantheonsite.io/apis/quiz/'
});

export default instance;


// import React from 'react';
import axios from 'axios';

const authKey =
  '64102276ec4b87e450aeee53254979085bf04f67f84442fac9246f5f6fce7109';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ' + authKey
  }
});

import axios from 'axios';

const KEY = 'AIzaSyDR-0Ufge3-_Xzp-gXIqJvD6fFkYq9Cdx4';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});

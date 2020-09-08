import axios from 'axios';

const KEY ='AIzaSyAdKVBLF_6_69X0RBo8hWCJ56VTW3Og0VQ';

export default axios.create ({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params : {
        part: 'snippet',
        maxResults : 50,
        key : KEY
    }
});
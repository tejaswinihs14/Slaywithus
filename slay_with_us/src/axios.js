import axios from "axios";



const instance = axios.create({
  
    baseURL:'https://us-central1-slay-with-us.cloudfunctions.net/api'
    //  'http://localhost:5001/slay-with-us/us-central1/api'
     
  });
  
  export default instance;
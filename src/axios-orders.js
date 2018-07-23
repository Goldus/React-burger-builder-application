import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://react-my-burger-80609.firebaseio.com/'
});

export default instance;
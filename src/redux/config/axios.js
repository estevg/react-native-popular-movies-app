import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'https://apimovieapp.herokuapp.com'
})
export default clienteAxios
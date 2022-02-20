import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'https://entrena-habitos.herokuapp.com'
});

export default clienteAxios;
import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://mern-ecommerce-289019.firebaseio.com/'
})

export default instance;
import axios from 'axios';
import { Config } from './config';

const HOST = Config.appUrl

export default {
    postLogin: async (username, password) => {
        try {
            const response = await axios.post(`${HOST}/token`,
                {
                    username,
                    password
                },
                {
                    headers: {
                        Accept: 'application/json',
                        ContentType: 'application/x-www-form-urlencoded'
                    }
                }
            )
            return response.data;
        } catch (error) {
            console.log("loginError: ", error)
            throw error;
        }
    }
}
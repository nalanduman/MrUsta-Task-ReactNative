import axios from 'axios';
import { Config } from './config';

const HOST = Config.appUrl

export default {
    postLogin: async (username, password) => {
        try {
            // const response = await axios.post(`${HOST}/token`,
            //     {
            //         grant_type: "password",
            //         username: username,
            //         password: password,



            //     },
            //     {
            //         headers: {
            //             "Accept": 'application/json',
            //             "Content-Type": 'application/x-www-form-urlencoded',
            //         }
            //     }
            // )
            const response = await axios({
                method: 'post',
                url: `${HOST}/token`,
                data: (`grant_type=password&username=${username}&password=${password}`),
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/x-www-form-urlencoded",
                }
            })
            return response.data;
        } catch (error) {
            console.log("loginError: ", error)
            throw error;
        }
    }
}
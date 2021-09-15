import axios from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage';
import { Config } from './config';

const HOST = Config.appUrl + '/v1/UAE-en'

const headers = async () => {
    const accessToken = await EncryptedStorage.getItem("ACCESS_TOKEN")
    console.log(accessToken)
    return {
        Authorization: `Bearer ${accessToken}`,
    }
}

export default {
    getJobsList: async () => {
        const header = await headers()
        try {
            const response = await axios.get(`${HOST}/ustajobs/myjobsbypage/1`,
                {
                    headers: header
                }
            )
            return response.data.Data;
        } catch (error) {
            console.log("jobsListError: ", error)
            throw error;
        }
    },
    getJobDetail: async (jobId) => {
        const header = await headers()
        try {
            const response = await axios.get(`${HOST}/job/detail/${jobId}`,
                {
                    headers: header
                }
            )
            return response.data.Data;
        } catch (error) {
            console.log("jobDetailError: ", error)
            throw error;
        }
    },
}
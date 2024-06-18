import config from '../config';
import axios from 'axios';

export const getToken = (code: string) => {
    const encodedCredentials = Buffer.from(
        `${config.client_id}:${config.client_secret}`,
    ).toString('base64');

    return axios
        .post(
            'https://api.pinterest.com/v5/oauth/token',
            new URLSearchParams({
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: config.redirect_uri,
            }).toString(),
            {
                headers: {
                    Authorization: 'Basic ' + encodedCredentials,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            },
        )
        .then((response) => {
            console.log(response.data, 'aAXIIIIIIIIIIII');
            return response.data;
        })
        .catch((error) => {
            console.error(error);
            throw error;
        });
};

export const getBoards = (token: string) => {
    return axios
        .get('https://api.pinterest.com/v5/boards', {
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            console.log(response.data, 'after token *********');
            return response.data;
        })
        .catch((error) => {
            console.error(error);
            throw error;
        });
};

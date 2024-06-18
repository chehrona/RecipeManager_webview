import axios from 'axios';
const API_BASE_URL = 'http://127.0.0.1:5000';

export const authenticate = async (code: string) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/authenticate`, {
            code,
        });
        return response.data;
    } catch (error: any) {
        return error;
    }
};

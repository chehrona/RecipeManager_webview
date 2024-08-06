import axios from 'axios';
const API_BASE_URL = 'http://127.0.0.1:5000';
import { Pin } from '../interfaces';

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

export const getPins = async (board_id: string): Promise<{ items: Pin[] }> => {
    try {
        const response = await axios.get(
            `${API_BASE_URL}/boards/${board_id}/pins`,
        );
        return response.data;
    } catch (error: any) {
        return error;
    }
};

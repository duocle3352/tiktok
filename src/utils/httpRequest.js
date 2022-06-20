import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (past, options = {}) => {
    const response = await httpRequest.get(past, options);

    return response.data;
};

export default httpRequest;

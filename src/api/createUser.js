import axios from "axios";

export const createUser = async(userData) => {
    try {
        const result = await axios.post(`${process.env.REACT_APP_BACKEND_URL}auth/register`,userData);
        console.log(JSON.stringify(result,null,2));
        return result.data;
    } catch (error) {
        console.log(JSON.stringify(error.response.data,null,2));
        return error.response.data;
    }
}
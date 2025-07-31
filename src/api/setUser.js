import axios from "axios"

export const setUser = async() => {
    try {
        const token = localStorage.getItem('token')
        const result = await axios.get(`${process.env.REACT_APP_BACKEND_URL}user/profile`,{
            headers : {
                'Authorization' : `Bearer ${token}`
            }
        });
        return result.data;
    } catch (error) {
        console.log(JSON.stringify(error,null,2));
        return error.response.data;
    }
}
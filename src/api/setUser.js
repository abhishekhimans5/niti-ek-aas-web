import axios from "axios"

export const setUser = async() => {
    try {
        const token = localStorage.getItem('token')
        const result = await axios.get(`${process.env.REACT_APP_BACKEND_URL}user/profile`,{
            headers : {
                'Authorization' : `Bearer ${token}`
            }
        });
        console.log(JSON.stringify(result.data,null,2));
        return result.data;
    } catch (error) {
        //console.log(JSON.stringify(error.response.data,null,2));
        return error.response.data;
    }
}
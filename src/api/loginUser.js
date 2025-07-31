import axios from "axios"

const loginUser = async(user) =>{

    try {
        const result = await axios.post(`${process.env.REACT_APP_BACKEND_URL}auth/login`,user);
        //console.log(JSON.stringify(result.data,null,2));
        localStorage.setItem('token',result.data.data.token);
        return result.data;
    } catch (error) {
        return (error.response.data);
    }
}
export default loginUser
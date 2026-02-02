import axios from "axios"

const API = axios.create({
    baseURL: "http://localhost:5000/auth",
    headers: { "Content-Type": "application/json" },
    withCredentials:true,
})

export const LoginAPI = (data)=> API.post('/login',data);

export const MeAPI = () => API.get("/me")

export const SignupAPI = (data) => API.post('/signup',data);

export const LogoutAPI = () => API.post("/logout")

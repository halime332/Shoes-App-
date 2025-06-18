import axios from "axios";
import type { AuthResponse, LoginData, RegisterData, User } from "../types";


//axios özelleştirme
const api =axios.create({
    baseURL:"http://localhost:5000/api",
    withCredentials:true,
});

//her api isteği öncesinde localde token varsa header olarak ekle

api.interceptors.request.use((config)=>{
    const token = localStorage.getItem("accessToken");
    if(token){
        config.headers.Authorization =`Bearer ${token}`;
    }

    return config;
});

// auth enpoints
export const authApi={
    register:(data:RegisterData)=>api.post<AuthResponse>("/auth/register", data),
    login:(data:LoginData)=>api.post<AuthResponse>("/auth/login", data),
    logout:()=>api.post("/auth/logout"),

    getCurrentUser:() =>api.get<{user:User}>("/auth/me"),

};
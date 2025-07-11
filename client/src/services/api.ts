import axios from "axios";
import type { AuthResponse, LoginData, RegisterData, User ,Shoe, ShoeData} from "../types";


//axios özelleştirme
const api =axios.create({
    baseURL:"http://localhost:5001/api",
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

//eğer access tokenin süresi dolmuşsa otomatik olarak refresh endpointine istek atıp  
//access tokenı yenile

//apiden gelen her cevabı izle
api.interceptors.response.use((res)=>res,
 //cevap olumluysa hiç bir şey hiçbir şey yapmaz 
 async(err)=>{
    //cevap olumsuzsa  bu fonksiyon çalışır 
    const originalRequest =err.config;
    // hata sebebi token kaykaklıysa bu if çalışır
  if(err?.response?.status===401 && !originalRequest._retry){
    originalRequest._retry=true;
    //refresh enpointine istek atılır ve token yenilenir
    try{
        const res=await api.post<AuthResponse>("/auth/refresh");
        const {accessToken} =res.data;
        localStorage.setItem("accessToken",accessToken);
        //orjinal api isteği tekrardan atılır
        return api(originalRequest);
    }catch(error){
        //access token yenilenmezse demekki refreh token ın süresi
        //dolmuştur o zaman sistemden atarız kişiyi ve tekrar girriş yapmasını isteriz
        localStorage.removeItem("accessToken");
        window.location.href="/login";
        return Promise.reject(error);
    }
  }  
 }
);


// auth enpoints
export const authApi={
    register:(data:RegisterData)=>api.post<AuthResponse>("/auth/register", data),
    login:(data:LoginData)=>api.post<AuthResponse>("/auth/login", data),
    logout:()=>api.post("/auth/logout"),

    getCurrentUser:() =>api.get<{user:User}>("/auth/me"),

};

//shoe endpoints
export const shoesApi = {
    getAll :() =>api.get<Shoe[]>("/shoes"),
    getById:(id:string)=>api.get<Shoe>(`/shoes/${id}`),
    create:(data:ShoeData) =>api.post<Shoe>("/shoes",data),
    edit:(id:string,data:ShoeData) =>api.put<Shoe>(`/shoes/${id}`,data),
    delete:(id:string) =>api.delete(`/shoes/${id}`),
};
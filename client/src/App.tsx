import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Main from "./pages/main";
import Detail from "./pages/detail";
import Dashboard from "./pages/dashboard";
import Protected from "./components/protected";


//Sadece oturumu açık olan kullanıcıların girmesine izin ver

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      {/*herkes girebilir */}
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>

      {/*sadece oturumu  açık kullanıcılar */}
      <Route path="/" element={
         <Protected/>
        }>
        <Route index element={<Main/>}/>
        <Route path="/shoes/:id" element={<Detail/>}/>
        <Route path="/admin" element={<Dashboard/>}/>
      </Route>
      
      {/*sadece rolü admin olan kullanıcılar girer */}
      <Route path="/admin" element={<Protected allowedRole="admin"/>}>
         <Route index element={<Dashboard/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
};

export default App;

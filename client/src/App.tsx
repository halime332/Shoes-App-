import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Main from "./pages/main";
import Layout from "./components/layout";

const Protected =({children}:{children:React.ReactNode}) =>{
  //kullanıcının yetkisi var mı?
  return true ? <> {children}</> :<Navigate to="/login"/>
}

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>

      <Route path="/" element={
        <Protected>
          <Layout/>
        </Protected>
        }>
        <Route index element={<Main/>}/>
       
      </Route>
    </Routes>
    </BrowserRouter>
  );
};

export default App;

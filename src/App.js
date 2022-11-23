import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Cadastro from "./Cadastro";


export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
                <Routes>
                    <Route path="/cadastro" element={<Cadastro />}></Route>
                </Routes>
        </BrowserRouter>
    )
}
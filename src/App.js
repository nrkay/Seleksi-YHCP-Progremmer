import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import DaftarMahasiswa from "./pages/DaftarMahasiswa";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import DetailMahasiswa from "./components/Detail";
import { Route, Link, Routes } from "react-router-dom";
import EditData from "./pages/EditData";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/tambahMahasiswa" element={<DaftarMahasiswa />} />
        <Route path="/Mahasiswa" element={<Table />} />
        <Route path="Mahasiswa/detail/:id" element={<DetailMahasiswa />} />
        <Route path="Mahasiswa/detail/:id/edit/:id" element={<EditData />} />
      </Routes>
    </>
  );
}

export default App;

import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../Stylesheet/Login.css";

function Login() {
  const [user, setUser] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState();

  useEffect(() => {
    async function getUser() {
      const res = await axios(
        "https://63c821c15c0760f69ac5fa54.mockapi.io/user"
      );
      setUser(res.data);
    }
    getUser();
  }, []);

  const handelSubmit = (e) => {
    e.preventDefault();
    for (let i = 0; i < user.length; i++) {
      if (username == user[i].username && password == user[i].password) {
        setLogin(true);
        console.log("ini cek berhasil apa ga");
      }
    }

    if (login) {
      console.log("berh");
      alert("Berhasil Login");
      window.location = "/Mahasiswa";
    } else {
      console.log("gagal");
      alert("Akun Belum Terdaftar, Silahkan Registrasi Terlebih Dahulu");
    }
  };
  return (
    <>
      <div className="container h-100">
        <div className="row h-100 d-flex justify-content-center">
          <div className="kolom col-6 h-100 mt-5 p-3">
            <h3 className="text-center">SELAMAT DATANG DI HASNUR CENTER</h3>
            <h3 className="text-center">Login</h3>
            <form action="" onSubmit={handelSubmit}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Username :
                </label>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="text-center mb-3">
                <button class="btn btn-light">Masuk</button>
                <Link className="text-decoration-none" to={`/register`}>
                  <h6 className="text-decoration-none mt-3">
                    Belum punya akun? <b>Daftar disini</b>
                  </h6>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

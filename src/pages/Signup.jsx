import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://63c821c15c0760f69ac5fa54.mockapi.io/user", {
        username: username,
        password: password,
      })
      .then(function (response) {
        console.log(response);
        setPassword("");
        setUsername("");
        alert("Akun Anda Berhasil Dibuat, Silahkan Kembali Ke Laman Login");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container h-100">
        <div className="row h-100 d-flex justify-content-center mt-3">
          <div className="kolom col-6 h-100 mt-5 p-3">
            <h1 className="text-center">Daftar</h1>
            <form action="" onSubmit={handleSubmit}>
              <div class="mb-3">
                <label for="inputUsername" class="form-label">
                  Username :
                </label>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  class="form-control"
                  id="inputUsername"
                  // aria-describedby="emailHelp"
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
                <button class="btn btn-light">Daftar</button>
                <Link className="text-decoration-none" to={`/`}>
                  <h6 className="text-decoration-none mt-3">
                    Sudah punya akun? <b>Login disini</b>
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

export default SignUp;

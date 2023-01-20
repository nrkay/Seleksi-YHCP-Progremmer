import axios from "axios";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

function EditData() {
  const [name, setName] = useState("");
  const [prodi, setProdi] = useState("");
  const [semester, setSemester] = useState("");
  const [angkatan, setAngkatan] = useState("");
  const [kelas, setKelas] = useState("");
  const [mahasiswa, setMahasiswa] = useState();
  const { id } = useParams();


//   useEffect(() => {
//     console.log("Hallo World");
//     axios("https://63c821c15c0760f69ac5fa54.mockapi.io/mahasiswa").then(
//       (res) => {
//         setMahasiswa(res.data);
//       }
//     );
//   }, []);
console.log(id)

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`https://63c821c15c0760f69ac5fa54.mockapi.io/mahasiswa/${id}`, {
      name: name,
      prodi: prodi,
      semester: semester,
      angkatan: angkatan,
      kelas: kelas,
    })
    .then(function (response) {
      console.log(response);
      setName("");
      setProdi("");
      setSemester("");
      setAngkatan("");
      setKelas("");
      alert("Data Berhasil Diubah"); 
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  return (
    <>
      <div className="container mt-3">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="form-mahasiswa col-lg-6 col-md-6 col-10 d-flex justify-content-center align-items-center h-100">
            <div className="mb-3">
              <h1>Edit Data Mahasiswa</h1>
              <form action="" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label for="inputNama" className="form-label">
                    Nama :
                  </label>
                  <input
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="form-control"
                    id="inputNama"
                    // aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                <label for="inputProdi" className="form-label">
                    Prodi :
                  </label>
                  <select value={prodi} 
                    onChange={(e) => setProdi(e.target.value)} 
                    class="form-select" aria-label="Default select example">
                    <option selected>Pilih Prodi</option>
                    <option value="Informatika">Informatika</option>
                    <option value="Sistem Informasi">Sistem Informasi</option>
                    <option value="Teknik Kimia">Teknik Kimia</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label for="inputSemester" className="form-label">
                    Semester :
                  </label>
                  <select value={semester} 
                    onChange={(e) => setSemester(e.target.value)} 
                    class="form-select" aria-label="Default select example">
                    <option selected>Pilih Semester</option>
                    <option value="Ganjil">Ganjil</option>
                    <option value="Genap">Genap</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label for="inputAngkatan" className="form-label">
                    Angkatan :
                  </label>
                  <select value={angkatan} 
                    onChange={(e) => setAngkatan(e.target.value)} 
                    class="form-select" aria-label="Default select example">
                    <option selected>Pilih Semester</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label for="inputKelas" className="form-label">
                    Kelas :
                  </label>
                  <select value={kelas} 
                    onChange={(e) => setAngkatan(e.target.value)} 
                    class="form-select" aria-label="Default select example">
                    <option selected>Pilih Semester</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                  </select>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Edit
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditData;

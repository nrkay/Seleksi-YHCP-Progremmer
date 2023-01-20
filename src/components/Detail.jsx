import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function DetailMahasiswa() {
  const navigation = useNavigate();
  const { id } = useParams();
  const [mahasiswa, setMahasiswa] = useState([]);
  useEffect(() => {
    console.log("Hallo World");
    axios("https://63c821c15c0760f69ac5fa54.mockapi.io/mahasiswa").then(
      (res) => {
        setMahasiswa(res.data);
      }
    );
  }, []);

  const handleEdit = (id) => {
    navigation(`edit/${id}`);
  }

  return (
    <>
      {mahasiswa
        .filter((el) => el.id === id)
        .map((el) => {
          return (
            <>
              <div className="">
                <div className="Judul mt-3">
                  <h1 className="text-center">Rincian Mahasiswa</h1>
                </div>
                <div className="mt-3">
                  <div class="container ">
                    <div class="row" key={el.id}>
                      <div class="col-12 p-3"> <b>Nama :</b> {el.name}</div>
                      <div class="col-lg-6 col-md-6 col-12 mt-2 mb-2 p-3">
                      <b>Semester :</b>{el.semester}{" "}
                      </div>
                      <div class="col-lg-6 col-md-6 col-12 mt-2 mb-2 p-3">
                      <b>Program Studi :</b> {el.prodi}{" "}
                      </div>
                      <div class="col-lg-6 col-md-6 col-12 mt-2 mb-2 p-3">
                        <b>Angkatan :</b>       {el.angkatan}{" "}
                      </div>
                      <div class="col-lg-6 col-md-6 col-12 mt-2 mb-2 p-3">
                      <b>Kelas :</b> {el.kelas}{" "}
                      </div>
                      <div className="col-12 text-center mt-5">
                          <button onClick={() => handleEdit(el.id)} type="button" class="btn btn-primary">Edit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
}

export default DetailMahasiswa;

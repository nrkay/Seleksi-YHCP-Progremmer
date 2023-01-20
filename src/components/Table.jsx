import { useEffect, useState } from "react";
import { Link, Outlet, useMatch, useResolvedPath } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Table() {
  const navigation = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [mahasiswa, setMahasiswa] = new useState([]);
  const [filterList, setFilterList] =  useState();
  const [data, setData] = useState();
  const [sort, setSort] = useState("all");
  useEffect(() => {
    console.log("Hallo World");
    axios("https://63c821c15c0760f69ac5fa54.mockapi.io/mahasiswa").then(
      (res) => {
        setMahasiswa(res.data);
        setIsLoading(false);
      }
    );
  }, []);

  const handleDetail = (id) => {
    navigation(`detail/${id}`);
  };

  const handleSearch = (event) => {
    var updatedList = [...mahasiswa];
    updatedList = updatedList.filter((item) => {
      return item.toLowerCase().indexOf(filterList.toLowerCase()) !== -1;
    });
    mahasiswa(updatedList)
    
  
  };



  return (
    <>
      <div className="row d-flex justify-content-center mt-3">
        <div className="col-8">
          <div className=" mb-3">
            <div className="row">
              <div className="col-3">
                <Link to={'/tambahMahasiswa'}>
                  <button type="button" class="btn btn-primary">
                    Add+
                  </button>
                </Link>
              </div>
              <div className="col-9">
                <form class="d-flex" role="search" onChange={handleSearch}>
                  <input
                    value={filterList}
                    onChange={(e) => setFilterList(e.target.value)}
                    class="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button type="button" class="btn btn-primary">
                    Search
                  </button>
                </form>
              </div>
            </div>
            {/* <form class="d-flex" role="search" onChange={handleSearch}>
              <input
                value={filterList}
                onChange={(e) => setFilterList(e.target.value)}
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                type="button"
                class="btn btn-primary"
              >
                Search
              </button>
            </form> */}
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col-1">Nomor</th>
                <th scope="col-2">Nama</th>
                <th scope="col-2">Prodi</th>
                <th scope="col-2">Semester</th>
                <th scope="col-1">Kelas</th>
                <th scope="col-2">Tahun Angkatan</th>
                <th scope="col-2">Edit</th>
              </tr>
            </thead>
            <tbody>
              {mahasiswa.map((item) => (
                <tr key={item.id}>
                  <th scope="row">1</th>
                  <td>{item.name}</td>
                  <td>{item.prodi}</td>
                  <td>{item.semester}</td>
                  <td>{item.kelas}</td>
                  <td>{item.angkatan}</td>
                  <td>
                    <button
                      onClick={() => handleDetail(item.id)}
                      class="btn btn-primary"
                    >
                      Detail
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* <table className="table">
        <thead>
          <tr>
            <th scope="col-1">Nomor</th>
            <th scope="col-2">Nama</th>
            <th scope="col-2">Prodi</th>
            <th scope="col-2">Semester</th>
            <th scope="col-1">Kelas</th>
            <th scope="col-2">Tahun Angkatan</th>
            <th scope="col-2">Edit</th>
          </tr>
        </thead>
        <tbody>
            {mahasiswa.map((item) => (
                <tr key={item.id}>
                <th scope="row">1</th>
                <td>{item.name}</td>
                <td>{item.prodi}</td>
                <td>{item.semester}</td>
                <td>{item.kelas}</td>
                <td>{item.angkatan}</td>
                <td>
                    <button onClick={() => handleDetail(item.id)} class="btn btn-primary">Detail</button>
                </td>
              </tr>
            ))} 
          
         
          
        </tbody>
      </table> */}
    </>
  );
}

export default Table;

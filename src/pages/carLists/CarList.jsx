import "./CarList.css";
import { DataGrid, RowsProp, ColDef } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCarFunc, getCars } from "../../redux/apiCalls";
import Navbar from "../../components/Navbar";

export default function CarList() {
  const dispatch = useDispatch();
  const rows = useSelector((state) => state.car.cars);

  useEffect(() => {
    getCars(dispatch);
  }, [dispatch]);
  console.log("dfjdjd", rows)

  const handleDelete = (id) => {
    deleteCarFunc(id, dispatch);
  };
  // const rows = [
  //   { id: 1, col1: "Hello", col2: "World" },
  //   { id: 2, col1: "XGrid", col2: "is Awesome" },
  //   { id: 3, col1: "Material-UI", col2: "is Amazing" },
  //   { id: 4, col1: "Hello", col2: "World" },
  //   { id: 5, col1: "XGrid", col2: "is Awesome" },
  //   { id: 6, col1: "Material-UI", col2: "is Amazing" }
  // ];

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "model_name",
      headerName: "Model Name",
      width: 230,
      renderCell: (params) => {
        return (
            <div className="carListItem">
              <img className="carListImg" src={params.row.image} alt="" />
              {params.row.car_name}
            </div>
        );
      },
    },
    { field: "car_name", headerName: "Car Name", width: 150 },
    { field: "price", headerName: "Price", width: 150 },
    { field: "desc", headerName: "Description", width: 350 },
    { field: "createdAt", headerName: "Created", width: 200 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
            <>
              <Link to={"/car/" + params.row._id}>
                <button className="carListEdit">Edit</button>
              </Link>
              <DeleteOutline
                  className="carListDelete"
                  onClick={() => handleDelete(params.row._id)}
              />
            </>
        );
      },
    },
  ];
  return (

    <div className="carList">
      <Navbar/><br/>

      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
            rows={rows}
            columns={columns}
            getRowId={(row) => row._id}
        />
      </div>
    </div>
  );
}

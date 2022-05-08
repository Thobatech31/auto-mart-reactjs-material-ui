import { loginFailure, loginStart, loginSuccess, registerStart, registerSuccess, registerFailure } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethod";
import Notification from "../utils/notification";
import {
  getCarFailure,
  getCarStart,
  getCarSuccess,
  deleteCarFailure,
  deleteCarStart,
  deleteCarSuccess,
  updateCarFailure,
  updateCarStart,
  updateCarSuccess,
  addCarFailure,
  addCarStart,
  addCarSuccess,
} from "./carRedux";


export const registerFunc = async (dispatch, user)=>{
  dispatch(registerStart());
  try{
    const res = await publicRequest.post("/users/register",user)
    dispatch(registerSuccess(res.data))
    if(res.data.status.code === 100){
      localStorage.setItem(
          "token",
          res.data.data.token
      );
      localStorage.setItem('user', JSON.stringify(res.data.data))
      Notification.success(res.data.status.msg);
      window.location.href = '/login';
    }
  }catch (err){
    dispatch(registerFailure())
    Notification.error(err.response.data.msg);
  }
}

export const loginFunc = async (dispatch, user)=>{
  dispatch(loginStart());
  try{
    const res = await publicRequest.post("/users/login",user)
    dispatch(loginSuccess(res.data))
    if(res.data.status.code === 100){
      localStorage.setItem(
          "token",
          res.data.data.token
      );
      console.log("djhksjksjksjk", res.data)
      localStorage.setItem('user', JSON.stringify(res.data.data))
      Notification.success(res.data.status.msg);
    }
  }catch (err){
    dispatch(loginFailure())
    Notification.error(err.response.data.msg);
  }
};



export const getCars = async (dispatch) => {
  dispatch(getCarStart());
  try {
    const res = await publicRequest.get("/cars");
    console.log("CAAAAARRR", res.data)
    dispatch(getCarSuccess(res.data.data));
    Notification.success(res.data.status.msg);
  } catch (err) {
    dispatch(getCarFailure());
    Notification.error(err.response.data.msg);
  }
};

//
// export const deleteProduct = async (id, dispatch) => {
//   dispatch(deleteProductStart());
//   try {
//     // const res = await userRequest.delete(`/cars/${id}`);
//     dispatch(deleteProductSuccess(id));
//     // Notification.success(res.data.status.msg);
//   } catch (err) {
//     dispatch(deleteProductFailure());
//     Notification.error(err.response.data.msg);
//   }
// };
//
// export const updateProduct = async (id, product, dispatch) => {
//   dispatch(updateProductStart());
//   try {
//     // update
//     dispatch(updateProductSuccess({ id, product }));
//     // Notification.success(res.data.status.msg);
//   } catch (err) {
//     dispatch(updateProductFailure());
//     Notification.error(err.response.data.msg);
//   }
// };
// export const addProduct = async (product, dispatch) => {
//   dispatch(addProductStart());
//   try {
//     const res = await userRequest.post(`/cars`, product);
//     dispatch(addProductSuccess(res.data));
//     Notification.success(res.data.status.msg);
//   } catch (err) {
//     dispatch(addProductFailure());
//     Notification.error(err.response.data.msg);
//   }
// };


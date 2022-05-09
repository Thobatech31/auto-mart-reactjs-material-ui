import { loginFailure, loginStart, loginSuccess, registerStart, registerSuccess, registerFailure } from "./userRedux";
import {publicRequest, userRequest, userRequestForm} from "../requestMethod";
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
export const deleteCarFunc = async (id, dispatch) => {
  dispatch(deleteCarStart());
  try {
    const res = await userRequest.delete(`/cars/${id}`);
    dispatch(deleteCarSuccess(id));
    Notification.success(res.data.status.msg);
    window.location.reload();
  } catch (err) {
    dispatch(deleteCarFailure());
    Notification.error(err.response.data.msg);
  }
};
//

export const addCar = async (dispatch, car) => {
  dispatch(addCarStart());
  try {
    // alert(4)
    const res = await userRequestForm.post(`/cars`, car);
    dispatch(addCarSuccess(res.data.data));
    Notification.success(res.data.status.msg);
  } catch (err) {
    // alert(6)
    dispatch(addCarFailure());
    console.log(err)
    Notification.error(err.message);
  }
};


import { loginFailure, loginStart, loginSuccess, registerStart, registerSuccess, registerFailure } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethod";
import Notification from "../utils/notification";


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
}

import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethod";
import Notification from "../utils/notification";



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

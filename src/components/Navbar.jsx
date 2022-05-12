import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import {Link} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import { logoutFunc } from "../redux/apiCalls";


const Container = styled.div`
  height: 60px;
  // background:red;
  ${mobile({ height: "60px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 5px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: black;
  ${mobile({ fontSize: "18px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  font-weight:400;
  ${mobile({ fontSize: "11px", marginLeft: "6px" })}
`;
const MenuItemM = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  font-weight:400;
  display:initial;
  ${mobile({ fontSize: "12px", marginLeft: "5px", display:"none" })}
`;
const UserItem = styled.div`
  font-size: 20px;
   font-weight: bold;
  color: teal;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "2px" })}
`;

const Button = styled.button`
  padding: 10px 20px;
  border: 1px solid blue;
  background-color: white;
  border-radius:5px;
  cursor: pointer;
  font-weight: 500;
  margin-right:5px;

  &:hover{
      background-color: #f8f4f4;
  }
`;
const Button2 = styled.button`
  padding: 10px 25px;
  border: 1px solid white;
  background-color: teal;
  border-radius:5px;
  cursor: pointer;
  font-weight: 500;
  color:white;

  &:hover{
      background-color: teal;
  }
      ${mobile({ fontSize: "12px", padding:"10px" })}

`;

const Logout = styled.button`
  padding: 10px 20px;
  border: 1px solid white;
  background-color: red;
  border-radius:5px;
  cursor: pointer;
  font-weight: 500;
  color:white;

  &:hover{
      background-color: brown;
  }
    ${mobile({ fontSize: "12px", padding:"10px" })}

`;



const Navbar = () => {
    const user = useSelector(state=>state.user.currentUser);
    const dispatch = useDispatch();

    const logoutFun = () =>{
        dispatch(logoutFunc)
    }

    return (
        <Container>
            <Wrapper>
                <Left>

                    <Link to={"/"}>
                        <Logo>Auto Mart</Logo>
                    </Link>

                </Left>

                <Center>
                    <MenuItem><Link to={"/"}>Home</Link></MenuItem>
                    <MenuItemM> <Link to={"/cars"}>Car Lists</Link></MenuItemM>
                    <MenuItem> <Link to={"/create"}>Create Post</Link></MenuItem>
                </Center>

                <Right>

                    <Logout onClick={logoutFun}>Logout</Logout>

                    {
                        user
                            ?
                            <UserItem>{user.data.username} </UserItem>
                            :
                            <>
                                <Link to={"/register"}>
                                    <Button>Register</Button>
                                </Link>
                                <Link to={"/login"}>
                                    <Button2>Login</Button2>
                                </Link>
                            </>
                    }
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;

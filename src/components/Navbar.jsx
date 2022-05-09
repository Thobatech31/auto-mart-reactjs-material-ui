import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";


const Container = styled.div`
  height: 60px;
  // background:red;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: black;
  ${mobile({ fontSize: "24px" })}
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
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const UserItem = styled.div`
  font-size: 20px;
   font-weight: bold;
  color: teal;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "14px", marginLeft: "10px" })}
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
`;


const Navbar = () => {
    const user = useSelector(state=>state.user.currentUser)

    return (
        <Container>
            <Wrapper>
                <Left>

                        <Logo>Auto Mart</Logo>

                </Left>

                <Center>
                    <MenuItem>HOME</MenuItem>
                    <MenuItem>ABOUT US</MenuItem>
                    <MenuItem>CONTACT</MenuItem>
                    <MenuItem>SERVICE</MenuItem>
                </Center>

                <Right>
                    {
                        user
                            ?
                            <UserItem>{user.data.last_name} {"  "} {user.data.first_name}</UserItem>
                            :
                            <>
                                <Link to={"/register"}>
                                    <Button>REGISTER</Button>
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

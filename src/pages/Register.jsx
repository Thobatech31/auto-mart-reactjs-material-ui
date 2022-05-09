import styled from "styled-components";
import { mobile } from "../responsive";
import Spinner from '../components/Loading'
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';
import {registerFunc} from "../redux/apiCalls";
import {Link} from "react-router-dom";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://cars.usnews.com/pics/size/776x517/images/Auto/izmo/i159614744/2022_honda_cr_v_angularfront.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;


const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [first_name, setFirstname] = useState("");
    const [last_name, setLastname] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {isFetching, error, currentUser, isSuccess} = useSelector(state=>state.user)

    // useEffect(()=>{
    //   if (isSuccess) {
    //     navigate('/login')
    //   }
    // }, [isFetching])

    const handleRegister = (e) =>{
        e.preventDefault()
        registerFunc(dispatch,{username, email, mobile, first_name, last_name, address, password})
    }
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input type="text" placeholder="username" name="username" id="username"
                           onChange={(e)=>setUsername(e.target.value)}
                    />
                    <Input type="email" placeholder="email" name="email" id="email"
                           onChange={(e)=>setEmail(e.target.value)}
                    />
                    <Input type="text" placeholder="mobile" name="mobile" id="mobile"
                           onChange={(e)=>setMobile(e.target.value)}
                    />
                    <Input type="text" placeholder="First Name" name="first_name" id="first_name"
                           onChange={(e)=>setFirstname(e.target.value)}
                    />
                    <Input type="text" placeholder="Last Name" name="last_name" id="last_name"
                           onChange={(e)=>setLastname(e.target.value)}
                    />
                    <Input type="text" placeholder="Address" name="address" id="address"
                           onChange={(e)=>setAddress(e.target.value)}
                    />
                    <Input type="password" placeholder="password" name="password" id="password"
                           onChange={(e)=>setPassword(e.target.value)}
                    />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button onClick={handleRegister}>
                        {isFetching ? (
                            <Spinner/>
                        ) : (
                            <span>Sign Up{'  '}</span>
                        )}
                    </Button>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Register;

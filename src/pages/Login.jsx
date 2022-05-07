import styled from "styled-components";
import {mobile} from "../responsive";
import Spinner from '../components/Loading'
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';
import {loginFunc} from "../redux/apiCalls";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://cars.usnews.com/images/article/202106/128679/11_2021_toyota_supra.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
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
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {isFetching, error, currentUser, isSuccess} = useSelector(state=>state.user)

    // useEffect(()=>{
    //   const token = getUserToken();
    //   if (token) {
    //     alert(5)
    //     navigate('/')
    //   }
    // }, [])


    const handleLogin = (e) =>{
        e.preventDefault()
        loginFunc(dispatch,{username, password})

    }
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input type="text" placeholder="username" name="username" id="username"
                           onChange={(e)=>setUsername(e.target.value)}
                    />
                    <Input type="password" placeholder="password" name="password" id="password"
                           onChange={(e)=>setPassword(e.target.value)}
                    />
                    <Button onClick={handleLogin}>
                        {isFetching ? (
                            <Spinner/>
                        ) : (
                            <span>Sign In{'  '}</span>
                        )}
                    </Button>
                    <Link to="/register">CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Login;

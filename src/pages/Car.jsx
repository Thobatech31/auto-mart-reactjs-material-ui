import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {userRequest} from "../requestMethod";
import { useDispatch } from "react-redux";
import Notification from "../utils/notification";
import {Link} from "react-router-dom";


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1.5;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.p`
  font-weight: 100;
  font-size: 18px;
  margin-bottom:20px;
  font-weight:400;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Button = styled.button`
  padding: 10px 25px;
  border: 1px solid black;
  background-color: teal;
  color:white;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;  
  &:hover{
      background-color: teal;
  }
`;

const Car = () => {
    const location = useLocation();
    const car_id = location.pathname.split("/")[2];
    const [car, setCar] = useState({});
    useEffect(() =>{
        const getCar = async () => {
            try{
                const res = await userRequest.get("/cars/" + car_id);
                setCar(res.data.data);
                Notification.success(res.data.status.msg);
            }catch (err){
                Notification.error(err.response.data.msg);
            }
        }
        getCar();
    }, [car_id])
    return (
        <Container>
            <Navbar />
            <Wrapper>
                <ImgContainer>
                    <Image src={car.image} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{car.car_name}</Title>
                    <Desc>
                        {car.desc}
                    </Desc>
                    <Price>Model Name: {car.model_name}</Price>
                    <Price>Model Year: {car.model_year}</Price>
                    <Price>Price: ₦ {car.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color={car.color} />
                        </Filter>

                    </FilterContainer>
                    <AddContainer>
                        <Link to={"/create"}>
                            <Button>Create Car Post</Button>
                        </Link>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Footer />
        </Container>
    );
};

export default Car;

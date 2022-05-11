import styled from "styled-components";
import { carlists } from "../data";
import { mobile } from "../responsive";
import CarItem from "./CarItem";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {getCars} from "../redux/apiCalls";
import {Link} from "react-router-dom";

const Container = styled.div`
  display: flex;
  padding: 20px;
   flex-wrap: wrap;
  justify-content: space-between;

`;

const Header = styled.h1`
    text-align:center;
    cursor: pointer;
`;

const CreateDiv = styled.div`
    text-align: right;
    padding:0 25px;
`;

const Button = styled.button`
  padding: 12px 35px;
  border: 1px solid white;
  background-color: blue;
  border-radius:5px;
  cursor: pointer;
  font-weight: 500;
  color:white;

  &:hover{
      background-color: lightblue;
  }
`;

const ButtonAll = styled.button`
  padding: 12px 35px;
  border: 1px solid white;
  background-color: teal;
  border-radius:5px;
  cursor: pointer;
  font-weight: 500;
  color:white;
  margin-right:5px;

  &:hover{
      background-color: lightblue;
  }
`;

const Cars = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.car.cars);

  useEffect(() => {
    getCars(dispatch);
  }, [dispatch]);

  return (
      <div>

          <CreateDiv>
              <Link to={"/cars"}>
                  <ButtonAll>View All Cars</ButtonAll>
              </Link>
              <Link to={"/create"}>
                  <Button>Create Car Post</Button>
              </Link>
          </CreateDiv>

          <Header>Our Service</Header>
        <Container>
          {cars.map((item) => (
            <CarItem item={item} key={item._id} />
          )).slice(0,8)
          }

        </Container>
      </div>

  );
};

export default Cars;

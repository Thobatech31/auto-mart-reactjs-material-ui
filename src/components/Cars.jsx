import styled from "styled-components";
import { carlists } from "../data";
import { mobile } from "../responsive";
import CarItem from "./CarItem";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCars} from "../redux/apiCalls";

const Container = styled.div`
  display: flex;
  padding: 20px;
   flex-wrap: wrap;
  justify-content: space-between;

`;

const Cars = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.car.cars);

  useEffect(() => {
    getCars(dispatch);
  }, [dispatch]);

  return (
    <Container>
      {cars.map((item) => (
        <CarItem item={item} key={item.id} />
      ))}

    </Container>
  );
};

export default Cars;

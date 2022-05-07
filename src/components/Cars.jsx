import styled from "styled-components";
import { carlists } from "../data";
import { mobile } from "../responsive";
import CarItem from "./CarItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
   flex-wrap: wrap;
  justify-content: space-between;

`;

const Cars = () => {
  return (
    <Container>
      {carlists.map((item) => (
        <CarItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Cars;

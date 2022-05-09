import styled from "styled-components";
import { mobile } from "../responsive";
import {Link} from "react-router-dom";

const Container = styled.div`
  flex: 2;
  margin: 5px;
   display: flex;
  align-items: center;
  justify-content: center;
  min-width: 280px;
  height: 350px;
  position: relative;
  border: 1px solid #fcf5f5;
  border-radius: 5px;
  box-shadow: 0 3px 5px rgb(0 0 0 / 0.2);
  background:#FFFFFF;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}

`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`;

const CarItem = ({ item }) => {
  return (
    <Container>
        <Link to={`/car/${item.id}`}>
          <Image src={item.img} />
          <Info>
            <Title>{item.title}</Title>
            <Button>VIEW NOW</Button>
          </Info>
        </Link>
    </Container>
  );
};

export default CarItem;

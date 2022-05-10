import styled from "styled-components";
import { mobile } from "../responsive";
import {Link} from "react-router-dom";
import { deleteCarFunc } from "../redux/apiCalls";
import {useDispatch, useSelector} from "react-redux";
const Container = styled.div`
  flex: 2;
  margin: 5px;
   display: block;
  align-items: center;
  justify-content: center;
  min-width: 280px;
  height: 350px;
  position: relative;
  border: 1px solid #fcf5f5;
  border-radius: 5px;
  box-shadow: 0 3px 5px rgb(0 0 0 / 0.2);
  background:#FFFFFF;
  padding: 30px 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
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
    font-weight:bold;
    margin-bottom: 20px;
`;

const Desc = styled.p`
    color:black;
     padding: 10px;
`;

const View = styled.button`
    border:none;
    padding: 10px 25px;
    border-radius:5px;
    background-color: teal;
    color:white;
    cursor: pointer;
    font-weight: 600;
       &:hover{
      background-color: #a6cfdc;
  }
    
`;

const Delete = styled.button`
    border:none;
    padding: 10px 25px;
    border-radius:5px;
    background-color: red;
    color:white;
    cursor: pointer;
    font-weight: 600;
    margin-left:30px;
     &:hover{
      background-color: #FFA07A;
  }
`;



const CarItem = ({ item }) => {
    const dispatch = useDispatch()

    const deleteItem = (cart_id) =>{
        deleteCarFunc(cart_id, dispatch)
    }

    return (
    <Container>
        <Link style={{textDecoration: 'none'}} to={`/car/${item._id}`}>

        <Image src={item.image} />

        <Desc>{item.desc.slice(0, 70)} ........</Desc>
          <Info>
            <Title>{item.car_name}</Title>
          </Info>
        </Link>

       <div  style={{position: 'absolute'}}>
           <Link style={{textDecoration: 'none'}} to={`/car/${item._id}`}>
               <View>View Now</View>
           </Link>
           <Delete
               onClick={() => {
                   deleteItem(item._id);
               }}
           >
            Delete
           </Delete>
       </div>
    </Container>
  );
};

export default CarItem;

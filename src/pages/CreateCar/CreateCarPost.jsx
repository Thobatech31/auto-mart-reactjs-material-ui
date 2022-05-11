import { useState } from "react";
import "./newCar.css";
import Spinner from '../../components/Loading'
import { addCar } from "../../redux/apiCalls";
import {useDispatch, useSelector} from "react-redux";
import Navbar from "../../components/Navbar";


export default function CreateCarPost() {
    const [image, setFile] = useState(null);
    const [car_name, setCarName] = useState("");
    const [desc, setDesc] = useState("");
    const [model_name, setModelName] = useState("");
    const [model_year, setModelYear] = useState("");
    const [color, setColor] = useState("");
    const [price, setPrice] = useState("");

    const {isFetching} = useSelector((state) => state.car);

    const dispatch = useDispatch();

console.log("IMAAAGEGEGEG", image)
    const uploadImage = async (e) => {
      const file = e.target.files[0];
      TransformFile(file);
      // console.log(base64);
    };

    const TransformFile = (file) => {
            const reader = new FileReader();
            if(file) {
                reader.readAsDataURL(file);
                reader.onloadend = () => {
                    setFile(reader.result);
                };
            }else{
                setFile("");
            };
    };

    const handleClick = (e) => {
        e.preventDefault();
        // let formData = new FormData();
        //
        // formData.append('car_name', car_name);
        // formData.append('image', image);
        // formData.append('desc', desc);
        // formData.append('model_name', model_name);
        // formData.append('model_year', model_year);
        // formData.append('color', color);
        // formData.append('price', price);

        // addCar(dispatch,formData)
        addCar(dispatch, {car_name, image, desc, model_name, model_year, color, price})
    };

    return (
        <>
        <Navbar/><br/>
        <div className="newCar">
           <div>
               <h1 className="addCarTitle">New Car Post</h1>
               <form className="addCarForm">
                   <div className="addCarItem">
                       <label>Image</label>
                       <input
                           type="file"
                           id="image"
                           name="image"
                           // onChange={(e) => setFile(e.target.files[0])}
                           onChange={(e) => uploadImage(e)}
                       />
                   </div>

                   <div className="addCarItem">
                       <label>Car Name</label>
                       <input
                           name="car_name"
                           type="text"
                           placeholder="Benz"
                           onChange={(e)=>setCarName(e.target.value)}
                       />
                   </div>
                   <div className="addCarItem">
                       <label>Description</label>
                       <input
                           name="desc"
                           type="text"
                           placeholder="description..."
                           onChange={(e)=>setDesc(e.target.value)}
                       />
                   </div>
                   <div className="addCarItem">
                       <label>Model Name</label>
                       <input
                           name="model_name"
                           type="text"
                           placeholder="Lexus yr73..."
                           onChange={(e)=>setModelName(e.target.value)}
                       />
                   </div> <div className="addCarItem">
                   <label>Model Year</label>
                   <input
                       name="model_year"
                       type="text"
                       placeholder="2022"
                       onChange={(e)=>setModelYear(e.target.value)}
                   />
               </div>
                   <div className="addCarItem">
                       <label>Color</label>
                       <input
                           name="color"
                           type="text"
                           placeholder="Red"
                           onChange={(e)=>setColor(e.target.value)}
                       />
                   </div>
                   <div className="addCarItem">
                       <label>Price</label>
                       <input
                           name="price"
                           type="number"
                           placeholder="100"
                           onChange={(e)=>setPrice(e.target.value)}
                       />
                   </div>
                   <button onClick={handleClick} className="addCarButton">
                       {isFetching ? (
                           <Spinner/>
                       ) : (
                           <span>Add Car Post{'  '}</span>
                       )}
                   </button>
               </form>
           </div>

            <div className="previewDiv">
                {image
                    ?
                    <img src={image} alt="prvImg"/>
                    :
                    <p>Image Preview will appear here</p>
                }
            </div>
        </div>
        </>
    );
}

import { useState } from "react";
import "./newCar.css";
import Spinner from '../../components/Loading'
import { addCar } from "../../redux/apiCalls";
import {useDispatch, useSelector} from "react-redux";

export default function CreateCarPost() {
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [model_name, setModelName] = useState("");
    const [model_year, setModelYear] = useState("");
    const [color, setColor] = useState("");
    const [price, setPrice] = useState("");

    const {isFetching} = useSelector((state) => state.car);

    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        addCar(dispatch,{title,image,desc,model_name,model_year,color,price})
    };

    return (
        <div className="newCar">
            <h1 className="addCarTitle">New Car Post hjh</h1>
            <form className="addCarForm">
                <div className="addCarItem">
                    <label>Image</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        onChange={(e) => setImage(e.target.value)}
                    />
                </div>

                <div className="addCarItem">
                    <label>Title</label>
                    <input
                        name="title"
                        type="text"
                        placeholder="Benz"
                        onChange={(e)=>setTitle(e.target.value)}
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
    );
}

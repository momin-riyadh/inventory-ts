import {useReducer, useEffect} from "react";
import {inventoryReducer, initialState} from "../reducers/inventoryReducer.js";
import axios from "axios";
import {FETCH_ACTIONS} from "../actions/index.js";

const InventoryList = () => {
    const [state, dispatch] = useReducer(inventoryReducer, initialState);

    const {items, loading, error} = state;

    console.log(items, loading, error);


    useEffect(() => {
        dispatch({type: FETCH_ACTIONS.PROGRESS});


        const getItems = async () => {
            try {
                let response = await axios.get('http://localhost:3000/eatables');
                if (response.status === 200) {
                    dispatch({type: FETCH_ACTIONS.SUCCESS, data: response.data})
                }

            } catch (err) {
                console.error(err)
                dispatch({type: FETCH_ACTIONS.ERROR, error: err.message})
            }
        }

        getItems();


    }, []);


    return (
        <div className="flex flex-col m-8 w-2/5">
            {
                loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <P>{error}</P>
                ) : (
                    <>
                        <h2 className="text-3xl">Item List</h2>
                        <ul className="flex flex-col">
                            {items.map((item) => (
                                <li key={item.id}><span>{item.name} </span>
                                <span>{item.picture}</span>
                                <span> {item.type}</span>
                                </li>
                            ))}
                        </ul>
                    </>

                )
            }
        </div>
    )
}

export default InventoryList;

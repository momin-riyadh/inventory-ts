import {useReducer, useEffect} from "react";
import {inventoryReducer, initialState} from "../reducers/inventoryReducer.js";
import axios from "axios";

const InventoryList = () => {
    const [state, dispatch] = useReducer(inventoryReducer, initialState);

    const {items, loading, error} = state;


    useEffect(() => {

    }, []);


    return (
        <div>
            Inventory List
        </div>
    )
}

export default InventoryList;

import React, { useEffect, useReducer, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {categories} from '../util/categories';
import CategoriesContainer from './CategoriesContainer';

const initialState = {
    itemCategories:[]
}

const reducer =(state, action) =>{
    switch(action.type){
        case 'REMOVE_ITEM':
            return {...state, itemCategories:state.itemCategories.filter(item => item.idCategory!=action.payload)}
        case 'FETCH_ITEMS':
            return {...state, itemCategories:categories}
        case 'CLEAR_ITEMS':
            return {...state, itemCategories:[]}
        default:
            return state;
    }
}

const Body = () => {

    const [state, dispatch] = useReducer(reducer,initialState);

    const deleteItem = (id) =>{
        dispatch({type:'REMOVE_ITEM', payload:id})
    }



    // const [itemsCategories, setItemCategories] = useState(categories);

    // const deleteItem = (id) =>{
    //   let items =  itemsCategories.filter(item => item.idCategory!=id);
    //   setItemCategories(items)
    // }

    // const state = useState(0);
    // let count = state[0];
    // let setCount = state[1];

    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count+1);
       
    }

   

  return (
    <div>
    <div>
        <button className='btn btn-primary' onClick={()=>dispatch({type:'FETCH_ITEMS'})}>Refresh/Load</button>
        <button className='btn btn-danger' onClick={()=>dispatch({type:'CLEAR_ITEMS'})}>Clear</button>
    </div>
        <CategoriesContainer categories={state.itemCategories} deleteItem={deleteItem}/>
   </div>
  )
}

export default Body


   
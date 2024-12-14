import React, { createContext, useState } from 'react'

const UserContext = createContext();

const ContextProvider = ({children}) => {
    const [cart, setCart] = useState(0);
    const [like, setLike] = useState([]);
    const [items, setItems] = useState([]);

    const addToCart = (item)=>{
        setCart((prev)=>prev+1)
        setItems([...items,item])
    }
    const removeToCart = (item)=>{
        let products = items.filter((id)=>id != item)
        setCart((prev)=>prev-1)
        setItems(products)
    }
    const handleLike = (item)=>{
        setLike([...like,item])
    }
    const handleUnLike = (item)=>{
        let likes = like.filter((id)=>id != item)
        setLike(likes)
    }

  return (
    <UserContext.Provider value={{cart,addToCart,removeToCart,items,like,handleLike,handleUnLike}}>
        {children}
    </UserContext.Provider>
  )
}

const useContextApi = ()=>{
    return React.useContext(UserContext);
}

export { ContextProvider, useContextApi};
import { useState, useEffect } from "react"

function ItemDetailContainer () {
    const [detail, setDetail]= useState()
    useEffect(() =>{
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(console.log);
    },[])
    return(
        <div>
            <p>{detail?.title}</p>
            <p>{detail?.description}</p>
        </div>
    )
}

export default ItemDetailContainer
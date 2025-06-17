

function ItemList ({items}) {
    return (
        <div className="grid grid-cols-2 gap-5 p-5">
            {items.map(prod => (
                <div key={prod.id} className="border flex flex-col gap-2 rounded"> 
                    <img src={prod.thumbnail}  alt={prod.nombre} className="rounded" />
                    <p>{prod.title}</p>
                    <p>{prod.description}</p>
                    <p>$ {prod.price}</p>
                    <button className="bg-red-300 cursor-pointer">Comprar</button>
                </div>
                ))}
        </div>
    )
}

export default ItemList
"use client"

import { useMemo } from "react"
import { ProductItem } from "./ProducItem"


type SearchResultProps = {
    results:Array<{
        id:number,
        price:number,
        title:string
    }>,
    onAddToFavorite: (id:number) => void
}

export default function SearchResults({results,onAddToFavorite}: SearchResultProps) {

    const totalPrice = useMemo(() =>{
        return results.reduce((prev,current) =>{
            return prev + current.price
    },0)

    },[results])

  return (
    <div>
        <h2>Total Price: {totalPrice}</h2>

        {
            results.map(product =>{
              return(
                <ProductItem product={product} key={product.id} onAddToFavorite={onAddToFavorite}/>
              )  
            })
        }
    </div>
  )
}

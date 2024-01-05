import {memo} from "react"

type ProductItemProps = {
        product:{
            id:number,
        price:number,
        title:string
        },
        onAddToFavorite: (id:number) => void
}

function ProductItemComponent({product, onAddToFavorite}:ProductItemProps) {
  return (
    <div>
        {product.title} - <strong>{product.price}</strong>
        <button onClick={() => onAddToFavorite(product.id)}>Add to favorite list</button>
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps,nextProps) =>{
  return Object.is(prevProps.product,nextProps.product)
})
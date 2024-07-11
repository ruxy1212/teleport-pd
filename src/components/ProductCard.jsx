import propTypes from 'prop-types'
import Cart from './icons/Cart'
import Rating from './Rating'
import ProdFavorite from './icons/ProdFavorite'

export default function ProductCard({product, likedProducts, handleLike, addToCart}){
    return (
        <div className="flex flex-col">
            <div className="flex flex-col px-6 py-4 w-full rounded-2xl shadow-lg border border-pd-white backdrop-blur-sm">
                <div className="flex flex-col justify-center items-end py-2.5">
                    <button style={{ color: likedProducts.includes(product.id) ? "red" : "black" }} onClick={() => handleLike(product)}><ProdFavorite/></button>
                </div>
                <div className="flex flex-col justify-center px-7 mt-2">
                    <img loading="lazy" src={"images/products/n"+product.id+".png"} className="w-full" />
                </div>
            </div>
            <div className="flex gap-5 px-5 mt-10 text-2xl font-extrabold text-pd-black">
                <h3 className="leading-8 pd-h3">{product.title}</h3>
                <h3 className="flex-1 my-auto pd-h3 text-right leading-[130%]">${product.price}</h3>
            </div>
            <p className="mt-6 leading-6 text-pd-black pd-p">{product.desc}</p>
            <div className="flex gap-2.5 self-start pr-5 mt-4">
                <div className="flex gap-0.5 my-auto">
                    <Rating amount={product.rating}/>
                </div>
                <div className="leading-7 text-black">
                    (<span className="pd-p">{product.feedbacks}</span>)
                </div>
            </div>
            <div>
                <button className="flex gap-2.5 justify-center px-9 py-4 mt-5 text-base font-medium leading-5 text-black border border-black border-solid rounded-[52px]"  onClick={() => addToCart(product)}>
                    <Cart />
                    <p>Add to Cart</p>
                </button> 
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    product: propTypes.object,
    likedProducts: propTypes.array,
    handleLike: propTypes.func,
    addToCart: propTypes.func
}
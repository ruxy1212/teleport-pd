import propTypes from 'prop-types'
import Cart from './icons/Cart'
import Rating from './Rating'

export default function FlashProduct({product, addToCart}){
    return(
        <div className="flex flex-col">
            <div className="flex flex-col px-8 py-4 w-full rounded-2xl shadow-lg border border-pd-white backdrop-blur-sm aspect-square leading-[120%]">
                <div className="relative flex flex-col justify-center mt-2">
                    <div className="flex justify-end">
                        <span className="flex justify-center items-center h-[60px] w-[135px] bg-[url('/images/callout.svg')] pd-p-18 font-bold relative bottom-[-23px] right-[-23px]">{product.discount}% Off</span>
                    </div>
                    <img loading="lazy" src={"images/products/n"+product.id+".png"} className="w-full" />
                    <div className="flex gap-3 self-center mt-4">
                        <h3 className="text-[26px] font-montserrat font-bold text-pd-blue">${product.price}</h3>
                        <div className="my-auto text-sm font-medium font-montserrat text-pd-mid-gray line-through">IDR 150.00</div>
                    </div>
                </div>
            </div>
            <div className="flex gap-5 px-5 mt-10 text-2xl font-extrabold text-pd-black">
                <h3 className="leading-8 pd-h3">{product.title}</h3>
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
                <button className="flex gap-2.5 justify-center px-9 py-4 mt-5 text-base font-medium leading-5 text-black border border-black border-solid rounded-[52px]" onClick={() => addToCart(product)}>
                    <Cart />
                    <p>Add to Cart</p>
                </button> 
            </div>
        </div>
    )
}

FlashProduct.propTypes = {
    addToCart: propTypes.func,
    product: propTypes.object
}
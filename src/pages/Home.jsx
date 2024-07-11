import { useState } from "react"
import WebLayout from "../layouts/WebLayout"
import hero from "../assets/img/hero.png"
import abs_image from "../assets/img/abs_image.png"
import hero_small from "../assets/img/hero_small.png"
import computer from "../assets/img/icons/computer.svg"
import accessory from "../assets/img/icons/accessory.svg"
import appliance from "../assets/img/icons/appliance.svg"
import camera from "../assets/img/icons/camera.svg"
import gaming from "../assets/img/icons/gaming.svg"
import mobile from "../assets/img/icons/mobile.svg"
import tv from "../assets/img/icons/tv.svg"
import ProdFavorite from "../components/icons/ProdFavorite"
import Cart from "../components/icons/Cart"
import Rating from "../components/Rating"
import ProdSwitch from "../components/icons/ProdSwitch"
import useLocalStorage from "../hooks/useLocalStorage";
import Popup from "../components/Popup"
import Category from "../components/Category"
import ProductCard from "../components/ProductCard"

export default function Home() {
    const p_categories = [
        [computer, "Computer & Laptop"],
        [mobile, "Mobile & Phone"],
        [camera, "Camera"],
        [tv, "TV & Smart Box"],
        [appliance, "Home Appliance"],
        [accessory, "Accessories"],
        [gaming, "Others"]
    ];

    const new_products = [
        {id:1, img:'Image.png', title:'Iphone 14 Plus', price:'225.00', desc:'Latest smartphones with top-tier cameras, fast processors, and sleek designs.', rating:5, feedbacks:'125', discount: '0'},
        {id:2, img:'Image2.png', title:'Samsung Galaxy Flip 3', price:'225.00', desc:'Latest smartphones with top-tier cameras, fast processors, and sleek designs.', rating:5, feedbacks:'125', discount: '0'},
        {id:3, img:'Image2.png', title:'Samsung Galaxy Flip 5', price:'225.00', desc:'Latest smartphones with top-tier cameras, fast processors, and sleek designs.', rating:5, feedbacks:'125', discount: '0'},
        {id:4, img:'Image2.png', title:'Ipad Mini 6', price:'225.00', desc:'Latest smartphones with top-tier cameras, fast processors, and sleek designs.', rating:5, feedbacks:'125', discount: '0'},
        {id:5, img:'Image2.png', title:'Iphone 12 Pro', price:'225.00', desc:'Latest smartphones with top-tier cameras, fast processors, and sleek designs.', rating:5, feedbacks:'125', discount: '0'},
        {id:6, img:'Image2.png', title:'Iphone XR', price:'225.00', desc:'Latest smartphones with top-tier cameras, fast processors, and sleek designs.', rating:5, feedbacks:'125', discount: '0'},
        {id:7, img:'Image2.png', title:'Iphone 8 Plus', price:'225.00', desc:'Latest smartphones with top-tier cameras, fast processors, and sleek designs.', rating:5, feedbacks:'125', discount: '0'},
        {id:8, img:'Image2.png', title:'Iphone 13 Series', price:'225.00', desc:'Latest smartphones with top-tier cameras, fast processors, and sleek designs.', rating:5, feedbacks:'125', discount: '0'},
        {id:9, img:'Image2.png', title:'Samsung Galaxy Tab S8', price:'225.00', desc:'Latest smartphones with top-tier cameras, fast processors, and sleek designs.', rating:5, feedbacks:'125', discount: '0'},
    ];

    const flash_products = [
        {id:10, img:'Image2.png', title:'Ipad Mini 6', price:'89.000', desc:'Powerful iPads with stunning displays and seamless performance', rating:5, feedbacks:'125', discount: '8'},
        {id:11, img:'Image2.png', title:'Ipad M1 Air', price:'89.000', desc:'Powerful iPads with stunning displays and seamless performance', rating:5, feedbacks:'125', discount: '8'},
        {id:12, img:'Image2.png', title:'Ipad Mini 10th Gen', price:'89.000', desc:'Powerful iPads with stunning displays and seamless performance', rating:5, feedbacks:'125', discount: '8'}
    ];

    const [message, setMessage] = useState(null);
    const [likedProducts, setLikedProducts] = useLocalStorage("likedProducts", []);
    const [cartItems, setCartItems] = useLocalStorage("cartItems", []);
    const [onPageOne, setOnPageOne] = useState(true);
    const [reversed, setReversed] = useState(false);
    const [product_items, setProductItems] = useState(new_products);
    const reverseProducts = () => {
        if (!reversed) {
            setProductItems([...product_items].reverse());
            setReversed(true);
        }
        setOnPageOne(false);
    };
    const reReverseProducts = () => {
        if(reversed){
            setProductItems([...product_items].reverse());
            setReversed(false)
        }
        setOnPageOne(true);
    };

    const handleLike = (product) => {
        setLikedProducts((prev) => {
        if (prev.includes(product.id)) {
            showPopup(`Removed from favorites`);
            return prev.filter((id) => id !== product.id);
        } else {
            showPopup(`Added to favorites`);
            return [...prev, product.id];
        }
        });
    };

    const addToCart = (product) => {
        setCartItems((prev) => {
        const existingItem = prev.find((item) => item.id === product.id);
        if (existingItem) {
            showPopup(`Item is already in cart`);
            return prev.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
        } else {
            showPopup(`Item added to cart`);
            return [...prev, { ...product, quantity: 1 }];
        }
        });
    };

    const showPopup = (message) => {
        setMessage(message);
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      };

    return(
        <WebLayout cartItems={cartItems.length}>
            <section className="bg-pd-gray">
                <div className="max-w-[1200px] mx-auto px-4 md:px-6 xl:px-0 flex justify-center gap-16 self-stretch">
                    <div className="flex gap-16 justify-end md:gap-5 max-md:flex-col">
                        <div className="flex flex-col w-[48%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col self-stretch pt-4 my-auto max-md:mt-10 max-md:max-w-full">
                                <h1 className="pd-h1 mr-6 tracking-tighter leading-[80px] text-pd-black max-md:mr-2.5 max-md:max-w-full max-md:leading-[55px]">
                                    <span className="relative z-10">Grab </span><span className="relative top-[-.96px] inline-block rounded-3xl px-8 bg-pd-red text-pd-white -ms-5 sm:-ms-7 me-1 hero-badge-text" style={{transform: 'rotate(-2deg)'}}>50%</span> <br/>Off Smartphone Collection</h1>
                                <p className="pd-p-18 mt-4 md:mt-6 text-lg leading-7 text-pd-black w-72">Shop the latest models from top brands at unbeatable prices.{" "}</p>
                                <div className="mt-6 md:mt-8 max-md:max-w-full">
                                    <div className="flex gap-5 items-center">
                                        <div className="flex flex-col w-[23%] max-md:ml-0 max-md:w-auto">
                                            <img loading="lazy" src={hero_small} className="shrink-0 w-28 max-w-full aspect-square max-md:mt-7"/>
                                        </div>
                                        <h3 className="text-pd-black font-prompt pd-h3 font-semibold">iPhone 14 Edition</h3>
                                        <div className="flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full hidden md:flex">
                                            <div className="self-stretch my-auto text-3xl font-semibold leading-10  max-md:mt-10"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full pb-10">
                            <div className="">
                                <img loading="lazy" src={abs_image} className="z-10 absolute bottom-16 right-4 md:-left-20 lg:-left-28 shrink-0 w-[189px]"/>
                            </div>
                            <img loading="lazy" src={hero} className="grow w-full max-w-[350px] mx-auto md:mx-0"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-28 lg:mt-36">
                <div className="max-w-[1200px] mx-auto px-4 md:px-6 xl:px-0">
                    <div>
                        <h1 className="text-pd-black pd-h1 text-left md:text-center">What <span className="text-pd-red">we</span> provide?</h1>
                    </div>
                    <div className="flex justify-between items-center mt-12 leading-6 text-center text-pd-black flex-wrap">
                        {
                            p_categories.map(category => (
                                <Category key={category[1]} elem={category} />
                            ))
                        }
                    </div>
                </div>
            </section>
            <main className="mb-24">
                <section className="mt-28 lg:mt-36">
                    <div className="flex justify-center items-center self-stretch max-w-[1200px] mx-auto px-4 md:px-6 xl:px-0 mb-10">
                        <div className="flex gap-5 justify-between w-full">
                            <div>
                                <h2 className="pd-h2 text-pd-black">New <span className="text-pd-red">arrival</span> for you</h2>
                            </div>
                            <div className="flex gap-5 justify-between my-auto">
                                <button onClick={reReverseProducts}><ProdSwitch style={{fill: onPageOne?'none':'#AFE638', stroke: onPageOne?'black':'none'}} /></button>
                                <button onClick={reverseProducts}><ProdSwitch style={{fill: !onPageOne?'none':'#AFE638', stroke: !onPageOne?'black':'none'}} /></button>
                            </div>
                        </div>
                    </div> 
                    <div className="max-w-[1200px] mx-auto px-4 md:px-6 xl:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {
                            product_items.map(product => (
                                <ProductCard key={product.id} product={product} likedProducts={likedProducts} handleLike={handleLike} addToCart={addToCart} />
                            ))
                        }
                    </div>
                </section>
                <section className="mt-28 lg:mt-36">
                    <div className="flex justify-center items-center self-stretch max-w-[1200px] mx-auto px-4 md:px-6 xl:px-0 mb-10">
                        <div className="flex gap-5 justify-start w-full">
                            <div>
                                <h2 className="pd-h2 text-pd-black">Flash sale for <span className="text-pd-red">best</span> sellers</h2>
                            </div>
                        </div>
                    </div> 
                    <div className="max-w-[1200px] mx-auto px-4 md:px-6 xl:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {
                            flash_products.map(product => (
                                <div key={product.id} className="flex flex-col">
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
                            ))
                        }
                    </div>
                </section>
            </main>
            {message && <Popup message={message} duration={5000} onClose={() => setMessage(null)} />}
        </WebLayout>
    )
}
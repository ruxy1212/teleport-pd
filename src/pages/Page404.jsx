import rafiki from "../assets/img/rafiki.png";

export default function Page404(){
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="flex flex-col gap-8 items-center">
                <img src={rafiki} alt="Maintenance" />
                <p className="pd-p-18 text-pd-black">This page is under maintenance</p>
            </div>
        </div>
    )
}
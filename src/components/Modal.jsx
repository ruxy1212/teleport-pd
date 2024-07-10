import propTypes from 'prop-types'
import Close from "../assets/img/icons/Close.svg";

export default function Modal({children, open, setOpen}){
    return (
        <div className={`${open?'flex':'hidden'} fixed top-0 left-0 w-screen h-screen z-[90] bg-pd-black/60 justify-center items-center`}>
            <div className="max-h-[90vh] overflow-y-scroll shadow-lg bg-pd-white rounded-xl">
                <div className="p-8 bg-white border border-black border-solid leading-[150%] max-w-[380px]">
                    <div className="flex justify-end">
                        <button onClick={()=>setOpen(false)}>
                            <img loading="lazy" src={Close} className="self-end aspect-square"/>
                        </button>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    )
}

Modal.propTypes = {
    children: propTypes.node,
    open: propTypes.bool,
    setOpen: propTypes.func
}
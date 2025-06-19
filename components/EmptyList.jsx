import React from 'react'
import EmptyImg from "../public/assets/images/empty.gif"
import Image from 'next/image'

const EmptyList = () => {
    return (
        <div>
            <div className='emptyList-wrap'>
                <Image className='Image-general' src={EmptyImg} alt='empty' /><br/>
            </div>
            <h2 style={{textAlign: "center", color:"red", margin:"auto"}}>Not Found!</h2>
        </div>
    )
}

export default EmptyList

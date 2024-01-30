import { React } from 'react';
import '../../styles/global.css'

const BlogPost = ({ image, alt, title, description}) => {
    return (
        <>
            <div className='border-4 mx-6 mt-16 border-black bg-cyan-500 font-mono font-semibold grid grid-cols-6 gap-4'>
                <div className='m-4 col-start-1 col-end-3'>
                    <img src={image} alt={alt} />
                </div>
                <div className='m-4 col-start-3 col-end-7'>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                
            </div>
        </>
    )
}

export { BlogPost }
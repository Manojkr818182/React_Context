import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

const Loader1 = () => {
    return (
        <div className='d-flex justify-content-center align-item-center'>
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#0F72F0"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    )
}

export default Loader1
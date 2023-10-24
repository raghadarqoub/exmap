import React from 'react'

function Product(props) {
    return (
    <>
    
    <div className='col-md-4'>
        <div className='product'>
            <h2>{props.name}</h2>
            <h3>{props.age}</h3>
        </div>
    </div>
    </>
    )
}

export default Product
import React from 'react'
import Product from './product/Product'
export default function Products() {
    const products = [
        {id:1,name:'Raghad',age:'Age : 22'},
        {id:2,name:'nisreen',age:'Age : 21'},
        {id:3,name:'waed',age:'Age : 20'},
    ];
    return (
        <>
        <div className='container'>
        <div className='row'>
        {products.map((product)=>{
            return <Product {...product} key={product.id}/>
        }
        )
        }
        </div>
        </div>
        </>
    )
}

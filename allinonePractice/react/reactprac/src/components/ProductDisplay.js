import React from 'react';
import './product.css'

const product=(props)=>{
    const renderProduct = props.prodData.map((items)=>{
        return(
                <div className="col-lg-3  col-sm-12 mt-4">
                    <div className="card mb-3">
                    <img src={items.image} className="card-img-top img-fluid" alt={items.name}></img>
                    <div className="card-body">
                        <h6 className="card-title "><strong>{items.name}</strong></h6>
                        <p className="card-text">{items.description}</p>
                        <h6>Price: &#8377;<b>{items.cost}</b></h6>
                        <h6>Discount: <b>{items.discount}</b></h6>
                        <a href="#" class="btn btn-success btn-sm mt-2">Buy</a>
                    </div>
                    </div>
                </div>  
        )
    })


    return(
        <div className="container">
            <div className="row">
                {renderProduct}
            </div>
        </div>
    )
}

export default product
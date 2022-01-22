import React from 'react'
import {Link} from 'react-router-dom'
const QuickDisplay = (props) => {

    const renderMeals=({quickData})=>{
        if(quickData){
            return quickData.map((item)=>{
                return(
                        <div className="col-lg-3  col-sm-12  mt-5  ">
                            {/* <Link to="/" key={item.mealtype_id}> */}
                                <div className="card">
                                    <div className="img-cover">
                                    <img src={item.meal_image} className="card-img-top ctop" alt={item.mealtype}/>  
                                    </div>
                                    
                                    <div className="card-body">
                                        <h5 className="card-title text-center">{item.mealtype}</h5>
                                        <p className="card-text">{item.content}</p>
                                        
                                        <Link to={`/list/${item.mealtype_id}`}  key={item.mealtype_id} className="btn btn-success orderbtn mt-3">
                                            <i className="fa fa-shopping-cart me-3" aria-hidden="true"></i>Order now
                                        </Link>
                                    </div>
                                </div>
                            {/* </Link>     */}
                        </div>
                )
            })
        }
        
    }



    return (
        <>
            {renderMeals(props)}
        </>
    )
}

export default QuickDisplay
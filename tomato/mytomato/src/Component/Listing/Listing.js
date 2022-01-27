import React, { Component } from 'react'
import ListingDetails from './ListingDetails'
import './Listing.css'
import axios from 'axios'
import CuisineFilter from '../Filter/cuisineFilter'
import CostFilter from '../Filter/costFilter'
import SortFilter from '../Filter/sortFilter'


const url="https://kashkart.herokuapp.com/filter"

class Listing extends Component {
    constructor(props){
        super(props)
        this.state={
            "restId":""
        }

    }

    setPerFilter=(data)=>{
        this.setState({restId:data})
    }
    render() {
        return (
            <>
                <div className="listing-container">
                    <div className="listing-cover">
                        <div className="list-eaterytag">
                            <span>Breakfast Places in Manali</span>
                        </div>
                        <div className="left-list">
                            <div className="filter-sort  text-center">
                                Filter / Sort <hr/>
                                <CuisineFilter mealId={this.props.match.params.id} restPerCuisine={(data)=>{this.setPerFilter(data)}}/>
                                <CostFilter restPerCost={(data)=>{this.setPerFilter(data)}}/>
                                <SortFilter restPerSort={(data)=>{this.setPerFilter(data)}}/>

                            </div>
                        </div>
                        <div className="right-list">
                            <ListingDetails   restData={this.state.restId}/>
                        </div>

                    </div>
                </div>

            </>
        )
    }
    componentDidMount(){
        const mealId = this.props.match.params.id;
        sessionStorage.setItem('mealId',mealId)
        axios.get(`${url}/${mealId}`)
        .then((res) =>{
            this.setState({restId:res.data})
        } )
    }

}



export default Listing
import React, { Component } from 'react';

// const menuUrl = "https://kashkart.herokuapp.com/menuItem";
// const placeOrder = "https://kashkart.herokuapp.com/placeOrder"

class PlaceOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:Math.floor(Math.random()*100000),
            hotel_name:this.props.match.params.restName,
            name:'',
            phone:'',
            email:'',
            cost:0,
            address:'',
            meniIds:''
        }
    }

    handleChange =(event)=>{

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">Place Orders</div>
                            <div className="card-body">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form-control">
                                                <label>Name</label>
                                                <input className="form-control" name="name" value={this.state.name} onChange={this.handleChange}/>
                                            </div>
                                        </div>

                                        <div className="col-6">
                                            <div className="form-control">
                                                <label>Email</label>
                                                <input className="form-control" name="email" value={this.state.email} onChange={this.handleChange}/>
                                            </div>
                                        </div>

                                        <div className="col-6">
                                            <div className="form-control">
                                                <label>Phone</label>
                                                <input className="form-control" name="phone" value={this.state.phone} onChange={this.handleChange}/>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-control">
                                                <label>Address</label>
                                                <input className="form-control" name="address" value={this.state.address} onChange={this.handleChange}/>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PlaceOrder;
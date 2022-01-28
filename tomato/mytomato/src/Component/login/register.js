import React, { Component } from 'react';
import Header from '../Header';
// import './placeOrder.css'
// const registerUrl = "http://localhost:5000/api/auth/register";
const registerUrl = "https://developerjwt.herokuapp.com/api/auth/register";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            name:'Your Name',
            phone:'00000000000',
            email:'example@example.com',
            password:''
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit =(event) => {
        fetch(registerUrl,{
            method: "POST",
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(this.props.history.push('/login'))

    }


    render() {
        return (
            <>
                <Header/>
           
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header bg-primary text-white">Registrtaion</div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="form-control">
                                            <label>Name</label>
                                            <input className="form-control" name="name" value={this.state.name} onChange={this.handleChange} />
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="form-control">
                                            <label>Email</label>
                                            <input className="form-control" name="email" value={this.state.email} onChange={this.handleChange} />
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="form-control">
                                            <label>Phone</label>
                                            <input className="form-control" name="phone" value={this.state.phone} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-control">
                                            <label>Password</label>
                                            <input className="form-control" name="password" value={this.state.password} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                
                                    <button className="btn btn-success" onClick={this.handleSubmit}>
                                        Register
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }

    componentDidMount() {
        
    }
}

export default Register;
import React,{Fragment,Component} from 'react';
import Header from './Header'
import Footer from './Footer'
import JSON from './db.json'
import ProductDisplay from './ProductDisplay'


class Home extends Component {
    constructor(){
        super();
        this.state={
                productdata: JSON,
                filtered:JSON
        }
    }

    filteredProduct=(userText)=>{
        const output= this.state.productdata.filter((data)=>{
            return data.name.toLowerCase().indexOf(userText.toLowerCase())>-1
        }) 

        this.setState({filtered: output})
    }

    render() {
        return(
            <Fragment>
                <Header  userInput={(data)=>{this.filteredProduct(data)}}/>
                    <ProductDisplay  prodData={this.state.filtered}/>    
                <Footer  year="2022" month="January"/>
            </Fragment>
        )
    }
}

/*const Home=()=>{
    return(
        <Fragment>
            <Header/>
            <div class="col-lg-8 m-auto bg-light p-4 text-center grey-home" style={{height:"380px"}}>
                <h1 class="text-center text-dark">This is react app</h1>
                <h5 class="text-center text-dark">working on it @ waseem farooq</h5>
            </div>     
            <Footer  year="2022" month="January"/>
        </Fragment>
    )
}*/

export default Home
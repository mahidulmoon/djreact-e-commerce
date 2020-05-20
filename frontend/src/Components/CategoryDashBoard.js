import React, { Component } from 'react';
import { Redirect,Link } from 'react-router-dom';
import axios from 'axios';

class CategoryDashBoard extends Component {

    state = {
        allproducts:[],
        isObject: false,
        cartitems:[],
    }
    componentDidMount(){
        if(this.props.location.passlink){
            this.setState({ isObject: true });
            this.getproducts();
        }else{
            alert("Go back to home");
            //return <Redirect to='/' />
        }
        if(localStorage.getItem('cartitems')){
            this.setState({ cartitems: JSON.parse(localStorage.getItem('cartitems')) });
        }
    }
    // addtochart = (e,productname) =>{
    //     //e.preventDefault();
    //     this.setState(state =>{
    //         const cartitems = this.state.cartitems;
    //         let productisalreadyincart = false;
    //         cartitems.push( productname );
    //         localStorage.setItem("cartitems",cartitems);
    //     })
    //     //console.log("click");
    // }
    addtochart = (e,product) =>{
        //e.preventDefault();
        this.setState(state =>{
            const cartitems = this.state.cartitems;
            let productisalreadyincart = false;
            cartitems.forEach(item =>{
                if(item.id === product.id){
                    productisalreadyincart = true;
                    item.count++;
                }
            });
            if(!productisalreadyincart){
                cartitems.push({...product,count:1});
            }
            localStorage.setItem("cartitems",JSON.stringify(cartitems));
        })
        //console.log("click");
    }

    getproducts= () =>{
        axios.get(this.props.location.passlink.link).then(response => this.setState({ allproducts:response.data }))
    }
    render() {
        // if(this.state.isObject === false){
        //     return <Redirect to='/' />
        // }
        return (
            <div>
                { this.state.isObject && <div><h1>{this.props.location.passlink.name}</h1>
                { this.state.allproducts.map(product =>(<div className="catagorybox"> <div className="categorydiv">
                            <p>{product.name}</p>
                            <Link to={{ pathname: '/productdetails', passlink:{ id:product.id,link:this.props.location.passlink.link,name:this.props.location.passlink.name } }}><img src={product.imagefield} /></Link>
                            <p>Available: {product.quantity}</p>
                            <p>Price: {product.price}</p>
                            <button className="button" onClick={e => this.addtochart(e, product)}>Add to cart</button>
                            
                        </div></div>))  }</div> }
                
            </div>
        )
    }
}

export default CategoryDashBoard

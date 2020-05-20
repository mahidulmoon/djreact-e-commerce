import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ProductDetails extends Component {
    state={
        product:[],
    }
    componentDidMount(){
        axios.get(`${this.props.location.passlink.link}${this.props.location.passlink.id}`).then(response => this.setState({ product:response.data }))
    }
   
    render() {
        return (
            <div>
                <h1>Product Details</h1>
                <table>
                    <tr>
                        <td><img src={this.state.product.imagefield} /></td>
                        <td></td>
                        <td><h2>Name:{this.state.product.name}</h2><br/>
                        <h4>Price: {this.state.product.price}</h4><br/>
                        <h5>Quantity: {this.state.product.quantity}</h5>
                        <h5>Product description: {this.state.product.description}</h5>
                        <Link to={{ pathname: '/categorydashboard', passlink:{ name:this.props.location.passlink.name, link:this.props.location.passlink.link } }}><button className="button">Back</button></Link><br/><br/>
                        <Link ><button className="addtocartbutton">Add to Cart</button></Link>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default ProductDetails;

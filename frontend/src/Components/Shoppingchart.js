import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
class Shoppingchart extends Component {
    state ={
        cartitems:[],
        order:{
            name:'',phnno:'',email:'',cityname:'',areaname:'',address:'',item:[]
        },
        ar:[]
    }
    componentDidMount(){
        if(localStorage.getItem('cartitems')){
            //localStorage.removeItem('cartitems');
            this.setState({ cartitems: JSON.parse(localStorage.getItem('cartitems')) });
            // const cred = localStorage.getItem('cartitems');
            // this.setState({ cartitems: cred });
        }
    }
    addone(index) {
        const cartitems = this.state.cartitems;
      
        cartitems[index].count++;
        this.setState({ cartitems });
        localStorage.setItem("cartitems",JSON.stringify(this.state.cartitems));
      }
      deleteone(index) {
        const cartitems = this.state.cartitems;
      
        cartitems[index].count--;
        this.setState({ cartitems });
        localStorage.setItem("cartitems",JSON.stringify(this.state.cartitems));
      }
    removeItem(index) {
        const cartitems = this.state.cartitems;
      
        cartitems.splice(index, 1);
        this.setState({ cartitems });
        localStorage.setItem("cartitems",JSON.stringify(this.state.cartitems));
      }
    inputchange= e =>{
        const cred = this.state.order;
        cred[ e.target.name ] = e.target.value;
        //cred[ "item" ]=JSON.stringify(this.state.cartitems);
        this.setState({ order:cred });
    }
    submitpress= e =>{
        //e.preventDefault();
        const orderitem = this.state.order.item;
        //orderitem.push(this.state.cartitems);
        this.state.cartitems.map( item =>(
            orderitem.push(item.name,item.count)
        ));
        // var order = {...this.state.order}
        // order.item = this.state.ar.toString();
        // this.setState({order})
        axios.post('http://127.0.0.1:8000/order/orderlist/',this.state.order).then( reponse => alert("Success") ).catch(error => alert("error"+error))
        console.log(this.state.order);
    }
    render() {
        return (
            <div>
            <div className="shopping-cart">
            
            <div className="title">
                Shopping Bag
            </div>
            {this.state.cartitems.length === 0 && <div><center><h1>Nothing in the Cart</h1></center></div>}
            {this.state.cartitems.map((item,i) =>(
                <div className="item">
                <div className="buttons">
                <span className="delete-btn"></span>
                <span className="like-btn"></span>
                </div>
            
                <div className="image">
                <img src="item-3.png" alt="" />
                </div>
            
                <div className="description">
                <span>Product ID: {item.id}</span>
                <span>Product Name: {item.name}</span>
                <span>Brown</span>
                </div>
            
                <div className="quantity">
                <button onClick={() => this.deleteone(i) } className="plus-btn" type="button" name="button">
                    -
                </button>
                <button className="minus-btn" type="button" name="button">
                    {item.count}
                </button>
                <button onClick={() => this.addone(i) } className="minus-btn" type="button" name="button">
                    +
                </button>
                </div>
            
                <div className="total-price">{item.price * item.count}</div>
                <button onClick={() => this.removeItem(i) } type="button" name="button">
                    Remove
                </button>
            </div>
            ))}
            </div>
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    
                    
                    <h2 className="active">User Contact</h2>

                    
                    <form>
                    <input type="text" id="login" className="fadeIn second" name="name" value={this.state.order.name} onChange={this.inputchange}  placeholder="Your Name" />
                    <input type="text" id="password" className="fadeIn third" name="phnno" value={this.state.order.phnno} onChange={this.inputchange} placeholder="Contact Number" />
                    <input type="text" id="login" className="fadeIn second" name="email" value={this.state.order.email} onChange={this.inputchange} placeholder="email" />
                    <input type="text" id="password" className="fadeIn third" name="cityname" value={this.state.order.cityname} onChange={this.inputchange} placeholder="Name of CIty" />
                    <input type="text" id="password" className="fadeIn third" name="areaname" value={this.state.order.areaname} onChange={this.inputchange} placeholder="Name of Are" />
                    <textarea placeholder="Address" name="address" value={this.state.order.address} onChange={this.inputchange} className="fadeIn third"></textarea>
                    <input type="submit" className="fadeIn fourth" onClick={this.submitpress}  value="Register" />
                    </form>

                    
                    

                </div>
            </div>

        </div>
        );
    }
}

export default Shoppingchart;
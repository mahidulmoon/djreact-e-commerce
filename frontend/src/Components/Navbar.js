import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state ={
        isLogin: false ,
        token: [],
        cartitems:[],
    }
    componentDidMount(){
        if(localStorage.getItem('token')){
            this.setState({ isLogin:true })
        }
        if(localStorage.getItem('cartitems')){
            //localStorage.removeItem('cartitems');
            this.setState({ cartitems: JSON.parse(localStorage.getItem('cartitems')) });
            // const cred = localStorage.getItem('cartitems');
            // this.setState({ cartitems: cred });
        }
    }
    deletetoken(){
        localStorage.removeItem('token');
    }
    render() {
        return (
            <div id='cssmenu'>
            <ul>
                <li><a href='/'><span>Home</span></a></li>
                <li><a href=''><span>Products</span></a></li>
                <li><a href=''><span>Company</span></a></li>
                <li><a href=''><span>Contact</span></a></li>
                <li><a href='/register'><span>Register</span></a></li>
                {this.state.isLogin === false && <li><a href='/login'><span>LogIn</span></a></li>}
                {this.state.isLogin && <li onClick={this.deletetoken}><a href=''><span>LogOut</span></a></li>}
                <div class="dropdown">
                    <li><a><span>Chart</span></a></li>
                    <div class="dropdown-content">
                    {/* <p>{this.state.cartitems}</p><button>Go to Cart</button> */}
                    {this.state.cartitems.map(item =>(
                        <p>Name:{item.name}  Quantity:{item.count}</p>
                    ))}
                    {this.state.isLogin && <a href="/shoppingcart"><button>Go to Cart</button></a>}
                    {this.state.isLogin === false && <a href="/login"><button>Go to Cart</button></a>}
                    </div>
                </div>
                
            </ul>
            </div>
            
        )
    }
}
export default Navbar;
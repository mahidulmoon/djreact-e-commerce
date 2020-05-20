import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
class Homepage extends Component {
    state = {
        allcategory: [],
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/category/category/').then(response => this.setState({ allcategory:response.data }));
        console.log(this.state);
    }
    render() {
        return (
            <div >
                <h1>Categories</h1>
                {this.state.allcategory.map(category =>(
                            <Link to={{ pathname: '/categorydashboard', passlink:{ name:category.name, link:category.url } }}><div className="categorydiv">
                            <p>{category.name}</p>
                            <img src={category.image_field} />
                            
                        </div></Link>

                ))}
            </div>
        )
    }
}

export default Homepage;
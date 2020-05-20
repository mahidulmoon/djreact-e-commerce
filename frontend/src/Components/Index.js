import React,{Component} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Homepage from './Homepage';
import Body from './Body';
import CategoryDashBoard from './CategoryDashBoard';
import ProductDetails from './ProductDetails';
import Login from './Login';
import Register from './Register';
import Shoppingcart from './Shoppingchart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
class Index extends Component{
    render(){
        return(
            <React.Fragment>
                <Navbar />
                <Router>
                    <Body>
                        <Switch>
                            <Route path='/' exact component={Homepage} />
                            <Route path='/categorydashboard' exact component={CategoryDashBoard} />
                            <Route path='/productdetails' exact component={ProductDetails} />
                            <Route path='/login' exact component={Login} />
                            <Route path='/register' exact component={Register} />
                            <Route path='/shoppingcart' exact component={Shoppingcart} />
                        </Switch>
                    </Body>
                </Router>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;
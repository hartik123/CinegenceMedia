import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeNavbar from '../component/HomeNavbar';
import About from './About';
import Services from './Services';
import Reels from './Reels';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import OwnerInformation from './OwnerInformation';
import Contact from './Contact';

const Home = () => {
    return (
        <div id="home">
            <HomeNavbar />
            <Switch>
                <Route exact path="/" component={About} />
                <Route exact path="/services" component={Services} />
                <Route exact path="/reels" component={Reels} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/ownerinformation" component={OwnerInformation} />
            </Switch>
        </div>
    )
}

export default Home;




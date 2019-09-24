import React from 'react';
import {Switch, Route} from 'react-router-dom';
import About from './about';
import Contact from './contact';
import MainMenu from './mainMenu';
import Landing from './landing';

import Ameri from './ameri';
import Appa from './appa';
import Bar from './bar';
import Bev from './bev';
import Break from './break';
import Burritos from './burritos';
import Combos from './combos';
import Dess from './dess';
import Pollo from './pollo';
import Salad from './salad';
import Seafood from './seafood';
import Sides from './sides';
import Soup from './soup';
import Toast from './toast';













const Main = () => (
    <Switch>
<Route exact path = '/' component = {Landing}/>
<Route  path = '/about' component = {About}/>
<Route  path = '/mainMenu' component = {MainMenu}/>
<Route  path = '/contact' component = {Contact}/>

<Route  path = '/ameri' component = {Ameri}/>
<Route  path = '/appa' component = {Appa}/>
<Route  path = '/bar' component = {Bar}/>
<Route  path = '/bev' component = {Bev}/>
<Route  path = '/break' component = {Break}/>
<Route  path = '/burritos' component = {Burritos}/>
<Route  path = '/combos' component = {Combos}/>
<Route  path = '/dess' component = {Dess}/>
<Route  path = '/pollo' component = {Pollo}/>
<Route  path = '/salad' component = {Salad}/>
<Route  path = '/seafood' component = {Seafood}/>
<Route  path = '/sides' component = {Sides}/>
<Route  path = '/soup' component = {Soup}/>
<Route  path = '/toast' component = {Toast}/>

    </Switch>
)

export default Main;
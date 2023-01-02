console.log(`Debugging. Remove this when producing.`);

import './style.css';
import Tabs from './tabs';
import {
    restaurantExposition,
    restaurantSchedule,
    homeTabContainer
} from './home';
import {
    menuLister,
    dishes1,
    dishes2,
    beverages1,
    beverages2,
    menuTabContainer
} from './menu';


const body = document.body;

const tabs = Tabs();
const home = homeTabContainer();
const menu = menuTabContainer();


body.appendChild(tabs);
body.appendChild(home);
body.appendChild(menu);
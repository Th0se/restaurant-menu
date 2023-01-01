console.log(`Debugging. Remove this when producing.`);

import './style.css';
import Tabs from './tabs';
import {restaurantExposition, restaurantSchedule, homeTabContainer} from './home';


const body = document.body;

const tabs = Tabs();
const home = homeTabContainer();


body.appendChild(tabs);
body.appendChild(home);
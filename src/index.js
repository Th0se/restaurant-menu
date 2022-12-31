console.log(`Debugging. Remove this when producing.`);

import './style.css';
import Tabs from './tabs';

const body = document.body;

const tabs = Tabs();


body.appendChild(tabs);
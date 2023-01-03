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
import {
    email,
    phone,
    phoneNumber,
    emailAddress,
    contactTabContainer
} from './contact';


const body = document.body;
const tabs = Tabs();
const home = homeTabContainer();
const menu = menuTabContainer();
const contact = contactTabContainer();

const contentContainer = document.createElement(`div`);
contentContainer.setAttribute(`id`, `contentContainer`);
contentContainer.appendChild(home);

body.appendChild(tabs);
body.appendChild(contentContainer);



tabHome.addEventListener(`click`, () => {
    const contact = document.querySelector(`#contactTabContainer`);
    const menu = document.querySelector(`#menuTabContainer`);


    if (menu) {
        contentContainer.removeChild(menu);
    };
    if (contact) {
        contentContainer.removeChild(contact);
    };
    contentContainer.appendChild(home);
    tabContacts.classList.remove(`activeTabHeader`);
    tabMenu.classList.remove(`activeTabHeader`);
    tabHome.classList.add(`activeTabHeader`);
});

tabMenu.addEventListener(`click`, () => {
    const contact = document.querySelector(`#contactTabContainer`);
    const home = document.querySelector(`#homeTabContainer`);


    if (contact) {
        contentContainer.removeChild(contact);
    };
    if (home) {
        contentContainer.removeChild(home);
    };
    contentContainer.appendChild(menu);
    tabContacts.classList.remove(`activeTabHeader`);
    tabHome.classList.remove(`activeTabHeader`);
    tabMenu.classList.add(`activeTabHeader`);
});

tabContacts.addEventListener(`click`, () => {
    const home = document.querySelector(`#homeTabContainer`);
    const menu = document.querySelector(`#menuTabContainer`);


    if (home) {
        contentContainer.removeChild(home);
    };
    if (menu) {
        contentContainer.removeChild(menu);
    };
    contentContainer.appendChild(contact);
    tabHome.classList.remove(`activeTabHeader`);
    tabMenu.classList.remove(`activeTabHeader`);
    tabContacts.classList.add(`activeTabHeader`);
});
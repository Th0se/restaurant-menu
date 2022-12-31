console.log(`Debugging. Remove this when producing.`);

import './style.css';

const body = document.body;

const tabs = () => {
    const container = document.createElement(`div`);
    container.setAttribute(`id`, `tabContainer`);

    const tabHome = document.createElement(`div`);
    tabHome.setAttribute(`id`, `tabHome`);
    tabHome.classList.add(`tabItem`);
    container.appendChild(tabHome);

    const tabMenu = document.createElement(`div`);
    tabMenu.setAttribute(`id`, `tabMenu`);
    tabMenu.classList.add(`tabItem`);
    container.appendChild(tabMenu);

    const tabContacts = document.createElement(`div`);
    tabContacts.setAttribute(`id`, `tabContacts`);
    tabContacts.classList.add(`tabItem`);
    container.appendChild(tabContacts);
    

    return container;
}


body.appendChild(tabs());
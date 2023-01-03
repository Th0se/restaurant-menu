export default function Tabs() {
    const container = document.createElement(`div`);
    container.setAttribute(`id`, `tabContainer`);

    const tabHome = document.createElement(`div`);
    tabHome.setAttribute(`id`, `tabHome`);
    tabHome.classList.add(`tabItem`);
    tabHome.classList.add(`activeTabHeader`);
    tabHome.textContent = `Home`;
    container.appendChild(tabHome);

    const tabMenu = document.createElement(`div`);
    tabMenu.setAttribute(`id`, `tabMenu`);
    tabMenu.classList.add(`tabItem`);
    tabMenu.textContent = `Menu`;
    container.appendChild(tabMenu);

    const tabContacts = document.createElement(`div`);
    tabContacts.setAttribute(`id`, `tabContacts`);
    tabContacts.classList.add(`tabItem`);
    tabContacts.textContent = `Contact us`;
    container.appendChild(tabContacts);
    

    return container;
};

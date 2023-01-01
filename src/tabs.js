export default function Tabs() {
    const container = document.createElement(`div`);
    container.setAttribute(`id`, `tabContainer`);

    const tabHome = document.createElement(`div`);
    tabHome.setAttribute(`id`, `tabHome`);
    tabHome.classList.add(`tabItem`);
    tabHome.classList.add(`activeTab`);
    tabHome.textContent = `Home`;
    tabHome.addEventListener(`click`, () => {
        tabContacts.classList.remove(`activeTab`);
        tabMenu.classList.remove(`activeTab`);
        tabHome.classList.add(`activeTab`);
    });
    container.appendChild(tabHome);

    const tabMenu = document.createElement(`div`);
    tabMenu.setAttribute(`id`, `tabMenu`);
    tabMenu.classList.add(`tabItem`);
    tabMenu.textContent = `Menu`;
    tabMenu.addEventListener(`click`, () => {
        tabContacts.classList.remove(`activeTab`);
        tabHome.classList.remove(`activeTab`);
        tabMenu.classList.add(`activeTab`);
    });
    container.appendChild(tabMenu);

    const tabContacts = document.createElement(`div`);
    tabContacts.setAttribute(`id`, `tabContacts`);
    tabContacts.classList.add(`tabItem`);
    tabContacts.textContent = `Contact us`;
    tabContacts.addEventListener(`click`, () => {
        tabHome.classList.remove(`activeTab`);
        tabMenu.classList.remove(`activeTab`);
        tabContacts.classList.add(`activeTab`);
    });
    container.appendChild(tabContacts);
    

    return container;
};

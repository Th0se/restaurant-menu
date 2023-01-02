const menuLister = (arr, list) => {
    for (let i in arr) {
        const item = document.createElement(`li`);
        item.textContent = arr[i];
        list.appendChild(item);
    }
};

const dishes1 = () => {
    const container = document.createElement(`div`);
    container.setAttribute(`id`, `dishes2`);
    container.classList.add(`menuContainer`);

    const dishes = [`Grilled cheese sandwiches`,
                        `Mac and cheese`,
                        `Queso dip`,
                        `Nacho cheese sauce`,
                        `Mashed potatoes`,
                        `Scrambled eggs`,
                        `Baked brie`];

    const list = document.createElement('ul');
    
    menuLister(dishes, list);

    container.appendChild(list);


    return container;
};

const dishes2 = () => {
    const container = document.createElement(`div`);
    container.setAttribute(`id`, `dishes1`);
    container.classList.add(`menuContainer`);
    
    const dishes = [`Grilled meat (chicken, pork, steak)`,
                        `roasted vegetables (onions, bell peppers, squashes)`,
                        `Deepfried foods (onion rings, fried chicken, chips)`,
                        `Grilled dishes (sanwhiches, burgers)`,
                        `Charred vegetables (corn on the cob, asparagus)`];

    const list = document.createElement(`ul`);
    menuLister(dishes, list);

    container.appendChild(list);

    
    return container;
};

const beverages1 = () => {
    const container = document.createElement(`div`);
    container.setAttribute(`id`, `beverages1`);
    container.classList.add(`menuContainer`);

    const beverages = [`Red wine`,
                        `White wine`,
                        `Beer`,
                        `Sparkling water`,
                        `soda`,
                        `Cocktail`];

    const list = document.createElement(`ul`);

    menuLister(beverages, list);

    container.appendChild(list);

    return container;
};

const beverages2 = () => {
    const container = document.createElement(`div`);
    container.setAttribute(`id`, `beverages2`);
    container.classList.add(`menuContainer`);

    const beverages = [`Fruit juice (pomegranate, cherry, mango, banana)`,
                        `Iced tea`,
                        `Lemonade`,
                        `Smoothies (pomegranate, cherry, mango, banana)`,
                        `Water`,
                        `Milk (warm, cold)`];

    const list = document.createElement(`ul`);

    menuLister(beverages, list);

    container.appendChild(list);

    return container;
};

const menuTabContainer = () => {
    const container = document.createElement(`div`);
    container.setAttribute(`id`, `menuTabContainer`);

    const food1 = dishes1();
    container.appendChild(food1);

    const food2 = dishes2();
    container.appendChild(food2);

    const drink1 = beverages1();
    container.appendChild(drink1);

    const drink2 = beverages2();
    container.appendChild(drink2);

    return container;
};


export {menuLister,
        dishes1,
        dishes2,
        beverages1,
        beverages2,
        menuTabContainer};
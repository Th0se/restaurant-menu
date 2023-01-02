const restaurantExposition = () => {
    const container = document.createElement(`div`);
    container.setAttribute(`id`, `expositionContainer`);

    const content = document.createElement(`p`);
    content.textContent = `Welcome to Melty's Kitchen, where we offer a range of warm, gooey and hearty,
                                meaty dishes, as well as a variety of beverages. We use fresh ingredients and 
                                strive to provide the best possible dining experience in a cozy atmosphere.`;
    container.appendChild(content);


    return container;
};

const restaurantSchedule = () => {
    const container = document.createElement(`div`);
    container.setAttribute(`id`, `scheduleContainer`);

    const weekday = document.createElement(`div`);
    weekday.setAttribute(`id`, `weekdayContainer`);

    const weekdayHeader = document.createElement(`div`);
    weekdayHeader.setAttribute(`id`, `weekdayHeader`);
    weekdayHeader.textContent = `Weekdays`;
    weekday.appendChild(weekdayHeader);

    const weekdayContent = document.createElement(`div`);
    weekdayContent.setAttribute(`id`, `weekdayContent`);
    weekdayContent.textContent = `07:00 to 19:05`;
    weekday.appendChild(weekdayContent);

    const weekend = document.createElement(`div`);
    weekend.setAttribute(`id`, `weekendContainer`);

    const weekendHeader = document.createElement(`div`);
    weekendHeader.setAttribute(`id`, `weekendHeader`);
    weekendHeader.textContent = `Weekend`;
    weekend.appendChild(weekendHeader);

    const weekendContent = document.createElement(`div`);
    weekendContent.setAttribute(`id`, `weekendContent`);
    weekendContent.textContent = `09:00 to 16:00`;
    weekend.appendChild(weekendContent);

    container.appendChild(weekday);
    container.appendChild(weekend);
    

    return container;
};

const homeTabContainer = () => {
    const container = document.createElement(`div`);
    container.setAttribute(`id`, `homeTabContainer`);

    const exposition = restaurantExposition();
    container.appendChild(exposition);

    const schedule = restaurantSchedule();
    container.appendChild(schedule);


    return container;
};


export {restaurantExposition, homeTabContainer, restaurantSchedule};
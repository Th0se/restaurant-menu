const phoneNumber = `9-99-999-9999`;
const emailAddress = `melty@placeholder.com`;


const phone = () => {
    const container = document.createElement(`div`);
    container.setAttribute(`id`, `phoneContainer`);

    const header = document.createElement(`div`);
    header.classList.add(`contactHeader`);
    header.textContent = `Phone number`;
    container.appendChild(header);

    const info = document.createElement(`div`);
    info.classList.add(`contactInfo`);
    info.textContent = phoneNumber;
    container.appendChild(info);


    return container;
};

const email = () => {
    const container = document.createElement(`div`);
    container.setAttribute(`id`, `emailContainer`);

    const header = document.createElement(`div`);
    header.classList.add(`contactHeader`);
    header.textContent = `Email address`;
    container.appendChild(header);

    const info = document.createElement(`div`);
    info.classList.add(`contactInfo`);
    info.textContent = emailAddress;
    container.appendChild(info);


    return container;
};

const contactTabContainer = () => {
    const container = document.createElement(`div`);
    container.setAttribute(`id`, `contactTabContainer`);
        
    const call = phone();
    container.appendChild(call);

    const write = email();
    container.appendChild(write);


    return container;
};

export {
    email,
    phone,
    phoneNumber,
    emailAddress,
    contactTabContainer
};



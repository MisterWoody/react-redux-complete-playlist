const initState = {
    posts: [
        { id: '1', title: 'Squirtle Laid an Egg', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed placerat lectus. Curabitur accumsan, nunc auctor luctus porta, orci sapien vestibulum nibh, et accumsan ex nibh id leo. Maecenas justo est, dignissim vitae ex sed, luctus condimentum nibh. Morbi purus ligula, rhoncus ac nisi non, commodo iaculis ligula.' },
        { id: '2', title: 'Charmander Laid an Egg', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed placerat lectus. Curabitur accumsan, nunc auctor luctus porta, orci sapien vestibulum nibh, et accumsan ex nibh id leo. Maecenas justo est, dignissim vitae ex sed, luctus condimentum nibh. Morbi purus ligula, rhoncus ac nisi non, commodo iaculis ligula.' },
        { id: '3', title: 'a Helix Fossil was Found', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed placerat lectus. Curabitur accumsan, nunc auctor luctus porta, orci sapien vestibulum nibh, et accumsan ex nibh id leo. Maecenas justo est, dignissim vitae ex sed, luctus condimentum nibh. Morbi purus ligula, rhoncus ac nisi non, commodo iaculis ligula.' }
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer
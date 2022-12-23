const initialState = {
    current: 0,
    chatList: [
        {
            id: 1,
            name: "Elon Mask",
            avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
            lastMessage: "I'll be in your neighborhood...",
            date: "10/11/22",
        },
        {
            id: 2,
            name: "Mark Zuckerberg",
            avatar: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Mark_Zuckerberg_F8_2018_Keynote_%28cropped%29.jpg",
            lastMessage: "I'll be in your neighborhood...",
            date: "10/11/22",
        },
        {
            id: 3,
            name: "Jeff Bezos",
            avatar: "https://image.capital.de/31027178/t/pO/v1/w960/r0/-/bezos-final-0404-jpg.jpg",
            lastMessage: "I'll be in your neighborhood...",
            date: "10/11/22",
        },
        {
            id: 4,
            name: "Larry Page",
            avatar: "https://media.gq-magazin.de/photos/60a22ace01d3a5b659ebb005/3:4/w_1830,h_2440,c_limit/larry%20page-495431362.jpg",
            lastMessage: "I'll be in your neighborhood...",
            date: "10/11/22",
        },
        {   id: 5,
            name: "Kim Kardashian",
            avatar: "https://image.gala.de/22514806/t/IE/v4/w960/r0.6667/-/kim-kardashian.jpg",
            lastMessage: "I'll be in your neighborhood...",
            date: "10/11/22",
        }

    ],
};

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "SELECT_ITEM":
            return {
                ...state,
                current: action.payload
            };


        default:
            return state;
    }
}

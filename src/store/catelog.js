export default {
    namespaced: true,
    state: {
        categories: [
            {
                id: 1,
                name: 'Shirts',
                slug: 'dresses',
                img: 'https://images.meesho.com/images/marketing/1591969710874_64.webp',
                child: {
                    '': [
                        {
                            id: 1,
                            name: 'A-Line Dresses',
                            img: 'https://static2.urbanic.com/images/feeds/1673853318649/3R5A9367_1_1.png',
                            route: ''
                        },
                        {
                            id: 2,
                            name: 'Bodycon Dresses',
                            img: 'https://static2.urbanic.com/images/feeds/1673849284135/3R5A9552_1.png',
                            route: ''
                        },
                        {
                            id: 3,
                            name: 'Party Dresses',
                            img: 'https://static2.urbanic.com/images/feeds/1673852485950/3R5A9440_1_1-.png',
                            route: ''
                        },
                        {
                            id: 4,
                            name: 'Sweater Dresses',
                            img: 'https://static2.urbanic.com/images/feeds/1673853341256/3R5A9420_1_1.png',
                            route: ''
                        },
                    ],
                },
            },
            {
                id: 2,
                name: 'T-Shirts',
                slug: 'tops',
                img: 'https://images.meesho.com/images/marketing/1591969693743_64.webp',
                child: {
                    '': [
                        {
                            id: 1,
                            name: 'T-shirts',
                            img: 'https://static2.urbanic.com/images/feeds/1673850888214/T.png',
                            route: '/CardCatelog'
                        },
                        {
                            id: 2,
                            name: 'Vests',
                            img: 'https://static2.urbanic.com/images/feeds/1673850897789/tops.png',
                            route: ''
                        },
                        {
                            id: 3,
                            name: 'Blouses & Shirts',
                            img: 'https://static2.urbanic.com/images/feeds/1673850909782/3R5A9381_1_1.png',
                            route: ''
                        },
                        {
                            id: 4,
                            name: 'Sweaters & CarDigans',
                            img: 'https://static2.urbanic.com/images/feeds/1675576008651/IMG_0005.PNG',
                            route: ''
                        },
                    ],
                },
            },
            {
                id: 3,
                name: 'Bottoms',
                slug: 'bottoms',
                img: 'https://images.meesho.com/images/marketing/1591969654748_64.webp',
                child: {
                    '': [
                        {
                            id: 1,
                            name: 'Jeans',
                            img: 'https://static2.urbanic.com/images/feeds/1673851105748/3R5A8998_1.png',
                            route: ''
                        },
                        {
                            id: 2,
                            name: 'Pants & Leggings',
                            img: 'https://static2.urbanic.com/images/feeds/1673851112610/3R5A9393_1_1.png',
                            route: ''
                        },
                        {
                            id: 3,
                            name: 'Shorts',
                            img: 'https://static2.urbanic.com/images/feeds/1673851122558/3R5A8995_1.png',
                            route: ''
                        },
                        {
                            id: 4,
                            name: 'Skirts',
                            img: 'https://static2.urbanic.com/images/feeds/1673851138694/3R5A9839_1_1.png',
                            route: ''
                        },
                    ],
                },
            },

        ],
        
    },
    getters: {
        getCategories: state => state.categories,
    },
    mutations: {},
    actions: {}
}
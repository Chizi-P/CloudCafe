
/**
 * 資料庫
 */
const User = {
    name: '',
    age: '',
    sex: 'b' || 'g' || 'o',
    avatar: 'url()',
    IP: '',
    account: '',
    password: '',
    email: '',
    
    points: 0,
    record: {
        order: [
            {
                date: Date,
                StoreName: StoreInfo.name,
                type: MenuItem.type,
                MenuItemName: MenuItem.name,
                price: MenuItem.price
            }
        ],
    },

    calc: {
        type: [
            {
                sex: User.sex,
                age: User.age,
                style: StoreInfo.hashtag.style,
                userDefined: StoreInfo.hashtag.userDefined,
                factors: StoreInfo.factors,
            }
        ]
    }
}

//
const StoreInfo = {
    name: '',
    image: ['url'],
    introduction: '',
    menu: [MenuItem],
    phoneNum: '',
    address: '',
    businessHours: '',
    hashtag: {
        style: [],
        userDefined: [],
    },
    factors: [Factor], 
    // index 是樓層
    layout: [[Seat], [Seat]],
    cameraPosition: [x, y, z]
}

const Seat = {
    position: [x, y, z],
    used: undefined || true || false,
}

// 要素
const Factor = {
    name: '',
    icon: '',
    introduction: '',
}

// 菜式
const MenuItem = {
    type: 'drink' || 'food',
    name: '',
    image: '',
    price: '',
    introduction: '',
}

const Post = {
    storeInfo: StoreInfo,
    distance: '',
}


const eventsList = [
    {
        id: "fete-opens", 
        title: "Fete Opens!",
        time: "10:00 AM",
        startTime: "2025-09-13T10:00:00",
        location: "Entrance",
        description: "Welcome! Grab a map, enjoy the atmosphere, and get ready for a fantastic day of fun, food, and community.",
        isMarker: true //this means only showing in calendar, not events.html
    },
    {
        id: "gyoza-springrolls",
        title: "Gyoza and Mini Spring Rolls",
        image: "https://thumbs.dreamstime.com/b/chinese-traditional-spring-rolls-gyoza-dumpling-fried-wooden-table-69338821.jpg",
        time: "10:00 AM - 3:00 PM",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "Food Court",
        description: "Savor delicious homemade gyoza and crispy mini spring rolls, freshly prepared by our talented volunteers. Perfect for a quick snack or to share with friends.",
        category: "food"
    },
    {
        id: "topokki",
        title: "Topokki",
        image: "https://media.istockphoto.com/id/1152570620/photo/spicy-rice-cakes.jpg?s=612x612&w=0&k=20&c=TCyhZGs6rY66-RnxTCRFqEWESaQ3sgrzogwbc1UXmRo=",
        time: "10:00 AM - 3:00 PM",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "Food Court",
        description: "Enjoy this popular Korean street food! Our topokki is spicy, chewy, and full of flavor—a must-try for foodies and fans of Asian cuisine.",
        category: "food"
    },
    {
        id: "hk-street-food",
        title: "Hong Kong Street Food",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8TwCvo0V5SQM5is1nhKaYIYUAK7H1bWDOCg&s",
        time: "10:00 AM - 3:00 PM",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "Food Court",
        description: "Sample a variety of classic Hong Kong street snacks, from savory skewers to sweet treats. Experience the vibrant flavors of Hong Kong right here at the fete.",
        category: "food"
    },
    {
        id: "coffee-cart",
        title: "Coffee Cart",
        image: "https://www.shutterstock.com/image-photo/woman-drinking-coffee-sitting-by-600nw-2534533277.jpg",
        time: "10:00 AM - 3:00 PM",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "Food Court",
        description: "Grab a freshly brewed coffee or tea from our friendly baristas. The perfect pick-me-up to keep you energized throughout the day.",
        category: "food"
    },
    {
        id: "pure-gelato",
        title: "Pure Gelato Cart",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnbJPO3rXxDe1tOkIQZnlxK4GK2Kp58GDzmw&s",
        time: "10:00 AM - 3:00 PM",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "Food Court",
        description: "Cool off with a scoop (or two!) of Pure Gelato’s finest flavors. A sweet treat for all ages, made with quality ingredients.",
        category: "food"
    },
    {
        id: "crepes",
        title: "Crepes Stall",
        image: "https://tse1.mm.bing.net/th/id/OIP.B7HE2PtMFY8UOtqVTrApegAAAA?r=0&pid=Api",
        time: "10:00 AM - 3:00 PM",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "Food Court",
        description: "Indulge in freshly made crepes, both sweet and savory. Choose your favorite fillings and watch as your crepe is made to order.",
        category: "food"
    },
    {
        id: "bubble-tea",
        title: "Bubble Tea Stall",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2YPuSEpvwQQW99DJSNdz1IuKX37tzkP5e1g&s",
        time: "10:00 AM - 3:00 PM",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "Food Court",
        description: "Sip on refreshing bubble tea in a variety of flavors. A fun and tasty drink for kids and adults alike.",
        category: "food"
    },
    {
        id: "glass-noodle-fishball",
        title: "Glass Noodle Fish Ball Soup",
        image: "https://www.shutterstock.com/image-photo/rice-vermicelli-noodle-soup-pork-260nw-2144265897.jpg",
        time: "10:00 AM - 3:00 PM",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "Food Court",
        description: "Warm up with a comforting bowl of glass noodle fish ball soup, a favorite among our community members.",
        category: "food"
    },
    {
        id: "curry-fishball",
        title: "Curry Fish Ball",
        image: "https://media.gettyimages.com/id/1418645425/photo/fish-balls-on-a-stick-cooked-in-a-pot-of-curry-broth-popular-hong-kong-street-food.jpg?s=612x612&w=gi&k=20&c=wEFB5znRNLeuyFOK_oH-w0U_k1ilouPXdCPDyVhK9DE=",
        time: "10:00 AM - 3:00 PM",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "Food Court",
        description: "Try this classic Hong Kong-style snack—tender fish balls simmered in a flavorful curry sauce.",
        category: "food"
    },
    {
        id: "indonesian",
        title: "Indonesian Food Stall",
        image: "https://media.istockphoto.com/id/1497742498/photo/bali-indonesia.jpg?s=612x612&w=0&k=20&c=lzS2NI_JM4gYyRk0VSHx5KcS1-a7rcpRfWM_2ynGwFk=",
        time: "10:00 AM - 3:00 PM",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "Food Court",
        description: "Experience the rich and diverse flavors of Indonesia with our selection of authentic dishes, prepared by members of our Indonesian community.",
        category: "food"
    },
    {
        id: "congee",
        title: "Congee Stall",
        image: "https://www.shutterstock.com/image-photo/joke-congee-thai-style-cup-600nw-2106539870.jpg",
        time: "10:00 AM - 3:00 PM",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "Food Court",
        description: "Enjoy a comforting bowl of congee, served with a variety of delicious toppings. A traditional favorite for all ages.",
        category: "food"
    },
    {
        id: "cpc-cafe",
        title: "The CPC Café - Coffee & Cakes",
        image: "https://static.vecteezy.com/system/resources/thumbnails/050/927/928/small/cozy-coffee-shop-interior-with-espresso-machines-fresh-pastries-on-display-and-some-green-plants-small-local-business-concept-banner-photo.jpeg",
        time: "10:00 AM - 3:00 PM",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "CPC Café",
        description: "Relax in our cozy café with a cup of coffee or tea and a selection of homemade cakes and treats. A perfect spot to catch up with friends and family.",
        category: "food"
    },
    {
        id: "flower-stall",
        title: "Flower Stall",
        image: "https://iili.io/FUO9XRI.md.jpg",
        time: "10:00 AM - 3:00 PM",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "Market Area",
        description: "Brighten your day with a beautiful bouquet! Our Flower Stall offers fresh, locally sourced flowers perfect for gifts, home decoration, or simply to treat yourself. Friendly volunteers can help you pick the perfect arrangement.",
        category: "stall"
    },
    {
        id: "plant-stall",
        title: "Indoor / Outdoor Plant Stall",
        image: "https://iili.io/FUO9Nxn.md.jpg",
        time: "10:00 AM - 3:00 PM",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "Market Area",
        description: "Discover a wide variety of healthy indoor and outdoor plants, from succulents and ferns to flowering shrubs. Our team can offer care tips and help you find the right plant for your space. Great for green thumbs and beginners alike!",
        category: "stall"
    },
    {
        id: "totes-amazing",
        title: "Totes Amazing Tote Bags",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStfQ-7Tom1BMoJvh2qP5m9djyR4Lkt90GYpw&s",
        time: "10:00 AM - 3:00 PM",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "Market Area",
        description: "Carry your goodies in style! Choose from a range of eco-friendly, hand-decorated tote bags. Each bag is unique and makes a perfect gift or keepsake from the fete. Support sustainability and creativity in one purchase.",
        category: "stall"
    },
    {
        id: "cards-of-meaning",
        title: "Cards of Meaning",
        image: "https://thumbs.dreamstime.com/b/poker-game-playing-cards-isolated-white-390025969.jpg",
        time: "10:00 AM - 3:00 PM",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "Market Area",
        description: "Send a heartfelt message with our handmade cards, crafted with care by our community. Choose from a variety of designs for every occasion—birthdays, thank yous, encouragement, and more. Each card tells a story.",
        category: "stall"
    },
    {
        id: "handicrafts",
        title: "Handicrafts Stall",
        image: "https://cdn.pixabay.com/photo/2016/01/13/22/48/pottery-1139047_1280.jpg",
        time: "10:00 AM - 3:00 PM",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "Market Area",
        description: "Browse a selection of unique, handmade crafts including jewelry, home décor, and more. All items are lovingly created by local artisans and volunteers. Find the perfect one-of-a-kind gift or treat yourself to something special.",
        category: "stall"
    },
    {
        id: "book-stall",
        title: "Book Stall",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ4TSGPeRUiDThLpdEOvo2bQTrCSN5xINxVg&s",
        time: "10:00 AM - 3:00 PM",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "Market Area",
        description: "Lose yourself in a good book! Our Book Stall features a wide range of pre-loved books for all ages and interests, from children’s stories to bestsellers. All proceeds support community programs.",
        category: "stall"
    },
    {
        id: "jumping-castle",
        title: "Jumping Castle",
        image: "https://media.istockphoto.com/id/911352346/photo/child-jumping-on-playground-trampoline-kids-jump.jpg?s=612x612&w=0&k=20&c=oH9f8va4nNIjiin2Pw3xNLBrQuR7LS93W9dpOtUC7R8=",
        time: "10:00 AM - 3:00 PM",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "Kids Zone",
        description: "Let the kids bounce to their hearts’ content in our safe and supervised jumping castle! Always a crowd favorite, this activity is perfect for burning off energy and making new friends. Suitable for children of all ages.",
        category: "kids"
    },
    {
        id: "hoopla",
        title: "Hoopla",
        image: "https://media.istockphoto.com/id/1677556768/vector/wanage.jpg?s=612x612&w=0&k=20&c=wc582qt6y7N41n9r2C9zqiacVSQm47Qv_3tPbh0UKF8=",
        time: "10:00 AM - 3:00 PM",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "Kids Zone",
        description: "Test your aim and win a prize! Hoopla is a classic fete game that’s fun for all ages. Step right up, toss the rings, and see if you can land a win. Prizes for skill and participation.",
        category: "kids"
    },
    {
        id: "cupcake-decorating",
        title: "Cupcake Decorating",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxOnlGQhzqMToLdM7M-YBxflQcG4cjmG3exg&s",
        time: "10:00 AM - 3:00 PM",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "Kids Zone",
        description: "Get creative and decorate your own cupcake with a variety of colorful icings and toppings. Take your masterpiece home or enjoy it on the spot! All materials provided. Suitable for kids and the young at heart.",
        category: "kids"
    },

    
    {
        id: "Organ-Recitals",
        title: "Church Organ Recitals and Choral pieces",
        image: "https://www.sydneyorgan.com/sydneypics/Chinese-Pres1.jpg",
        time: "11:00 AM - 1:00 PM",
        startTime: "2025-09-13T11:00:00",
        endTime: "2025-09-13T13:00:00",
        location: "Auditorium",
        cost: "Free",
        description: "Throughout the day we will have a variety of musical events and tours.  Our church organ – built in the early 1900s – was recently restored and we will be holding a series of recitals, that will be recorded, to celebrate. We will intermix that with pieces from our choir ",
        category: "music"
    },
    {
        id: "History-Tour",
        title: "CPC History Tour",
        image: "https://cdn.prod.website-files.com/5e53776beba259fba742207f/5e94228b6390001fa3d88475_ChurchHistory.jpg",
        time: "11:00 AM - 1:00 PM",
        startTime: "2025-09-13T11:00:00",
        endTime: "2025-09-13T13:00:00",
        location: "Auditorium",
        cost: "Free",
        description: "Elder Andrew Lu will be taking History Tours of CPC’s site and the history of the Chinese Church here in Sydney. Look out on the day for a more detailed list of times. ",
        category: "workshop"
    },
    {
        id: "food-extrauaganza",
        title: "Food Extrauaganza",
        image: "https://iili.io/FScBw42.jpg",
        time: "10:00AM - 3:00PM",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "All Locations",
        cost: "Tickets can be bought in ticket stalls",
        description: "The main event for the fete is of course the food.  Created by our talented church members, you are in for a treat.  From Gyoza to Fish-ball soup to Gelato and cakes there will be something for everyone.  But there is much more than that.  We have flower and plant stalls, crafts and cards. Check out the list of stalls in the food section",
        category: "food"
    },
    {
        id: "Kids-Activities",
        title: "Kids Activities",
        image: "https://iili.io/FScBs3B.jpg",
        time: "10:00AM - 3:00PM",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "Kids Zone",
        cost: "Some activities might require tickets",
        description: "From Hoopla to cupcake decorating and possibly a jumping castle, kids will have endless fun throughout the fete so come along and be prepared to have a smile on your face.",
        category: "kids"
    },
    {
        id: "choir",
        title: "CPC Choir",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ7S3ekqwcqO6xVnPavzVqI04HdWqU6aJHrQ&s", //Copyright free image from Pixabay
        time: "11:00 AM - 3:00 PM",
        startTime: "2025-09-13T11:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "Worship Centre",
        cost: "Free",
        description: "Be moved by the beautiful voices of the Chinese Presbyterian Church's own choir as they perform a selection of uplifting and popular songs. A truly heartwarming performance for the whole family.",
        category: "music"
    },
    {
        id: "Coffee",
        title: "Coffee and cakes",
        image: "https://iili.io/FScBjEl.jpg",
        time: "11:00 PM - 3:00 PM",
        startTime: "2025-09-13T11:00:00",
        endTime: "2025-09-13T15:30:00",
        location: "CPC Cafe",
        cost: "Ticket pricing",
        description: "When you are ready to unwind, come along to the CPC Café – Coffee and Cakes.  Up in the Fellowship Hall (check the map) it is quiet and secluded away and the perfect opportunity to catch up with old friends over tea or coffee.",
        category: "food"
    },
    {
        id: "face-painting",
        title: "Face Painting Fun",
        image: "https://media.istockphoto.com/id/1177844198/photo/young-mother-painting-daughters-face-for-halloween-party-halloween-or-carnival-family.jpg?s=612x612&w=0&k=20&c=kgmd_yerkpkvqiwoK488kwaeQXMABWa6UwaI0Y63p_M=", //Copyright free image from iStock
        time: "10:00 AM - 3:00 PM",
        startTime: "2025-09-13T10:00:00", 
        endTime: "2025-09-13T15:00:00",
        location: "Kids Zone",
        cost: "Ticket pricing",
        description: "Transform into a tiger, a butterfly, or your favorite superhero! Our talented artists are ready to bring your imagination to life with a splash of color.",
        category: "kids"
    },
    {
        id: "fete-concludes",
        title: "Fete Concludes",
        time: "3:00 PM",
        startTime: "2025-09-13T15:00:00",
        location: "Everywhere",
        description: "Thank you for joining us! We hope you had a wonderful day. See you again next time!",
        isMarker: true
    }
];

const allEvents = eventsList.reduce((obj, event) => {
    obj[event.id] = event;
    return obj;
}, {});

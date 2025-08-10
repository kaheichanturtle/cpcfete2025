const eventsList = [
    {
        id: "fete-opens", 
        title: "Fete Opens!",
        time: "10:00 AM",
        startTime: "2025-09-13T10:00:00",
        location: "Entrance",
        description: "Welcome! Come along, enjoy the atmosphere, and get ready for a fantastic day of fun, food, and community.",
        isMarker: true //notes to self: this means only showing in calendar, not events.html
    },
    {
        id: "gyoza-springrolls",
        title: "Gyoza and Mini Spring Rolls",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxFJzjatCvk4fBTW8bW4jnVg1qCUlKCotXrQ&s",
        time: "10:00 AM - 3:00 PM",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "Food Stall",
        description: "Savour delicious homemade gyoza and crispy mini spring rolls, freshly prepared by our talented volunteers. Perfect for a quick snack or to share with friends.",
        category: "food"
    },
    {
        id: "topokki",
        title: "Topokki",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOopThZfNj3DjjUWVcfbF7-QJf79h5XY-vYQ&s",
        time: "10:00 AM - 3:00 PM",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "Food Stall",
        description: "Enjoy this popular Korean street food! Our topokki is spicy, chewy, and full of flavour—a must-try for foodies and fans of Asian cuisine.",
        category: "food"
    },
    {
        id: "hk-street-food",
        title: "Hong Kong Street Food",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/31/HK_Lower_Wong_Tai_Sin_Eatate_Tung_Tau_Tsuen_Road_n_Ching_Tak_Street_%E9%9B%9E%E8%9B%8B%E4%BB%94.JPG",
        time: "10:00 AM - 3:00 PM",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "Food Stall",
        description: "Sample a variety of classic Hong Kong street snacks, from savoury skewers to sweet treats. Experience the vibrant flavours of Hong Kong right here at the fete.",
        category: "food"
    },
    {
        id: "coffee-cart",
        title: "Coffee Cart",
        image: "https://i1.pickpik.com/photos/821/429/88/food-drink-coffee-drinks-preview.jpg",
        time: "10:00 AM - 3:00 PM",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "Food Stall",
        description: "Grab a freshly brewed coffee or tea from our friendly baristas. The perfect pick-me-up to keep you energized throughout the day.",
        category: "food"
    },
    {
        id: "pure-gelato",
        title: "Pure Gelato Cart",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlRlVCIXiWd0zZ7xJwwjQR7Ucm1oo9c9cviQ&s",
        time: "10:00 AM - 3:00 PM",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "Food Stall",
        description: "Cool off with a scoop of Pure Gelato’s finest flavors. A sweet treat for all ages, made with quality ingredients.",
        category: "food"
    },
    {
        id: "crepes",
        title: "Crepes Stall",
        image: "https://iili.io/Fs0qiXt.md.jpg",
        time: "10:00 AM - 3:00 PM",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "Food Stall",
        description: "You have never had crepes like this! Indulge in freshly made matcha crepes with red bean.",
        category: "food"
    },
    {
        id: "bubble-tea",
        title: "Bubble Tea Stall",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQsscLFZbacrCVg-l19jQF7QIhdYwc5y-RCw&s",
        time: "10:00 AM - 3:00 PM",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "Food Stall",
        description: "Sip on refreshing bubble tea in a variety of flavors. A fun and tasty drink for kids and adults alike.",
        category: "food"
    },
    {
        id: "glass-noodle-fishball",
        title: "Glass Noodle Fish Ball Soup",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS5ye1hcMTCkkcYuUQaTCc43Wp5BnqWzlkdQ&s",
        time: "10:00 AM - 3:00 PM",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "Food Stall",
        description: "Warm up with a comforting bowl of glass noodle fish ball soup, a favourite among our community members.",
        category: "food"
    },
    {
        id: "curry-fishball",
        title: "Curry Fish Ball",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/34/Curry_Fish_Balls_1A.jpg",
        time: "10:00 AM - 3:00 PM",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "Food Stall",
        description: "Try this classic Hong Kong-style snack—tender fish balls simmered in a flavorful curry sauce.",
        category: "food"
    },
    {
        id: "indonesian",
        title: "Indonesian Food Stall",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/20/Nasi_Campur.jpg",
        time: "10:00 AM - 3:00 PM",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "Food Stall",
        description: "Experience the rich and diverse flavors of Indonesia with our selection of authentic dishes, prepared by members of our Indonesian community.",
        category: "food"
    },
    {
        id: "congee",
        title: "Congee Stall",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Congee_with_Youtiao.jpg",
        time: "10:00 AM - 3:00 PM",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "Food Stall",
        description: "Enjoy a comforting bowl of congee, served with a variety of delicious toppings. A traditional favourite for all ages.",
        category: "food"
    },
    {
        id: "cpc-grace",
        title: "Carriers of Grace",
        image: "https://iili.io/FslZpoB.md.jpg",
        time: "10:00 AM - 3:00 PM",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "Market Area",
        description: "Born in a church pew and stitched with purpose, Carriers of Grace is a small Christian business with a big heart. Founded by Bethany & Serena, we create beautiful, functional Bible pouches designed to carry your Sunday essentials—Bibles, notebooks, pens, and more—with grace and style. What started as a solution to the tote bag abyss has grown into a joyful mission: helping believers stay organised and focused during worship. It’s not just a pouch—it’s your faithful companion.",
        category: "stall"
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
        image: "https://iili.io/Fsl4Y5N.md.jpg",
        time: "10:00 AM - 3:00 PM",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "Market Area",
        description: "Carry your goodies in style! Choose from a range of eco-friendly, hand made tote bags. Each bag has been sewn with high quality fabric and recycled denim, so you can support sustainability and creativity in one purchase. No two bags are the same, making them the perfect gift or keepsake from the fete!",
        category: "stall"
    },
    {
        id: "cards-of-meaning",
        title: "Cards of Meaning",
        image: "https://iili.io/Fsl4Y5N.md.jpg",
        time: "10:00 AM - 3:00 PM",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "Market Area",
        description: "Send a heartfelt message with our handmade cards, crafted with care by our community. Choose from a variety of designs for every occasion. Each card tells a story.",
        category: "stall"
    },
    {
        id: "handicrafts",
        title: "Handicrafts Stall",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT33IEgr6qtIDDzbUcMzkgI8mo47RcodlHZ8A&s",
        time: "10:00 AM - 3:00 PM",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "Market Area",
        description: "Browse a selection of unique, handmade crafts. All items are lovingly created by local artisans and volunteers. Find the perfect one-of-a-kind gift or treat yourself to something special.",
        category: "stall"
    },
    {
        id: "book-stall",
        title: "Book Stall",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjjRN31GyD2knTbOae8qZFbKXbI4SCeVLTzQ&s",
        time: "10:00 AM - 3:00 PM",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "Market Area",
        description: "Lose yourself in a good book! Our Book Stall features new books as well as a range of second hand books.",
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
        description: "Let the kids bounce to their hearts’ content in our safe and supervised jumping castle! Always a crowd favourite, this activity is perfect for burning off energy and making new friends.",
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
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuVcZ_-dJKbyyqQ5ZAAKz5dc4z0Pg83af57w&s",
        time: "10:00 AM - 3:00 PM",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "Kids Zone",
        description: "Get creative and decorate your own cupcake with a variety of colourful icings and toppings. Take your masterpiece home or enjoy it on the spot! All materials provided. Suitable for kids and the young at heart.",
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
        title: "Food Extravaganza",
        image: "https://iili.io/FScBw42.jpg",
        time: "10:00AM - 3:00PM",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "All Locations",
        cost: "Tickets can be bought in ticket stalls",
        description: "The main event for the fete is of course the food.  Created by our talented church members, you are in for a treat.  From Scallops to Kim-chi pancakes there will be something that we are sure your won’t be able to resist. ",
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
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ahV3MLPPdhiEnlzAk9h_QXqzbEOo8A3-QQ&s", 
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
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFjFFa7bDbPt-2vgthtHybzfGQDr87CX528g&s", //Copyright free image from iStock
        time: "10:00 AM - 3:00 PM",
        startTime: "2025-09-13T10:00:00", 
        endTime: "2025-09-13T15:00:00",
        location: "Kids Zone",
        cost: "Ticket pricing",
        description: "Transform into a tiger, a butterfly, or your favourite superhero! Our talented artists are ready to bring your imagination to life with a splash of colour.",
        category: "kids"
    },
    {
        id: "carnival",
        title: "Carnival Games",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgSTK51RaVLaoecMdfM72k4q9zCeGhLYyqIg&s", //Copyright free image from iStock
        time: "10:00 AM - 3:00 PM",
        startTime: "2025-09-13T10:00:00", 
        endTime: "2025-09-13T15:00:00",
        location: "Kids Zone",
        cost: "Ticket pricing",
        description: "Have fun with lolly guessing, claw machines and ping pong cups! Smile wider with every prize you get and enjoy the fete!",
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

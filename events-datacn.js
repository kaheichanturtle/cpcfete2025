const eventsList = [
    {
        id: "fete-opens", 
        title: "市集開幕！",
        time: "上午10:00",
        startTime: "2025-09-13T10:00:00",
        location: "入口",
        description: "歡迎！拿取地圖，享受熱鬧氣氛，準備度過一個充滿樂趣、美食和社區精神的精彩一天。",
        isMarker: true // this means only showing in calendar, not events.html
    },
    {
        id: "gyoza-springrolls",
        title: "餃子及迷你春卷",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxFJzjatCvk4fBTW8bW4jnVg1qCUlKCotXrQ&s",
        time: "上午10:00 - 下午3:00",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "美食區",
        description: "品嚐由我們才華橫溢的義工新鮮製作的美味自家製餃子和香脆迷你春卷。是快速小吃或與朋友分享的完美選擇。",
        category: "food"
    },
    {
        id: "topokki",
        title: "韓式炒年糕",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOopThZfNj3DjjUWVcfbF7-QJf79h5XY-vYQ&s",
        time: "上午10:00 - 下午3:00",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "美食區",
        description: "品嚐這款受歡迎的韓國街頭小吃！我們的炒年糕辛辣、Q彈且風味十足，是美食愛好者和亞洲美食粉絲的必嚐之選。",
        category: "food"
    },
    {
        id: "hk-street-food",
        title: "港式街頭小吃",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/31/HK_Lower_Wong_Tai_Sin_Eatate_Tung_Tau_Tsuen_Road_n_Ching_Tak_Street_%E9%9B%9E%E8%9B%8B%E4%BB%94.JPG",
        time: "上午10:00 - 下午3:00",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "美食區",
        description: "品嚐各種經典港式街頭小吃，從鹹味串燒到甜點。在這裡體驗香港的活力風味。",
        category: "food"
    },
    {
        id: "coffee-cart",
        title: "咖啡車",
        image: "https://i1.pickpik.com/photos/821/429/88/food-drink-coffee-drinks-preview.jpg",
        time: "上午10:00 - 下午3:00",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "美食區",
        description: "從我們友善的咖啡師那裡購買新鮮沖泡的咖啡或茶。這是讓您全天保持活力的完美提神飲品。",
        category: "food"
    },
    {
        id: "pure-gelato",
        title: "Pure Gelato 雪糕車",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlRlVCIXiWd0zZ7xJwwjQR7Ucm1oo9c9cviQ&s",
        time: "上午10:00 - 下午3:00",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "美食區",
        description: "品嚐一兩勺Pure Gelato的頂級風味，為自己降溫。一款適合所有年齡層的甜點，採用優質食材製作。",
        category: "food"
    },
    {
        id: "crepes",
        title: "可麗餅攤位",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfxc-epRX17pF6Xy8NpOgftMuTenoLxE7pcA&s",
        time: "上午10:00 - 下午3:00",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "美食區",
        description: "盡情享用新鮮製作的甜鹹可麗餅。選擇您喜歡的餡料，並觀看您的可麗餅即點即製。",
        category: "food"
    },
    {
        id: "bubble-tea",
        title: "珍珠奶茶攤位",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQsscLFZbacrCVg-l19jQF7QIhdYwc5y-RCw&s",
        time: "上午10:00 - 下午3:00",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "美食區",
        description: "品嚐各種口味的清爽珍珠奶茶。一款適合兒童和成人享用的有趣美味飲品。",
        category: "food"
    },
    {
        id: "glass-noodle-fishball",
        title: "粉絲魚蛋湯",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS5ye1hcMTCkkcYuUQaTCc43Wp5BnqWzlkdQ&s",
        time: "上午10:00 - 下午3:00",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "美食區",
        description: "來一碗暖心的粉絲魚蛋湯，這是我們社區成員的最愛。",
        category: "food"
    },
    {
        id: "curry-fishball",
        title: "咖喱魚蛋",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/34/Curry_Fish_Balls_1A.jpg",
        time: "上午10:00 - 下午3:00",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "美食區",
        description: "嚐嚐這款經典港式小吃——香濃咖喱汁燉煮的彈牙魚蛋。",
        category: "food"
    },
    {
        id: "indonesian",
        title: "印尼美食攤位",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/20/Nasi_Campur.jpg",
        time: "上午10:00 - 下午3:00",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "美食區",
        description: "品嚐印尼社區成員準備的精選地道菜餚，體驗印尼豐富多樣的風味。",
        category: "food"
    },
    {
        id: "congee",
        title: "粥品攤位",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Congee_with_Youtiao.jpg",
        time: "上午10:00 - 下午3:00",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "美食區",
        description: "享用一碗暖心粥品，搭配多種美味配料。一款適合所有年齡層的傳統美食。",
        category: "food"
    },
    {
        id: "cpc-cafe",
        title: "華人長老會咖啡及蛋糕店",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr4uR3ii1mBR4a6t9CxBbIgtFVwPGRi0MYzA&s",
        time: "上午10:00 - 下午3:00",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "華人長老會咖啡及蛋糕店",
        description: "在我們舒適的咖啡廳裡，品嚐一杯咖啡或茶，配搭精選的自家製蛋糕和甜點。是與親朋好友相聚的絕佳地點。",
        category: "food"
    },
    {
        id: "flower-stall",
        title: "鮮花攤位",
        image: "https://iili.io/FUO9XRI.md.jpg",
        time: "上午10:00 - 下午3:00",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "市集區",
        description: "用美麗的花束點亮您的一天！我們的鮮花攤位提供新鮮的本地花卉，非常適合送禮、家居裝飾，或只是犒賞自己。友善的義工可以幫助您挑選完美的插花。",
        category: "stall"
    },
    {
        id: "plant-stall",
        title: "室內/室外植物攤位",
        image: "https://iili.io/FUO9Nxn.md.jpg",
        time: "上午10:00 - 下午3:00",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "市集區",
        description: "發現各式各樣健康的室內外植物，從多肉植物和蕨類到開花灌木。我們的團隊可以提供護理技巧，並幫助您找到適合您空間的植物。無論是園藝高手還是初學者都適合！",
        category: "stall"
    },
    {
        id: "totes-amazing",
        title: "「驚艷手提包」攤位",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJw8Q9tIDrixPGq66UnW5hyfCK5-SSG4PAA&s",
        time: "上午10:00 - 下午3:00",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "市集區",
        description: "時尚地攜帶您的好物！從一系列環保、手工裝飾的手提包中選擇。每個包包都是獨一無二的，是送禮或市集紀念品的完美選擇。一次購買即可支持可持續發展和創意。",
        category: "stall"
    },
    {
        id: "cards-of-meaning",
        title: "「意義卡片」攤位",
        image: "https://media.istockphoto.com/id/165685954/photo/christmas-scrapbooking.jpg?s=612x612&w=0&k=20&c=ZnId8_45djkN_9sJCDQnuLT-PE6jbRNLg2dAolONFTg=",
        time: "上午10:00 - 下午3:00",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "市集區",
        description: "用我們社區成員精心製作的手工卡片傳達真摯的祝福。為各種場合選擇多種設計——生日、感謝、鼓勵等。每張卡片都訴說著一個故事。",
        category: "stall"
    },
    {
        id: "handicrafts",
        title: "手工藝品攤位",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT33IEgr6qtIDDzbUcMzkgI8mo47RcodlHZ8A&s",
        time: "上午10:00 - 下午3:00",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "市集區",
        description: "瀏覽一系列獨特的手工藝品，包括珠寶、家居裝飾等。所有物品均由本地工匠和義工精心製作。尋找完美的獨一無二禮物或為自己選購一些特別的東西。",
        category: "stall"
    },
    {
        id: "book-stall",
        title: "圖書攤位",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjjRN31GyD2knTbOae8qZFbKXbI4SCeVLTzQ&s",
        time: "上午10:00 - 下午3:00",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "市集區",
        description: "沉浸在一本好書中！我們的圖書攤位提供各種各樣的二手書籍，適合所有年齡和興趣，從兒童故事到暢銷書。所有收益均用於支持社區項目。",
        category: "stall"
    },
    {
        id: "jumping-castle",
        title: "彈跳城堡",
        image: "https://media.istockphoto.com/id/911352346/photo/child-jumping-on-playground-trampoline-kids-jump.jpg?s=612x612&w=0&k=20&c=oH9f8va4nNIjiin2Pw3xNLBrQuR7LS93W9dpOtUC7R8=",
        time: "上午10:00 - 下午3:00",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "兒童區",
        description: "讓孩子們在我們安全和受監督的彈跳城堡中盡情玩樂！這項活動一直是受歡迎的項目，非常適合發洩精力並結交新朋友。適合所有年齡段的兒童。",
        category: "kids"
    },
    {
        id: "hoopla",
        title: "套圈圈",
        image: "https://media.istockphoto.com/id/1677556768/vector/wanage.jpg?s=612x612&w=0&k=20&c=wc582qt6y7N41n9r2C9zqiacVSQm47Qv_3tPbh0UKF8=",
        time: "上午10:00 - 下午3:00",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "兒童區",
        description: "測試您的瞄準能力並贏取獎品！套圈圈是一個經典的市集遊戲，適合所有年齡層。上前一步，扔出環，看看您是否能贏得勝利。憑技巧和參與即可贏得獎品。",
        category: "kids"
    },
    {
        id: "cupcake-decorating",
        title: "杯子蛋糕裝飾",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuVcZ_-dJKbyyqQ5ZAAKz5dc4z0Pg83af57w&s",
        time: "上午10:00 - 下午3:00",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "兒童區",
        description: "發揮創意，用各種彩色糖霜和配料裝飾您自己的杯子蛋糕。將您的傑作帶回家或立即享用！所有材料均已提供。適合兒童和童心未泯者。",
        category: "kids"
    },

    
    {
        id: "Organ-Recitals",
        title: "教堂管風琴演奏及合唱團表演",
        image: "https://www.sydneyorgan.com/sydneypics/Chinese-Pres1.jpg",
        time: "上午11:00 - 下午1:00",
        startTime: "2025-09-13T11:00:00",
        endTime: "2025-09-13T13:00:00",
        location: "禮堂",
        cost: "免費",
        description: "全天我們將舉辦各種音樂活動和導覽。我們的教堂管風琴建於1900年代初期，最近經過修復，我們將舉辦一系列演奏會，並將進行錄製以作慶祝。我們將穿插合唱團的表演。",
        category: "music"
    },
    {
        id: "History-Tour",
        title: "華人長老會歷史導覽",
        image: "https://cdn.prod.website-files.com/5e53776beba259fba742207f/5e94228b6390001fa3d88475_ChurchHistory.jpg",
        time: "上午11:00 - 下午1:00",
        startTime: "2025-09-13T11:00:00",
        endTime: "2025-09-13T13:00:00",
        location: "禮堂",
        cost: "免費",
        description: "安德魯長老（Elder Andrew Lu）將帶領華人長老會的歷史導覽，並介紹悉尼華人教會的歷史。當天請留意更詳細的時間表。",
        category: "workshop"
    },
    {
        id: "food-extrauaganza",
        title: "美食盛會",
        image: "https://iili.io/FScBw42.jpg",
        time: "上午10:00 - 下午3:00",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "所有地點",
        cost: "門票可在售票攤位購買",
        description: "市集的主要活動當然是美食。由我們才華橫溢的教會成員製作，您將會大飽口福。從餃子到魚蛋湯，再到雪糕和蛋糕，應有盡有。但不僅如此，我們還有鮮花和植物攤位、手工藝品和卡片。請查看美食區的攤位列表。",
        category: "food"
    },
    {
        id: "Kids-Activities",
        title: "兒童活動",
        image: "https://iili.io/FScBs3B.jpg",
        time: "上午10:00 - 下午3:00",
        startTime: "2025-09-13T10:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "兒童區",
        cost: "部分活動可能需要門票",
        description: "從套圈圈到杯子蛋糕裝飾，甚至可能還有彈跳城堡，孩子們在整個市集期間將有無盡的樂趣，所以快來吧，準備好臉上洋溢笑容。",
        category: "kids"
    },
    {
        id: "choir",
        title: "華人長老會合唱團",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ahV3MLPPdhiEnlzAk9h_QXqzbEOo8A3-QQ&s", //Copyright free image from Pixabay
        time: "上午11:00 - 下午3:00",
        startTime: "2025-09-13T11:00:00",
        endTime: "2025-09-13T15:00:00",
        location: "崇拜中心",
        cost: "免費",
        description: "聆聽華人長老會合唱團美妙的歌聲，他們將演繹一系列振奮人心且受歡迎的歌曲。一場真正溫馨的全家表演。",
        category: "music"
    },
    {
        id: "Coffee",
        title: "咖啡與蛋糕",
        image: "https://iili.io/FScBjEl.jpg",
        time: "上午11:00 - 下午3:00",
        startTime: "2025-09-13T11:00:00",
        endTime: "2025-09-13T15:30:00",
        location: "華人長老會咖啡及蛋糕店",
        cost: "門票價格",
        description: "當您準備放鬆時，請光臨華人長老會咖啡及蛋糕店。它位於交誼廳（請查看地圖），安靜而僻靜，是與老朋友喝茶或咖啡敘舊的絕佳機會。",
        category: "food"
    },
    {
        id: "face-painting",
        title: "臉部彩繪樂",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFjFFa7bDbPt-2vgthtHybzfGQDr87CX528g&s", 
        time: "上午10:00 - 下午3:00",
        startTime: "2025-09-13T10:00:00", 
        endTime: "2025-09-13T15:00:00",
        location: "兒童區",
        cost: "門票價格",
        description: "變身成老虎、蝴蝶或您最喜歡的超級英雄！我們才華橫溢的藝術家已準備好用色彩為您的想像力注入生命。",
        category: "kids"
    },
    {
    "id": "carnival",
    "title": "嘉年華遊戲",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Amsterdam_-_Funfair_-_0560.jpg/960px-Amsterdam_-_Funfair_-_0560.jpg",
    "time": "上午10:00 - 下午3:00",
    "startTime": "2025-09-13T10:00:00",
    "endTime": "2025-09-13T15:00:00",
    "location": "兒童區",
    "description": "玩嘉年華遊戲並贏取豐富獎品！",
    "category": "kids"
}
    {
        id: "fete-concludes",
        title: "市集結束",
        time: "下午3:00",
        startTime: "2025-09-13T15:00:00",
        location: "各處",
        description: "感謝您的參與！希望您度過了美好的一天。下次再見！",
        isMarker: true
    }
];

const allEvents = eventsList.reduce((obj, event) => {
    obj[event.id] = event;
    return obj;
}, {});

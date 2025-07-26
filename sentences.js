// sentences.js - 초등학교 1-4학년 영어 말하기 연습용 확장 문장 패턴
window.sentencesData = {
    "🏠 일상생활": [
        // 기본 일과
        {"pattern": "I wake up at [blank].", "answers": ["7 o'clock", "8 o'clock", "morning", "early time", "school time"]},
        {"pattern": "I get up [blank].", "answers": ["quickly", "slowly", "early", "late", "now"]},
        {"pattern": "I stretch my [blank].", "answers": ["arms", "legs", "body", "back", "neck"]},
        {"pattern": "I make my [blank].", "answers": ["bed", "breakfast", "lunch box", "room clean", "schedule"]},
        {"pattern": "I open the [blank].", "answers": ["window", "door", "curtain", "book", "box"]},
        {"pattern": "I close the [blank].", "answers": ["door", "window", "book", "eyes", "mouth"]},
        {"pattern": "I turn on the [blank].", "answers": ["light", "TV", "computer", "radio", "fan"]},
        {"pattern": "I turn off the [blank].", "answers": ["light", "TV", "computer", "alarm", "music"]},
        
        // 개인 위생
        {"pattern": "I brush my [blank].", "answers": ["teeth", "hair", "shoes", "clothes", "bag"]},
        {"pattern": "I wash my [blank].", "answers": ["hands", "face", "body", "hair", "feet"]},
        {"pattern": "I dry my [blank].", "answers": ["hands", "hair", "body", "face", "clothes"]},
        {"pattern": "I comb my [blank].", "answers": ["hair", "doll's hair", "pet", "wig", "brother's hair"]},
        {"pattern": "I take a [blank].", "answers": ["shower", "bath", "rest", "nap", "break"]},
        {"pattern": "I use [blank].", "answers": ["soap", "shampoo", "toothpaste", "towel", "brush"]},
        
        // 의복
        {"pattern": "I wear [blank].", "answers": ["uniform", "pajamas", "jacket", "socks", "underwear"]},
        {"pattern": "I put on my [blank].", "answers": ["shoes", "hat", "gloves", "scarf", "backpack"]},
        {"pattern": "I take off my [blank].", "answers": ["shoes", "jacket", "hat", "gloves", "socks"]},
        {"pattern": "I change my [blank].", "answers": ["clothes", "shoes", "socks", "shirt", "pants"]},
        {"pattern": "I choose [blank].", "answers": ["clothes", "shoes", "color", "style", "outfit"]},
        {"pattern": "I fold my [blank].", "answers": ["clothes", "pajamas", "towel", "blanket", "paper"]},
        
        // 식사
        {"pattern": "I eat [blank].", "answers": ["breakfast", "lunch", "dinner", "snack", "fruit"]},
        {"pattern": "I drink [blank].", "answers": ["water", "milk", "juice", "tea", "soup"]},
        {"pattern": "I taste [blank].", "answers": ["food", "candy", "medicine", "new food", "sauce"]},
        {"pattern": "I smell [blank].", "answers": ["food", "flowers", "perfume", "coffee", "bread"]},
        {"pattern": "I cook [blank].", "answers": ["eggs", "rice", "noodles", "soup", "sandwich"]},
        {"pattern": "I prepare [blank].", "answers": ["breakfast", "lunch", "dinner", "snack", "table"]},
        {"pattern": "I set the [blank].", "answers": ["table", "alarm", "time", "clock", "timer"]},
        {"pattern": "I clear the [blank].", "answers": ["table", "desk", "room", "dishes", "mess"]},
        
        // 집안 활동
        {"pattern": "I clean my [blank].", "answers": ["room", "desk", "toys", "shoes", "bag"]},
        {"pattern": "I organize my [blank].", "answers": ["books", "toys", "clothes", "desk", "backpack"]},
        {"pattern": "I find my [blank].", "answers": ["book", "toy", "pencil", "homework", "shoes"]},
        {"pattern": "I lose my [blank].", "answers": ["pencil", "eraser", "toy", "book", "homework"]},
        {"pattern": "I keep my [blank].", "answers": ["promise", "secret", "room clean", "toys", "diary"]},
        {"pattern": "I throw away [blank].", "answers": ["trash", "garbage", "old toys", "paper", "wrapper"]},
        {"pattern": "I recycle [blank].", "answers": ["paper", "plastic", "cans", "bottles", "boxes"]},
        
        // 여가 활동
        {"pattern": "I watch [blank].", "answers": ["TV", "YouTube", "cartoons", "movies", "videos"]},
        {"pattern": "I listen to [blank].", "answers": ["music", "stories", "podcast", "radio", "songs"]},
        {"pattern": "I play [blank].", "answers": ["games", "piano", "guitar", "toys", "cards"]},
        {"pattern": "I read [blank].", "answers": ["books", "comics", "stories", "magazines", "newspapers"]},
        {"pattern": "I write [blank].", "answers": ["diary", "letter", "story", "homework", "notes"]},
        {"pattern": "I draw [blank].", "answers": ["pictures", "cartoons", "animals", "people", "houses"]},
        {"pattern": "I color [blank].", "answers": ["pictures", "books", "paper", "drawings", "maps"]},
        
        // 기타 일상
        {"pattern": "I practice [blank].", "answers": ["English", "piano", "writing", "math", "sports"]},
        {"pattern": "I remember [blank].", "answers": ["homework", "birthday", "promise", "name", "number"]},
        {"pattern": "I forget [blank].", "answers": ["homework", "name", "time", "promise", "things"]},
        {"pattern": "I wait for [blank].", "answers": ["bus", "mom", "friend", "dinner", "turn"]},
        {"pattern": "I look for [blank].", "answers": ["keys", "book", "toy", "friend", "pet"]},
        {"pattern": "I think about [blank].", "answers": ["homework", "friend", "game", "tomorrow", "family"]},
        {"pattern": "I dream about [blank].", "answers": ["flying", "toys", "vacation", "animals", "future"]},
        {"pattern": "I talk about [blank].", "answers": ["school", "friends", "games", "movies", "dreams"]},
        {"pattern": "I care about [blank].", "answers": ["family", "friends", "pets", "environment", "others"]},
        {"pattern": "I worry about [blank].", "answers": ["test", "homework", "friends", "pets", "tomorrow"]}
    ],
    
    "🎒 학교": [
        // 학습 활동
        {"pattern": "I study [blank].", "answers": ["English", "math", "science", "Korean", "history"]},
        {"pattern": "I learn [blank].", "answers": ["ABC", "numbers", "new words", "songs", "games"]},
        {"pattern": "I teach [blank].", "answers": ["my friend", "younger kids", "my pet", "my sister", "games"]},
        {"pattern": "I understand [blank].", "answers": ["English", "math", "teacher", "lesson", "homework"]},
        {"pattern": "I know [blank].", "answers": ["answer", "alphabet", "numbers", "colors", "shapes"]},
        {"pattern": "I solve [blank].", "answers": ["problems", "puzzles", "questions", "math", "riddles"]},
        {"pattern": "I answer [blank].", "answers": ["questions", "teacher", "correctly", "quickly", "loudly"]},
        {"pattern": "I ask [blank].", "answers": ["questions", "teacher", "for help", "permission", "why"]},
        
        // 교실 활동
        {"pattern": "I sit [blank].", "answers": ["quietly", "straight", "next to friend", "in front", "properly"]},
        {"pattern": "I stand [blank].", "answers": ["up", "in line", "straight", "quietly", "tall"]},
        {"pattern": "I raise my [blank].", "answers": ["hand", "voice", "head", "book", "flag"]},
        {"pattern": "I listen to [blank].", "answers": ["teacher", "story", "music", "instructions", "friends"]},
        {"pattern": "I follow [blank].", "answers": ["rules", "teacher", "instructions", "directions", "leader"]},
        {"pattern": "I pay [blank].", "answers": ["attention", "money", "respect", "carefully", "fully"]},
        {"pattern": "I concentrate on [blank].", "answers": ["study", "teacher", "book", "work", "lesson"]},
        {"pattern": "I focus on [blank].", "answers": ["homework", "test", "teacher", "board", "task"]},
        
        // 학용품
        {"pattern": "I use [blank].", "answers": ["pencil", "eraser", "ruler", "scissors", "glue"]},
        {"pattern": "I sharpen my [blank].", "answers": ["pencil", "colored pencils", "crayons", "skills", "mind"]},
        {"pattern": "I borrow [blank].", "answers": ["pencil", "eraser", "book", "ruler", "colors"]},
        {"pattern": "I lend my [blank].", "answers": ["pencil", "eraser", "book", "notes", "ruler"]},
        {"pattern": "I bring [blank].", "answers": ["homework", "lunch", "books", "pencil case", "water"]},
        {"pattern": "I pack my [blank].", "answers": ["bag", "lunch", "books", "homework", "supplies"]},
        {"pattern": "I carry my [blank].", "answers": ["backpack", "books", "lunch box", "water bottle", "project"]},
        {"pattern": "I open my [blank].", "answers": ["book", "notebook", "pencil case", "bag", "lunch box"]},
        
        // 숙제와 시험
        {"pattern": "I do my [blank].", "answers": ["homework", "best", "project", "assignment", "work"]},
        {"pattern": "I finish my [blank].", "answers": ["homework", "test", "project", "work", "assignment"]},
        {"pattern": "I submit my [blank].", "answers": ["homework", "project", "assignment", "report", "work"]},
        {"pattern": "I check my [blank].", "answers": ["answers", "homework", "spelling", "work", "mistakes"]},
        {"pattern": "I correct my [blank].", "answers": ["mistakes", "errors", "spelling", "answers", "work"]},
        {"pattern": "I review [blank].", "answers": ["lessons", "notes", "homework", "test", "mistakes"]},
        {"pattern": "I prepare for [blank].", "answers": ["test", "exam", "class", "presentation", "tomorrow"]},
        {"pattern": "I pass the [blank].", "answers": ["test", "exam", "level", "grade", "class"]},
        
        // 교실 규칙
        {"pattern": "I respect [blank].", "answers": ["teacher", "friends", "rules", "others", "property"]},
        {"pattern": "I share [blank].", "answers": ["pencils", "snacks", "books", "ideas", "toys"]},
        {"pattern": "I help [blank].", "answers": ["friends", "teacher", "classmates", "others", "everyone"]},
        {"pattern": "I cooperate with [blank].", "answers": ["friends", "teacher", "group", "team", "everyone"]},
        {"pattern": "I participate in [blank].", "answers": ["class", "activities", "games", "discussion", "sports"]},
        {"pattern": "I volunteer for [blank].", "answers": ["cleaning", "helping", "activities", "tasks", "jobs"]},
        {"pattern": "I take turns [blank].", "answers": ["speaking", "playing", "reading", "answering", "helping"]},
        
        // 학교 장소
        {"pattern": "I go to [blank].", "answers": ["classroom", "library", "playground", "cafeteria", "gym"]},
        {"pattern": "I walk to [blank].", "answers": ["school", "class", "library", "office", "bathroom"]},
        {"pattern": "I run to [blank].", "answers": ["playground", "gym", "class", "cafeteria", "field"]},
        {"pattern": "I enter the [blank].", "answers": ["classroom", "library", "office", "building", "gym"]},
        {"pattern": "I leave the [blank].", "answers": ["classroom", "school", "library", "playground", "building"]},
        {"pattern": "I visit the [blank].", "answers": ["library", "nurse", "principal", "office", "counselor"]},
        
        // 친구 관계
        {"pattern": "I play with [blank].", "answers": ["friends", "classmates", "toys", "games", "everyone"]},
        {"pattern": "I talk to [blank].", "answers": ["friends", "teacher", "classmates", "principal", "everyone"]},
        {"pattern": "I laugh with [blank].", "answers": ["friends", "classmates", "teacher", "everyone", "group"]},
        {"pattern": "I work with [blank].", "answers": ["partner", "group", "team", "friends", "classmates"]},
        {"pattern": "I compete with [blank].", "answers": ["friends", "teams", "classmates", "others", "myself"]},
        {"pattern": "I congratulate [blank].", "answers": ["winner", "friend", "team", "classmate", "everyone"]},
        
        // 기타 학교 활동
        {"pattern": "I join [blank].", "answers": ["club", "team", "group", "activity", "class"]},
        {"pattern": "I practice [blank].", "answers": ["reading", "writing", "speaking", "math", "sports"]},
        {"pattern": "I present [blank].", "answers": ["project", "report", "idea", "work", "poster"]},
        {"pattern": "I perform [blank].", "answers": ["song", "dance", "play", "well", "on stage"]},
        {"pattern": "I create [blank].", "answers": ["art", "project", "story", "poster", "presentation"]},
        {"pattern": "I discover [blank].", "answers": ["new things", "answers", "ideas", "solutions", "facts"]},
        {"pattern": "I explore [blank].", "answers": ["books", "ideas", "subjects", "library", "topics"]},
        {"pattern": "I achieve [blank].", "answers": ["goals", "success", "good grades", "dreams", "targets"]}
    ],
    
    "🍕 식당": [
        // 음식 주문
        {"pattern": "I order [blank].", "answers": ["pizza", "burger", "pasta", "salad", "drink"]},
        {"pattern": "I choose [blank].", "answers": ["menu", "food", "drink", "dessert", "size"]},
        {"pattern": "I want [blank].", "answers": ["pizza", "ice cream", "juice", "more", "dessert"]},
        {"pattern": "I would like [blank].", "answers": ["water", "menu", "bill", "napkin", "straw"]},
        {"pattern": "I prefer [blank].", "answers": ["pizza", "pasta", "chicken", "vegetables", "fruits"]},
        {"pattern": "I request [blank].", "answers": ["menu", "water", "napkin", "fork", "spoon"]},
        {"pattern": "I ask for [blank].", "answers": ["ketchup", "salt", "pepper", "sauce", "more"]},
        
        // 음식 먹기
        {"pattern": "I eat [blank].", "answers": ["slowly", "quickly", "neatly", "messily", "everything"]},
        {"pattern": "I chew [blank].", "answers": ["food", "gum", "slowly", "properly", "well"]},
        {"pattern": "I swallow [blank].", "answers": ["food", "water", "medicine", "carefully", "quickly"]},
        {"pattern": "I bite [blank].", "answers": ["apple", "sandwich", "pizza", "cookie", "carefully"]},
        {"pattern": "I sip [blank].", "answers": ["soup", "tea", "coffee", "drink", "slowly"]},
        {"pattern": "I taste [blank].", "answers": ["new food", "sauce", "soup", "dessert", "sample"]},
        {"pattern": "I try [blank].", "answers": ["new food", "spicy food", "dessert", "everything", "special"]},
        
        // 음료
        {"pattern": "I drink [blank].", "answers": ["water", "juice", "milk", "soda", "smoothie"]},
        {"pattern": "I pour [blank].", "answers": ["water", "juice", "milk", "sauce", "drink"]},
        {"pattern": "I stir [blank].", "answers": ["coffee", "tea", "soup", "sauce", "drink"]},
        {"pattern": "I mix [blank].", "answers": ["salad", "sauce", "ingredients", "flavors", "drinks"]},
        {"pattern": "I add [blank].", "answers": ["sugar", "salt", "pepper", "sauce", "ketchup"]},
        {"pattern": "I refill my [blank].", "answers": ["glass", "cup", "plate", "bowl", "drink"]},
        
        // 식당 예절
        {"pattern": "I sit at [blank].", "answers": ["table", "chair", "booth", "counter", "window"]},
        {"pattern": "I wait for [blank].", "answers": ["food", "waiter", "order", "turn", "table"]},
        {"pattern": "I share [blank].", "answers": ["food", "table", "dessert", "appetizer", "meal"]},
        {"pattern": "I pass the [blank].", "answers": ["salt", "pepper", "sauce", "bread", "water"]},
        {"pattern": "I use [blank].", "answers": ["fork", "spoon", "knife", "chopsticks", "napkin"]},
        {"pattern": "I wipe my [blank].", "answers": ["mouth", "hands", "face", "table", "spill"]},
        {"pattern": "I clean [blank].", "answers": ["table", "hands", "mouth", "mess", "spill"]},
        
        // 음식 설명
        {"pattern": "I like [blank].", "answers": ["sweet food", "salty food", "spicy food", "mild food", "hot food"]},
        {"pattern": "I love [blank].", "answers": ["chocolate", "ice cream", "fruits", "vegetables", "meat"]},
        {"pattern": "I dislike [blank].", "answers": ["bitter food", "sour food", "onions", "mushrooms", "fish"]},
        {"pattern": "I enjoy [blank].", "answers": ["eating out", "new food", "dessert", "cooking", "baking"]},
        {"pattern": "I smell [blank].", "answers": ["pizza", "coffee", "bread", "cookies", "food"]},
        {"pattern": "I see [blank].", "answers": ["menu", "food", "waiter", "chef", "kitchen"]},
        
        // 지불
        {"pattern": "I pay [blank].", "answers": ["bill", "cash", "card", "money", "check"]},
        {"pattern": "I count [blank].", "answers": ["money", "change", "bills", "coins", "cost"]},
        {"pattern": "I receive [blank].", "answers": ["change", "receipt", "bill", "order", "food"]},
        {"pattern": "I tip the [blank].", "answers": ["waiter", "waitress", "server", "delivery", "staff"]},
        {"pattern": "I thank [blank].", "answers": ["waiter", "chef", "staff", "server", "cook"]},
        
        // 특별한 경우
        {"pattern": "I celebrate [blank].", "answers": ["birthday", "anniversary", "success", "holiday", "party"]},
        {"pattern": "I recommend [blank].", "answers": ["pizza", "pasta", "restaurant", "dish", "dessert"]},
        {"pattern": "I complain about [blank].", "answers": ["food", "service", "wait time", "order", "bill"]},
        {"pattern": "I compliment [blank].", "answers": ["chef", "food", "service", "restaurant", "meal"]},
        {"pattern": "I reserve [blank].", "answers": ["table", "seat", "room", "time", "spot"]},
        {"pattern": "I cancel [blank].", "answers": ["order", "reservation", "booking", "plan", "request"]},
        
        // 음식 준비
        {"pattern": "I prepare [blank].", "answers": ["salad", "sandwich", "snack", "meal", "ingredients"]},
        {"pattern": "I cut [blank].", "answers": ["pizza", "meat", "vegetables", "bread", "cake"]},
        {"pattern": "I slice [blank].", "answers": ["bread", "pizza", "cake", "fruit", "cheese"]},
        {"pattern": "I serve [blank].", "answers": ["food", "drinks", "dessert", "guests", "family"]},
        {"pattern": "I heat [blank].", "answers": ["food", "pizza", "soup", "leftovers", "meal"]},
        {"pattern": "I cool [blank].", "answers": ["drink", "soup", "food", "dessert", "tea"]},
        
        // 기타
        {"pattern": "I wrap [blank].", "answers": ["leftovers", "food", "sandwich", "gift", "takeout"]},
        {"pattern": "I take [blank].", "answers": ["leftovers", "menu", "receipt", "napkin", "mint"]},
        {"pattern": "I leave [blank].", "answers": ["tip", "restaurant", "table", "review", "feedback"]},
        {"pattern": "I return to [blank].", "answers": ["restaurant", "table", "seat", "counter", "place"]},
        {"pattern": "I enjoy the [blank].", "answers": ["meal", "atmosphere", "music", "view", "company"]}
    ],
    
    "⚽ 운동": [
        // 스포츠 종류
        {"pattern": "I play [blank].", "answers": ["soccer", "basketball", "tennis", "golf", "hockey"]},
        {"pattern": "I practice [blank].", "answers": ["kicks", "shots", "serves", "swings", "moves"]},
        {"pattern": "I learn [blank].", "answers": ["taekwondo", "judo", "karate", "boxing", "wrestling"]},
        {"pattern": "I enjoy [blank].", "answers": ["running", "swimming", "cycling", "hiking", "climbing"]},
        {"pattern": "I watch [blank].", "answers": ["game", "match", "tournament", "Olympics", "sports"]},
        {"pattern": "I join [blank].", "answers": ["team", "club", "league", "competition", "practice"]},
        
        // 운동 동작
        {"pattern": "I run [blank].", "answers": ["fast", "slowly", "everyday", "5 km", "marathon"]},
        {"pattern": "I jump [blank].", "answers": ["high", "far", "rope", "over", "up"]},
        {"pattern": "I kick [blank].", "answers": ["ball", "hard", "goal", "straight", "high"]},
        {"pattern": "I throw [blank].", "answers": ["ball", "far", "straight", "frisbee", "dice"]},
        {"pattern": "I catch [blank].", "answers": ["ball", "frisbee", "easily", "quickly", "always"]},
        {"pattern": "I hit [blank].", "answers": ["ball", "target", "homerun", "bullseye", "hard"]},
        {"pattern": "I shoot [blank].", "answers": ["ball", "basket", "goal", "target", "arrow"]},
        {"pattern": "I pass [blank].", "answers": ["ball", "quickly", "teammate", "forward", "back"]},
        
        // 수영
        {"pattern": "I swim [blank].", "answers": ["freestyle", "backstroke", "butterfly", "fast", "underwater"]},
        {"pattern": "I dive [blank].", "answers": ["deep", "carefully", "underwater", "pool", "ocean"]},
        {"pattern": "I float [blank].", "answers": ["easily", "on back", "water", "pool", "calmly"]},
        {"pattern": "I splash [blank].", "answers": ["water", "friends", "pool", "fun", "around"]},
        
        // 운동 장비
        {"pattern": "I wear [blank].", "answers": ["uniform", "sneakers", "helmet", "gloves", "goggles"]},
        {"pattern": "I use [blank].", "answers": ["racket", "bat", "club", "stick", "ball"]},
        {"pattern": "I carry [blank].", "answers": ["equipment", "bag", "water", "towel", "gear"]},
        {"pattern": "I clean [blank].", "answers": ["shoes", "equipment", "uniform", "gear", "ball"]},
        {"pattern": "I buy [blank].", "answers": ["new shoes", "equipment", "uniform", "ball", "gear"]},
        
        // 운동 장소
        {"pattern": "I exercise at [blank].", "answers": ["gym", "park", "home", "school", "field"]},
        {"pattern": "I train at [blank].", "answers": ["gym", "pool", "court", "field", "track"]},
        {"pattern": "I compete at [blank].", "answers": ["stadium", "arena", "court", "pool", "field"]},
        {"pattern": "I warm up [blank].", "answers": ["before game", "muscles", "body", "properly", "slowly"]},
        {"pattern": "I cool down [blank].", "answers": ["after exercise", "slowly", "properly", "muscles", "body"]},
        
        // 팀 활동
        {"pattern": "I cheer for [blank].", "answers": ["team", "friends", "winner", "everyone", "Korea"]},
        {"pattern": "I support [blank].", "answers": ["team", "teammates", "friends", "coach", "players"]},
        {"pattern": "I follow [blank].", "answers": ["rules", "coach", "captain", "referee", "instructions"]},
        {"pattern": "I respect [blank].", "answers": ["opponent", "referee", "rules", "coach", "teammates"]},
        {"pattern": "I celebrate [blank].", "answers": ["victory", "goal", "win", "success", "achievement"]},
        
        // 운동 능력
        {"pattern": "I improve [blank].", "answers": ["skills", "speed", "strength", "technique", "stamina"]},
        {"pattern": "I develop [blank].", "answers": ["muscles", "skills", "strength", "speed", "endurance"]},
        {"pattern": "I strengthen [blank].", "answers": ["body", "muscles", "arms", "legs", "core"]},
        {"pattern": "I balance [blank].", "answers": ["body", "ball", "myself", "well", "easily"]},
        {"pattern": "I stretch [blank].", "answers": ["muscles", "body", "legs", "arms", "back"]},
        
        // 경기 관련
        {"pattern": "I score [blank].", "answers": ["goal", "point", "run", "touchdown", "basket"]},
        {"pattern": "I win [blank].", "answers": ["game", "match", "race", "medal", "trophy"]},
        {"pattern": "I lose [blank].", "answers": ["game", "match", "gracefully", "sometimes", "fairly"]},
        {"pattern": "I tie [blank].", "answers": ["game", "score", "match", "shoes", "hair"]},
        {"pattern": "I compete [blank].", "answers": ["fairly", "hard", "well", "often", "seriously"]},
        
        // 건강과 안전
        {"pattern": "I protect [blank].", "answers": ["myself", "head", "body", "teammates", "goal"]},
        {"pattern": "I avoid [blank].", "answers": ["injury", "fouls", "danger", "risks", "problems"]},
        {"pattern": "I heal [blank].", "answers": ["quickly", "injury", "wounds", "bruises", "slowly"]},
        {"pattern": "I rest [blank].", "answers": ["body", "muscles", "after game", "well", "enough"]},
        {"pattern": "I hydrate [blank].", "answers": ["myself", "body", "well", "often", "properly"]},
        
        // 기타
        {"pattern": "I coach [blank].", "answers": ["team", "friends", "beginners", "kids", "players"]},
        {"pattern": "I referee [blank].", "answers": ["game", "match", "fairly", "kids", "friends"]},
        {"pattern": "I record [blank].", "answers": ["score", "time", "video", "game", "stats"]},
        {"pattern": "I analyze [blank].", "answers": ["game", "performance", "strategy", "moves", "mistakes"]},
        {"pattern": "I motivate [blank].", "answers": ["team", "myself", "friends", "players", "everyone"]}
    ],
    
    "✈️ 여행": [
        // 목적지
        {"pattern": "I visit [blank].", "answers": ["Seoul", "Busan", "Jeju", "Paris", "New York"]},
        {"pattern": "I go to [blank].", "answers": ["airport", "station", "hotel", "beach", "mountain"]},
        {"pattern": "I travel to [blank].", "answers": ["Japan", "USA", "Europe", "island", "countryside"]},
        {"pattern": "I explore [blank].", "answers": ["city", "nature", "culture", "museum", "temple"]},
        {"pattern": "I discover [blank].", "answers": ["places", "food", "culture", "history", "people"]},
        {"pattern": "I arrive at [blank].", "answers": ["hotel", "airport", "destination", "station", "port"]},
        {"pattern": "I depart from [blank].", "answers": ["home", "hotel", "airport", "station", "port"]},
        
        // 교통수단
        {"pattern": "I take [blank].", "answers": ["airplane", "train", "bus", "taxi", "subway"]},
        {"pattern": "I ride [blank].", "answers": ["bicycle", "horse", "camel", "boat", "cable car"]},
        {"pattern": "I board [blank].", "answers": ["plane", "train", "bus", "ship", "ferry"]},
        {"pattern": "I drive [blank].", "answers": ["car", "carefully", "rental car", "RV", "slowly"]},
        {"pattern": "I fly [blank].", "answers": ["airplane", "first class", "economy", "direct", "overnight"]},
        {"pattern": "I sail [blank].", "answers": ["boat", "ship", "yacht", "ferry", "ocean"]},
        
        // 숙소
        {"pattern": "I stay at [blank].", "answers": ["hotel", "hostel", "resort", "camping", "Airbnb"]},
        {"pattern": "I book [blank].", "answers": ["hotel", "flight", "room", "ticket", "tour"]},
        {"pattern": "I check in [blank].", "answers": ["hotel", "flight", "early", "late", "counter"]},
        {"pattern": "I check out [blank].", "answers": ["hotel", "room", "early", "late", "tomorrow"]},
        {"pattern": "I sleep in [blank].", "answers": ["hotel", "tent", "hostel", "bed", "room"]},
        {"pattern": "I rest at [blank].", "answers": ["hotel", "beach", "resort", "room", "pool"]},
        
        // 관광 활동
        {"pattern": "I see [blank].", "answers": ["landmarks", "monuments", "buildings", "nature", "animals"]},
        {"pattern": "I photograph [blank].", "answers": ["scenery", "buildings", "people", "food", "sunset"]},
        {"pattern": "I tour [blank].", "answers": ["city", "museum", "palace", "factory", "temple"]},
        {"pattern": "I climb [blank].", "answers": ["mountain", "tower", "stairs", "hill", "rock"]},
        {"pattern": "I swim at [blank].", "answers": ["beach", "pool", "lake", "river", "sea"]},
        {"pattern": "I hike [blank].", "answers": ["trail", "mountain", "forest", "path", "park"]},
        
        // 쇼핑과 기념품
        {"pattern": "I buy [blank].", "answers": ["souvenirs", "gifts", "postcards", "magnets", "t-shirts"]},
        {"pattern": "I shop at [blank].", "answers": ["market", "mall", "store", "airport", "street"]},
        {"pattern": "I bargain for [blank].", "answers": ["price", "discount", "souvenirs", "items", "goods"]},
        {"pattern": "I pay [blank].", "answers": ["cash", "card", "dollars", "euros", "yen"]},
        {"pattern": "I exchange [blank].", "answers": ["money", "currency", "dollars", "won", "coins"]},
        
        // 음식 체험
        {"pattern": "I try [blank].", "answers": ["local food", "street food", "new dishes", "seafood", "desserts"]},
        {"pattern": "I taste [blank].", "answers": ["wine", "cheese", "local cuisine", "specialties", "fruits"]},
        {"pattern": "I order [blank].", "answers": ["local dish", "specialty", "recommendation", "menu", "drink"]},
        {"pattern": "I enjoy [blank].", "answers": ["meal", "view", "experience", "culture", "food"]},
        
        // 여행 준비
        {"pattern": "I pack [blank].", "answers": ["suitcase", "clothes", "toiletries", "passport", "camera"]},
        {"pattern": "I prepare [blank].", "answers": ["passport", "visa", "documents", "itinerary", "money"]},
        {"pattern": "I plan [blank].", "answers": ["trip", "itinerary", "route", "schedule", "activities"]},
        {"pattern": "I research [blank].", "answers": ["destination", "hotels", "restaurants", "attractions", "culture"]},
        {"pattern": "I bring [blank].", "answers": ["camera", "map", "guidebook", "sunscreen", "medicine"]},
        
        // 여행 중 활동
        {"pattern": "I meet [blank].", "answers": ["locals", "tourists", "guide", "friends", "people"]},
        {"pattern": "I learn [blank].", "answers": ["culture", "history", "language", "customs", "traditions"]},
        {"pattern": "I speak [blank].", "answers": ["English", "local language", "slowly", "clearly", "loudly"]},
        {"pattern": "I ask [blank].", "answers": ["directions", "questions", "help", "price", "information"]},
        {"pattern": "I follow [blank].", "answers": ["map", "GPS", "guide", "signs", "directions"]},
        
        // 여행 경험
        {"pattern": "I experience [blank].", "answers": ["culture", "adventure", "nature", "food", "tradition"]},
        {"pattern": "I remember [blank].", "answers": ["trip", "moments", "people", "places", "experiences"]},
        {"pattern": "I share [blank].", "answers": ["photos", "stories", "experiences", "memories", "souvenirs"]},
        {"pattern": "I recommend [blank].", "answers": ["place", "hotel", "restaurant", "activity", "destination"]},
        {"pattern": "I miss [blank].", "answers": ["home", "family", "friends", "food", "bed"]},
        
        // 기타 여행 활동
        {"pattern": "I relax at [blank].", "answers": ["beach", "spa", "pool", "resort", "cafe"]},
        {"pattern": "I adventure in [blank].", "answers": ["jungle", "desert", "mountain", "ocean", "forest"]},
        {"pattern": "I navigate [blank].", "answers": ["city", "streets", "map", "GPS", "subway"]},
        {"pattern": "I communicate with [blank].", "answers": ["locals", "gestures", "translator", "guide", "English"]},
        {"pattern": "I adapt to [blank].", "answers": ["culture", "time zone", "weather", "food", "customs"]},
        {"pattern": "I document [blank].", "answers": ["journey", "experiences", "memories", "trip", "adventure"]},
        {"pattern": "I appreciate [blank].", "answers": ["culture", "beauty", "nature", "people", "experience"]}
    ],
    
    "👨‍👩‍👧 가족/친구": [
        // 가족 구성원
        {"pattern": "I love my [blank].", "answers": ["mom", "dad", "sister", "brother", "grandparents"]},
        {"pattern": "I hug my [blank].", "answers": ["mom", "dad", "grandma", "grandpa", "sibling"]},
        {"pattern": "I kiss my [blank].", "answers": ["mom", "dad", "baby", "pet", "family"]},
        {"pattern": "I help my [blank].", "answers": ["mom", "dad", "sister", "brother", "grandparents"]},
        {"pattern": "I obey my [blank].", "answers": ["parents", "mom", "dad", "elders", "teacher"]},
        {"pattern": "I respect my [blank].", "answers": ["elders", "parents", "teachers", "grandparents", "family"]},
        {"pattern": "I admire my [blank].", "answers": ["dad", "mom", "sister", "brother", "grandpa"]},
        
        // 가족 활동
        {"pattern": "I eat with my [blank].", "answers": ["family", "parents", "siblings", "grandparents", "relatives"]},
        {"pattern": "I play with my [blank].", "answers": ["sister", "brother", "cousin", "pet", "family"]},
        {"pattern": "I talk to my [blank].", "answers": ["mom", "dad", "family", "grandma", "grandpa"]},
        {"pattern": "I listen to my [blank].", "answers": ["parents", "grandparents", "elders", "mom", "dad"]},
        {"pattern": "I learn from my [blank].", "answers": ["parents", "grandparents", "sister", "brother", "family"]},
        {"pattern": "I cook with my [blank].", "answers": ["mom", "dad", "grandma", "family", "sister"]},
        {"pattern": "I shop with my [blank].", "answers": ["mom", "dad", "family", "sister", "grandma"]},
        
        // 친구 관계
        {"pattern": "I meet my [blank].", "answers": ["friend", "best friend", "classmate", "neighbor", "buddy"]},
        {"pattern": "I call my [blank].", "answers": ["friend", "best friend", "mom", "dad", "grandma"]},
        {"pattern": "I text my [blank].", "answers": ["friend", "mom", "dad", "sister", "brother"]},
        {"pattern": "I invite my [blank].", "answers": ["friend", "classmate", "neighbor", "cousin", "buddy"]},
        {"pattern": "I visit my [blank].", "answers": ["friend", "grandparents", "relatives", "cousin", "neighbor"]},
        {"pattern": "I trust my [blank].", "answers": ["friend", "best friend", "parents", "family", "teacher"]},
        
        // 감정 표현
        {"pattern": "I miss my [blank].", "answers": ["family", "friends", "grandparents", "pet", "home"]},
        {"pattern": "I worry about my [blank].", "answers": ["family", "friends", "pet", "sister", "brother"]},
        {"pattern": "I care for my [blank].", "answers": ["family", "friends", "pet", "siblings", "grandparents"]},
        {"pattern": "I think about my [blank].", "answers": ["family", "friends", "future", "pet", "home"]},
        {"pattern": "I dream about my [blank].", "answers": ["family", "future", "friends", "pet", "goals"]},
        {"pattern": "I pray for my [blank].", "answers": ["family", "friends", "health", "future", "world"]},
        
        // 함께하는 활동
        {"pattern": "I share with my [blank].", "answers": ["friend", "sister", "brother", "family", "classmate"]},
        {"pattern": "I laugh with my [blank].", "answers": ["friends", "family", "sister", "brother", "cousins"]},
        {"pattern": "I sing with my [blank].", "answers": ["friends", "family", "sister", "mom", "class"]},
        {"pattern": "I dance with my [blank].", "answers": ["friends", "sister", "mom", "family", "partner"]},
        {"pattern": "I study with my [blank].", "answers": ["friend", "classmate", "tutor", "sister", "brother"]},
        {"pattern": "I exercise with my [blank].", "answers": ["friend", "dad", "family", "team", "coach"]},
        
        // 특별한 순간
        {"pattern": "I celebrate with my [blank].", "answers": ["family", "friends", "classmates", "team", "neighbors"]},
        {"pattern": "I remember my [blank].", "answers": ["grandpa", "grandma", "childhood", "friends", "memories"]},
        {"pattern": "I thank my [blank].", "answers": ["parents", "teacher", "friend", "family", "god"]},
        {"pattern": "I forgive my [blank].", "answers": ["friend", "sister", "brother", "classmate", "enemy"]},
        {"pattern": "I apologize to my [blank].", "answers": ["friend", "parents", "teacher", "sister", "brother"]},
        
        // 펫 관련
        {"pattern": "I feed my [blank].", "answers": ["dog", "cat", "fish", "bird", "hamster"]},
        {"pattern": "I walk my [blank].", "answers": ["dog", "pet", "puppy", "friend's dog", "neighbor's dog"]},
        {"pattern": "I pet my [blank].", "answers": ["cat", "dog", "rabbit", "hamster", "guinea pig"]},
        {"pattern": "I train my [blank].", "answers": ["dog", "pet", "puppy", "bird", "cat"]},
        {"pattern": "I bathe my [blank].", "answers": ["dog", "cat", "pet", "puppy", "bird"]},
        {"pattern": "I play with my [blank].", "answers": ["dog", "cat", "pet", "hamster", "rabbit"]},
        
        // 도움과 지원
        {"pattern": "I support my [blank].", "answers": ["friend", "family", "team", "sister", "brother"]},
        {"pattern": "I encourage my [blank].", "answers": ["friend", "sister", "brother", "teammate", "classmate"]},
        {"pattern": "I protect my [blank].", "answers": ["sister", "brother", "friend", "family", "pet"]},
        {"pattern": "I comfort my [blank].", "answers": ["friend", "sister", "mom", "pet", "brother"]},
        {"pattern": "I defend my [blank].", "answers": ["friend", "sister", "brother", "family", "team"]},
        
        // 의사소통
        {"pattern": "I chat with my [blank].", "answers": ["friend", "family", "neighbor", "classmate", "cousin"]},
        {"pattern": "I argue with my [blank].", "answers": ["sister", "brother", "friend", "classmate", "cousin"]},
        {"pattern": "I agree with my [blank].", "answers": ["friend", "parents", "teacher", "sister", "brother"]},
        {"pattern": "I disagree with my [blank].", "answers": ["friend", "sister", "brother", "classmate", "opinion"]},
        {"pattern": "I discuss with my [blank].", "answers": ["parents", "teacher", "friend", "family", "group"]},
        
        // 기타 관계
        {"pattern": "I introduce my [blank].", "answers": ["friend", "family", "pet", "sister", "brother"]},
        {"pattern": "I describe my [blank].", "answers": ["family", "friend", "pet", "home", "life"]},
        {"pattern": "I appreciate my [blank].", "answers": ["family", "friends", "life", "blessings", "opportunities"]},
        {"pattern": "I depend on my [blank].", "answers": ["parents", "family", "friends", "teacher", "god"]},
        {"pattern": "I belong to my [blank].", "answers": ["family", "class", "team", "group", "community"]}
    ]
};
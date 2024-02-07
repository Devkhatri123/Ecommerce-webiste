

const products = [

    // {
    //     id: 438341,
    //     name: "LEVOIT Air Purifiers for Home Large Room Up to 1980 Ft² in 1 Hr With Air Quality Monitor, Smart WiFi and Auto Mode, 3-in-1 Filter Captures Pet Allergies, Smoke, Dust, Pollen, Core 400S, White",
    //     front_image: "https://m.media-amazon.com/images/I/71TZMF8-wuL._AC_SX679_.jpg",
    //     other_image1: "https://m.media-amazon.com/images/I/51hWqy5FyHL._AC_US75_.jpg",
    //     other_image2: "https://m.media-amazon.com/images/I/41JCyI3mK0L._AC_US75_.jpg",
    //     other_image3: "https://m.media-amazon.com/images/I/51tyt4v3TUL._AC_US75_.jpg",
    //     price: 186,
    //     about_item: "The top-performing Levoit Core 400S Smart Air Purifier can purify large rooms, such as bedrooms, living rooms, kitchens, and basements. Purify a 403 ft² room 5x per hour and a 1980 ft² room 1x per hour,The laser dust sensor scans the surrounding air for airborne particles, continuously updating the PM2.5 display and creating graphs in the VeSync app so you can see how your air quality has improved,",
    //     incart: 0,
    //     category: "homeproduct",
    // },
    // {
    //     id: 438453340,
    //     name: "Shark HV301 Rocket Ultra-Light Corded Bagless Vacuum for Carpet and Hard Floor Cleaning with Swivel Steering, Gray/Orange",
    //     front_image: "https://m.media-amazon.com/images/I/31Qy05Z6z-L._AC_US75_.jpg",
    //     other_image1: "https://m.media-amazon.com/images/I/51cTab7e6fL._AC_US75_.jpg",
    //     other_image2: "https://m.media-amazon.com/images/I/51Wd8tEHJZL._AC_US75_.jpg",
    //     other_image3: "https://m.media-amazon.com/images/I/51JuVcl2tqL._AC_US75_.jpg",
    //     price: 99,
    //     about_item: "Never loses suction or power.Specific uses:Stairs,Furnitures.Amperage : 4.2 ampsCleans carpets and bare floorsLightweight - only 7 pounds. Amps- 4.2. Wattage- 500 Versatile floor to ceiling cleaning Never Loses Suction or Power Cleans Bare Floors and Deep Cleans Carpets Lightweight Versatile Floor to Ceiling Cleaning Swivel Steering",
    //     incart: 0,
    //     category: "homeproduct",
    // },
    // {
    //     id: 43821541,
    //     name: "Shark AI Ultra Voice Control Robot Vacuum with Matrix Clean Navigation, Home Mapping, 60-Day Capacity, Self-Empty Base for Homes with Pets, Carpet & Hard Floors (Silver/Black)",
    //     front_image: "https://m.media-amazon.com/images/I/418178B1XvL._AC_US75_.jpg",
    //     other_image1: "https://m.media-amazon.com/images/I/51H4Y88xMzL._AC_US75_.jpg",
    //     other_image2: "https://m.media-amazon.com/images/I/51TNH21efqL._AC_US75_.jpg",
    //     other_image3: "https://m.media-amazon.com/images/I/41z4v5H5tLL._AC_US75_.jpg",
    //     price: 298,
    //     about_item: "INCREDIBLE SUCTION: Powerful Shark suction picks up dirt and debris on all floor types—tackling even the toughest of messes in your home.SharkClean App & Voice Control,PRECISION HOME MAPPING: 360° LiDAR vision quickly and accurately maps your home so your robot can methodically clean detecting and avoiding objects in its path, day or night, adapting to everyday changes in the home.",
    //     incart: 0,
    //     category: "homeproduct",
    // },
    // {
    //     id: 5803841,
    //     name: "Hamilton Beach Fresh Grind Electric Coffee Grinder for Beans, Spices and More, Stainless Steel Blades, Removable Chamber, Makes up to 12 Cups, White",
    //     front_image: "https://m.media-amazon.com/images/I/31mE0Cdy6OL._AC_US75_.jpg",
    //     other_image1: "https://m.media-amazon.com/images/I/41+BteVSnjL._AC_US75_.jpg",
    //     other_image2: "https://m.media-amazon.com/images/I/51nIrXMMhpL._AC_US75_.jpg",
    //     other_image3: "https://m.media-amazon.com/images/I/41q9hkk8zWL._AC_US75_.jpg",
    //     price: 18,
    //     about_item: "EASY CLEANUP — DISHWASHER SAFE GRINDING BOWL: The grinding bowl on this coffee bean grinder is designed with a durable stainless steel base. The bowl is removable for easy filling and pouring and is dishwasher safe.GRIND ENOUGH TO BREW UP TO 12 CUPS OF COFFEE: If you love the delicious taste of coffee made from freshly ground beans, this electric coffee grinder is perfect for the job whether you're grinding coffee for a quick cup or a full pot",
    //     incart: 0,
    //     category: "homeproduct",
    // },
    // {
    //     id: 8753341,
    //     name: "BELIZZI HOME 100% Cotton Ultra Soft 6 Pack Towel Set, Contains 2 Bath Towels 28x55 inchs, 2 Hand Towels 16x24 inchs & 2 Washcloths 12x12 inchs, Compact Lightweight & Highly Absorbant - Charcoal Grey",
    //     front_image: "https://m.media-amazon.com/images/I/51sT4ZahMdL._AC_US75_.jpg",
    //     other_image1: "https://m.media-amazon.com/images/I/512mhGYZUIL._AC_US75_.jpg",
    //     other_image2: "https://m.media-amazon.com/images/I/41mX0koCcHL._AC_US75_.jpg",
    //     other_image3: "https://m.media-amazon.com/images/I/41n73M6xNgL._AC_US75_.jpg",
    //     price: 10,
    //     about_item: "Each set contains 2 oversized bath towels 28x55 inches, 2 hand towels 16x24 inches & 2 wash cloths 12x12 inches 100% Pure cotton for softness, absorbency & durability - Outdoor Lightweight Quick Dry Towel Set Complimented set for daily use, hotel & spa, quick drying & multipurpose usage 100% Natural materials & free from harmful chemicals / materials - safe for you & your family Machine washable & dryable, wash in cold water, tumble dry low - wash separately before first use",
    //     incart: 0,
    //     category: "homeproduct",
    // },
    // {
    //     id: 1945134,
    //     name: "Home Zone Living 1.3 Gallon Bathroom Trash Can, Slim Stainless Steel, Step Pedal, 5 Liter",
    //     front_image: "https://m.media-amazon.com/images/I/51fmFyfQUoL._AC_UY327_FMwebp_QL65_.jpg",
    //     other_image1: "https://m.media-amazon.com/images/I/312gYyQN8rL._SX38_SY50_CR,0,0,38,50_.jpg",
    //     other_image2: "https://m.media-amazon.com/images/I/31C1MjJsCgL._SX38_SY50_CR,0,0,38,50_.jpg",
    //     other_image3: "https://m.media-amazon.com/images/I/41ZpZubUy8L._SX38_SY50_CR,0,0,38,50_.jpg",
    //     price: 24,
    //     about_item: "Bathroom Trash Can – With 5 liters of capacity and a slim rectangular shape, this can be placed in tight spots around the restroom as well as an office near a deskEasy Bag Swaps – The removable inner liner with handle allows for quick and pain-free bag swaps as well as easy clean upSlim Body Style – The rectangular style is designed to fit in tight spaces around the bathroom and also provide a quicker access when placing against the side of a toilet or cabinet wallSilent and Slow Close Lid – Our reinforced hinge controls the motion of the lid to ensure soft and secure closureFingerprint Resistant Finish – The stainless steel exterior provides a fingerprint and smudge resistant finish to keep the trash looking like new",
    //     incart: 0,
    //     category: "homeproduct",
    // },
    // {
    //     id: 89384341,
    //     name: "HomeGEEORY Valentine's Day Pillow Covers 18 x 18 Inch Set of 4, Valentines Polka Dots Red Hearts Love Decorative Pillowcases for Home Sofa Couch Cushion Decoration G446-18",
    //     front_image: "https://m.media-amazon.com/images/I/51c6b59bGLL._AC_US75_.jpg",
    //     other_image1: "https://m.media-amazon.com/images/I/51CKnUJ6aeL._AC_US75_.jpg",
    //     other_image2: "https://m.media-amazon.com/images/I/51YMfNzwIhL._AC_US75_.jpg",
    //     other_image3: "https://m.media-amazon.com/images/I/31luselVMpL._AC_US75_.jpg",
    //     price: 24,
    //     about_item: "Polyester[Package Includes]:Set of 4 GEEORY Valentine's Day Pillow Covers (Insert or filler not included). These pillow covers are designed to fit 18x18 inch inserts or smaller, with the pattern exclusively featured on the front and no printing on the back.[Premium Quality & Easy Care]: Crafted from high-quality polyester, our pillow covers are built to withstand the test of time without any color bleeding, fading, or fraying. They are also machine washable for easy cleaning, making them a practical and long-lasting addition to your home.,[Invisible Zipper Design]: Experience seamless style with our Valentines Day pillow cases, featuring a hidden zipper closure for a refined touch. Effortlessly insert your pillows and achieve a polished look for your love-filled decor",
    //     incart: 0,
    //     category: "homeproduct",
    // },
    // {
    //     id: 78504301,
    //     name: "O-Cedar Easywring Microfiber Spin Mop & Bucket Floor Cleaning System with 3 Extra Refills",
    //     front_image: "https://m.media-amazon.com/images/I/51vzZh3I9XL._AC_US75_.jpg",
    //     other_image1: "https://m.media-amazon.com/images/I/41TIoLnNX+S._AC_US75_.jpg",
    //     other_image2: "https://m.media-amazon.com/images/I/41w7fj8DfRL._AC_US75_.jpg",
    //     other_image3: "https://m.media-amazon.com/images/I/41z26GF94WL._AC_US75_.jpg",
    //     price: 42,
    //     about_item: "REMOVES OVER 99% OF BACTERIA W/ JUST WATER: O-Cedar's EasyWring Microfiber Spin Mop & Bucket Floor Cleaning System provides a deep-cleaning solution for all your at home needs by effectively removing dirt, grime and over 99% of bacteria with just water! It is safe on all hard floor surfaces, including finished hardwood, wood, laminate, tile, vinyl, and more.HANDS-FREE WRINGING: Our exclusive mop bucket design features a built-in wringer that allows for hands-free wringing while Splash Guard keeps water splash and spray inside the bucket when wringing or when transporting the bucket from room to room.WASHABLE & REUSABLE MOP REFILLS: The EasyWring Microfiber Mop Head can be machine washed and reused! Keep an extra refill handy for the next mess.",
    //     incart: 0,
    //     category: "homeproduct",
    // },
    // {
    //     id: 73490301,
    //     name: "Seachrome 24-inch Coronado Designer Straight Bathroom Shower Grab Bar, Stainless Steel, Polished Chrome",
    //     front_image: "https://m.media-amazon.com/images/I/2137BQcrtDL._AC_US75_.jpg",
    //     other_image1: "https://m.media-amazon.com/images/I/31y2yM-+dbL._AC_US75_.jpg",
    //     other_image2: "https://m.media-amazon.com/images/I/41innilcPyL._AC_US75_.jpg",
    //     other_image3: "https://m.media-amazon.com/images/I/31Sk+xli0CL._AC_US75_.jpg",
    //     price: 82.49,
    //     about_item: "DIMENSIONS: The overall straight grab bar measures 24 inches in length, 19 inches center to center of the flange, 1.25 inches in bar diameter for easy secure grasp, and has stylish 3-inch concealed flange covers to hide the mounting hardware for a clean seamless lookSTYLISH FINISH: The Coronado grab bar has a polished chrome finish that is highly reflective for a mirror-like look, offering a sleek contemporary design that will elevate your bathroom’s style with an elegant and timeless appeal while providing safety and securitySUPPORTIVE DESIGN: Designed for those with limited mobility, balance issues, or difficulty standing for long periods of time, the stainless-steel grab bar provides greater leverage and support in the bathroom or any place a grab bar may be useful to minimize the risk of slips and falls. The Coronado grab bar is carefully designed to provide safety and security without sacrificing style",
    //     incart: 0,
    //     category: "homeproduct",
    // },
    // {
    //     id: 73450301,
    //     name: "Eatex Nonstick Bakeware Sets with Baking Pans Set, 39 Piece Baking Set with Muffin Pan, Cake Pan & Cookie Sheets for Baking Nonstick Set, Steel Baking Sheets for Oven with Kitchen Utensils Set - Black",
    //     front_image: "https://m.media-amazon.com/images/I/51bhBCMXk+L._AC_US75_.jpg",
    //     other_image1: "https://m.media-amazon.com/images/I/51jLlIRDDdL._AC_US75_.jpg",
    //     other_image2: "https://m.media-amazon.com/images/I/51LfTLAWoSL._AC_US75_.jpg",
    //     other_image3: "https://m.media-amazon.com/images/I/510DugVfEEL._AC_US75_.jpg",
    //     price: 68.13,
    //     about_item: "Carbon Steel & Silicone15-PIECE BAKEWARE SET: The 15-Piece Baking Pan Set offers a complete durable nonstick bakeware set. Includes baking pan, pizza pan, small cookie sheet, 2 round pans, square pan, loaf pan, big cookie sheet, 12 & 24 cup muffin pans, and 5 silicone spatualas.24 Piece Cooking Utensil Set- Includes, can opener, turner, slotted turner, spoon, slotted spoon, ladel, whisk, spatula, grater, tongs, measuring cups, measuring sppons, potato masher, ice cream scoop, wine opener, apple corer.LASTING NONSTICK COATING: The baking pans feature long-lasting nonstick coating inside and out to provide excellent food release with quick cleanup. Made from durable & BPA-free carbon steel metal & it’s shielded w/ non-stick coating that eliminates the need for butter, oil, or cooking spray. the Non-Stick coating is also scratch-resistant",
    //     incart: 0,
    //     category: "homeproduct",
    // },
    // {
    //     id: 43670301,
    //     name: "Honeywell HPA200 HEPA Air Purifier for Large Rooms - Microscopic Airborne Allergen+ Reducer, Cleans Up To 1500 Sq Ft in 1 Hour - Wildfire/Smoke, Pollen, Pet Dander, and Dust Air Purifier – Black",
    //     front_image: "https://m.media-amazon.com/images/I/51lHHMYKu5L._AC_US75_.jpg",
    //     other_image1: "https://m.media-amazon.com/images/I/41+OMrgBNLL._AC_US75_.jpg",
    //     other_image2: "https://m.media-amazon.com/images/I/71bvHM-phRL._AC_SX679_.jpg",
    //     other_image3: "https://m.media-amazon.com/images/I/41SeCgGCg2L._AC_US75_.jpg",
    //     price: 68.13,
    //     about_item: "Made in USA LARGE ROOM AIR PURIFIER - Honeywell HPA200 HEPA Air Purifier helps provide fresher, cleaner air in minutes. Cleans up to 1500 sq ft in 60 mins (1 ACH), for powerful large room coverage. Provides 4.8 air exchanges per hr in AHAM suggested room size of 310 sq ft IDEAL FOR WILDFIRE SEASON: Wildfire smoke can impact the air quality where you live, even if you don’t live anywhere near the fires themselves. Because smoke contains extremely small particles, air purifiers can help remove some of these particles¹ from your air.",
    //     incart: 0,
    //     category: "homeproduct",
    // },
    {
        id: 4382,
        name: "Legendary Whitetails Men",
        front_image: "81I-Wxh7yyS._AC_UX679_-removebg-preview.png",
        other_image1: "https://m.media-amazon.com/images/I/41Tq-xv6nQS._AC_SR38,50_.jpg",
        other_image2: "https://m.media-amazon.com/images/I/41FEoLejLyS._AC_SR38,50_.jpg",
        other_image3: "https://m.media-amazon.com/images/I/41Ty7DIrVpS._AC_SR38,50_.jpg",
        price: 37.00,
        about_item: "Distressed seams for a rugged lookEasy-moving raglan long sleeve Soft, sueded finis 4-button placket for easy on/of Legendary label at hem Care instructions-Non-chlorine bleach only. Tumble dry low. Low iron",
        incart: 0,
        category: "Clothes" || "shirts",
    },
    {
        id: 4383,
        name: "Wrangler Authentics Men's",
        front_image: "A1TR2w-J0mL._AC_UX522_-removebg-preview.png",
        other_image1: "https://m.media-amazon.com/images/I/41ek4fFJzRL._AC_SR38,50_.jpg",
        other_image2: "https://m.media-amazon.com/images/I/41y+ouUGvAL._AC_SR38,50_.jpg",
        other_image3: "https://m.media-amazon.com/images/I/415O0TqfKqL._AC_SR38,50_.jpg",
        price: 28.00,
        about_item: "RELAXED FIT: Constructed with comfort in mind, this long sleeve quilted lined flannel shirt is a wardrobe essential for those cold Winter nights.HEAVYWEIGHT MATERIALS: Built with button cuffs and quilted polyester padding for more durability and added warmth.FOR ADDED WARMTH: Padded with diamond black quilted polyester to create extra warmth while also creating breathability, this is an extremely versatile flannel shirt.FUNCTIONAL STYLE: Lined with 100% cotton, this brushed flannel is made with style in mind. Wear it on the job or out to lunch, this essential closet staple can be worn for many occasions.ADDED STORAGE: Constructed with (2) dual front chest pockets and (2) side seam pockets, this flannel has easy-access storage for all your basic necessities.",
        incart: 0,
        category: "Clothes" || "shirts",
    },
    {
        id: 4384,
        name: "Amazon Essentials Slim-Fit",
        front_image: "71pjVOrWUEL._AC_UL1500_-removebg-preview.png",
        other_image1: "https://m.media-amazon.com/images/I/51jca6veXdL._AC_SR38,50_.jpg",
        other_image2: "https://m.media-amazon.com/images/I/41yoz2ORIML._AC_SR38,50_.jpg",
        other_image3: "https://m.media-amazon.com/images/I/41LhdEn2RqL._AC_SR38,50_.jpg",
        price: 16.00,
        about_item: "SLIM FIT: Slim fit through the shoulders, chest, and waist.LIGHTWEIGHT T-SHIRT JERSEY: Soft and comfortable knit fabric for a go-to lightweight t-shirt.HENLEY T-SHIRT: The perfect alternative to your favorite t shirt. Pair this super soft henley with jeans or chinos for comfortable everyday style.DETAILS: Ribbed neck and sleeve hem trim, raglan sleeve with sturdy overlock stitching, and shirttail hem.",
        incart: 0,
        category: "Clothes" || "shirts",
    },
    {
        id: 4385,
        name: "Van Heusen Men's Wrinkle Free shirt",
        front_image: "1098381_White-removebg-preview.png",
        other_image1: "https://m.media-amazon.com/images/I/51xGBjBq0ZL._AC_SR38,50_.jpg",
        other_image2: "https://m.media-amazon.com/images/I/41d0k4ojb6L._AC_SR38,50_.jpg",
        other_image3: "https://m.media-amazon.com/images/I/31Qugnhm3JL._AC_SR38,50_.jpg",
        price: 35.00,
        about_item: "Easy Care: Machine washable so you can wear it straight from the dryerWrinkle-free and machine washable to wear straight from the dryerNon Iron: wrinkle-resistant finish requires no additional ironingThis classic long sleeve button down will give your look a timeless feelAlso available in Big and Tall sizes",
        incart: 0,
        category: "Clothes" || "shirts",
    },
    {
        id: 4386,
        name: "Hanes Men’s X-Temp Short",
        front_image: "61VsyeOVtpL._UL1500_-removebg-preview.png",
        other_image1: "https://m.media-amazon.com/images/I/41OnbzoNLZL._AC_SR38,50_.jpg",
        other_image2: "https://m.media-amazon.com/images/I/41-dC8sw-nL._AC_SR38,50_.jpg",
        price: 9.00,
        about_item: "SO SOFT - Midweight pique fabric feels super-soft up against your skin.KEEPS YOU COMFORTABLE - X-Temp technology is designed to keep you cool and dry, no matter what the day brings.ODOR CONTROL - FreshIQ advanced odor protection technology attacks the odor-causing bacteria in your clothing.STAY-FLAT COLLAR - Classic polo style featuring a ribbed stay-flat collar.FRONT BUTTON PLACKET – Men’s shirts are accented with a tailored 3-button placket.TEARAWAY TAG - Simply remove the tearaway tag for itch-free comfort.",
        incart: 0,
        category: "Clothes" || "shirts",
    },
    {
        id: 4387,
        name: "Champion Men's T-Shirt",
        front_image: "rrflrgcskeswvzwanhrr-removebg-preview.png",
        other_image1: "https://m.media-amazon.com/images/I/31fcu+8opLL._AC_SR38,50_.jpg",
        other_image2: "https://m.media-amazon.com/images/I/313e2pyqwEL._AC_SR38,50_.jpg",
        other_image3: "https://m.media-amazon.com/images/I/51y2NqvXa9L._AC_SX679_.jpg",
        price: 13.00,
        about_item: "THE FIT - Standard-fit men's t-shirt. THE FEEL - Comfortable, 5.5 oz cotton or cotton blend that's been ring-spun for softness. YOU'VE GOT OPTIONS - From bold colors to basic black t-shirts for men. THE GRAPHIC - Classic script sits on the chest of this men's tee. SPOT THE C - Iconic C logo patch hits at the sleeve. EASY CARE - Machine wash this men's t-shirt on cold with like colors for easy care that reduces energy use.",
        incart: 0,
        category: "Clothes" || "shirts",
    },

    {
        id: 5001,
        name: "SAMSUNG Galaxy Z Fold5",
        front_image: "https://m.media-amazon.com/images/I/61LyIe34PVL._AC_UY327_FMwebp_QL65_.jpg",
        other_image1: "https://m.media-amazon.com/images/I/31JN3dnDOzL._AC_US40_.jpg",
        other_image2: "https://m.media-amazon.com/images/I/31hU8D3KSTL._AC_US40_.jpg",
        hover_img: "",
        price: 75.00,
        about_item: "MEET THE NEW, SLIMMER S PEN*: The Slim S Pen Case features a built-in S Pen slot that allows you to carry your pen while maintaining your phone's slim profileVIBRANT COLOR OPTIONS: With vibrant color options, the phone case is a stylish solution to store your S Pen without adding extra bul PROTECTION WITH A PURPOSE: The case also contains eco-conscious material — providing protection with a purpose* S PEN AT THE READY: The new, built-in S Pen is ready to use at the push of a button, so you can quickly write and sketch with amazing precision***; When it's time to store it just slide it back into place with a click",
        incart: 0,
        category: "Phones",
    },
    {
        id: 5002,
        name: "Apple iPhone 12 Pro Max",
        front_image: "29522671111-removebg-preview.png",
        other_image1: "https://m.media-amazon.com/images/I/31OTmggqtkL._AC_SR38,50_.jpg",
        other_image2: "https://m.media-amazon.com/images/I/31hU8D3KSTL._AC_US40_.jpg",
        price: 618.00,
        about_item: "Unlocked and compatible with any carrier of choice on GSM and CDMA networks (e.g. AT&T, T-Mobile, Sprint, Verizon, US Cellular, Cricket, Metro, Tracfone, Mint Mobile, etc.).Tested for battery health and guaranteed to come with a battery that exceeds 90% of original capacity.Inspected and guaranteed to have minimal cosmetic damage, which is not noticeable when the device is held at arm's length. Successfully passed a full diagnostic test which ensures like-new functionality and removal of any prior-user personal information.Includes a brand new, generic charging cable that is certified Mfi (Made for iPhone) and a brand new, generic wall plug that is UL certified for performance and safety. Also includes a SIM tray removal tool but does not come with headphones or a SIM card.Backed by a one-year satisfaction guarantee.",
        incart: 0,
        category: "Phones",
    },
    {
        id: 5003,
        name: "Google Pixel 7a",
        // front_image:  "https://m.media-amazon.com/images/I/41c-2s9NEuL._AC_US75_.jpg",
        front_image: "google-pixel-6a-5g128gb-green-smartphone-removebg-preview.png",
        other_image1: "https://m.media-amazon.com/images/I/51JyeblOx4L._AC_SR38,50_.jpg",
        other_image2: "https://m.media-amazon.com/images/I/51-pxtOjUhL._AC_SR38,50_.jpg",
        other_image2: "https://m.media-amazon.com/images/I/510FnM9U6bL._AC_SR38,50_.jpg",
        price: 499.00,
        about_item: "Google Pixel 7a is fast and efficient, with 8 GB of RAM, an amazing camera, and features rated highest in security[1].SIM card slot count: Dual SIM Pixel’s fast-charging all-day battery can last over 24 hours, or up to 72 hours when you turn on Extreme Battery Saver[2]; it also charges wirelessly With the Pixel Camera and Google Tensor G2’s advanced image processing, it’s easy to take great pictures in low light, fix blurry images, and remove distractions with a few taps in Google Photos[3] With Pixel Call Assist, you can get help making calls, avoiding spammers, and waiting on hold[4]; plus, Pixel 7a can filter out your caller’s background noise so you can hear them clearly even in noisy places Open your Pixel 7a quickly and securely with Face Unlock or Fingerprint Unlock",
        incart: 0,
        category: "Phones",
    },
    {
        id: 5004,
        name: "iPhone 13 Pro, 256GB",
        front_image: "Iphone-13-Pro-Silver-1Tb-in-qatar-600x600w-removebg-preview.png",
        other_image1: "https://m.media-amazon.com/images/I/31XceqtfhjL._AC_SR38,50_.jpg",
        other_image2: "https://m.media-amazon.com/images/I/410YZFEACNL._AC_SR38,50_.jpg",
        other_image2: "https://m.media-amazon.com/images/I/41YFZLBReML._AC_SR38,50_.jpg",
        price: 681.00,
        about_item: "Unlocked Tested for battery health and guaranteed to come with a battery that exceeds 90% of original capacity. Inspected and guaranteed to have minimal cosmetic damage, which is not noticeable when the device is held at arm’s length. Successfully passed a full diagnostic test which ensures like-new functionality and removal of any prior-user personal information. Includes a brand new, generic charging cable that is certified Mfi (Made for iPhone) and a brand new, generic wall plug that is UL certified for performance and safety. Also includes a SIM tray removal tool but does not come with headphones or a SIM card. Backed by the same one-year satisfaction guarantee as brand new Apple products.",
        incart: 0,
        category: "Phones",
    },
    {
        id: 5005,
        name: "Apple iPhone 15 Pro, 512GB",
        front_image: "iphone-13-mini-rosa-removebg-preview.png",
        other_image1: "https://m.media-amazon.com/images/I/31sj4NU-oLL._AC_SR38,50_.jpg",
        other_image2: "https://m.media-amazon.com/images/I/31sj4NU-oLL._AC_SR38,50_.jpg",
        price: 1182.00,
        about_item: "6.1inch Super Retina XDR display. ProMotion technology. Always-On display. Titanium with textured matte glass back. Action buttonDynamic Island. A magical way to interact with iPhone. A17 Pro chip with 6-core GPUPro camera system. 48MP Main | Ultra Wide| Telephoto. Super-high-resolution photos (24MP and 48MP). Next-generation portraits with Focus and Depth Control. Up to 10x optical zoom rangeEmergency SOS via satellite. Crash Detection. Roadside Assistance via satelliteUp to 29 hours video playback. USB-C, Supports USB 3 for up to 20x faster transfers. Face ID",
        incart: 0,
        category: "Phones",
    },
    {
        id: 5006,
        name: "Google Pixel 7a ",
        front_image: "62272f00-8b10-4a9b-bad1-4b5fd047ce07.9f271fa0ea2152aa6d4262fbb437cc8c-removebg-preview.png",
        other_image1: "https://m.media-amazon.com/images/I/51JyeblOx4L._AC_SR38,50_.jpg",
        other_image2: "https://m.media-amazon.com/images/I/51nrmB5loSL._AC_SR38,50_.jpg",
        other_image3: "https://m.media-amazon.com/images/I/510FnM9U6bL._AC_SR38,50_.jpg",
        price: 499.00,
        about_item: "Fast Charging: Pixel 7a has a 24-hour battery life and supports fast charging up to 72 hours with Extreme Battery Saver turned on.Advanced Camera: Pixel 7a has a 6.1-inch OLED display with 1080p video capture and a 64MP rear camera that performs well in low light.Security Features: Pixel 7a has a 6.1-inch OLED display with 1080p video capture and a 64MP rear camera that performs well in low light. It also has a biometric fingerprint sensor for quick unlocking.Wireless Connectivity: Pixel 7a supports NFC, Wi-Fi, USB, and Bluetooth for easy connectivity to other devices.Water Resistant Design: Pixel 7a has a water-resistant design that allows you to use it even in rainy or wet conditions.Long Battery Life: Pixel 7a has a 4385mAh battery that provides up to 24 hours of use per charge, with the option to extend battery life up to 72 hours with Extreme Battery Saver.Dual SIM Card Slots: Pixel 7a has dual SIM card slots for convenient use with two separate phone numbers.",
        incart: 0,
        category: "Phones",
    },
    {
        id: 5007,
        name: "SAMSUNG Galaxy S23+",
        front_image: "3-420x420-removebg-preview.png",
        other_image1: "https://m.media-amazon.com/images/I/51+JkQvplML._AC_SR38,50_.jpg",
        other_image2: "https://m.media-amazon.com/images/I/51TfoNHnuLL._AC_SR38,50_.jpg",
        other_image3: "https://m.media-amazon.com/images/I/51IoagjVwvL._AC_SR38,50_.jpg",
        price: 1120.00,
        about_item: "CAPTURE THE NIGHT IN LOW LIGHT: Whether you’re headed to a concert or romantic night out, there’s no such thing as bad lighting with Night Mode; Galaxy S23+ lets you capture epic content in any setting with stunning NightographyHIGH CAMERA RESOLUTION: Create crystal-clear content worth sharing with the 50MP high-resolution camera of Galaxy S23+; Whether you’re posting or printing, Galaxy S23+ always does the moment justiceFASTEST MOBILE PROCESSOR AVAILABLE: Whether you’re working hard, playing hard or doing both at the same time, smoothly switch between apps with our fastest processor everUNLOCK SMOOTH GAMING: Game at full throttle and smoothly switch between apps; Get more done with our fastest processor ever combined with massive internal storage; And if you’re on the move, keep going with a screen that adapts to your environmentPOWER TO KEEP MOVING YOU FORWARD: Confidently binge-watch, game or surf without worrying about your phone dying; The impressive 4,700mAh battery* will keep you going longer**MORE STORAGE. MORE MEMORIES: You’re good on storage space; With an impressive amount of storage, starting at 256GB, you can enjoy being behind the camera without the stress that comes with getting close to filling up your phoneADAPTIVE DISPLAY: Watch your content comfortably as Adaptive Vision Booster helps your screen adapt to your environment; Whether out in direct sunlight or in bed with the lights off, the contrast on Galaxy S23+’s expansive screen still looks amazing",
        incart: 0,
        category: "Phones",
    },
    {
        id: 5008,
        name: " Samsung Galaxy A03s, 32GB",
        front_image: "37211659086297-removebg-preview.png",
        other_image1: "https://m.media-amazon.com/images/I/4132icEzZ5L._AC_SR38,50_.jpg",
        other_image2: "https://m.media-amazon.com/images/I/51ueFkETA8L._AC_SR38,50_.jpg",
        other_image3: "https://m.media-amazon.com/images/I/41iiKEmx1mL._AC_SR38,50_.jpg",
        price: 45.00,
        about_item: "Carrier: This phone is locked to Total by Verizon, which means this device can only be used on the Total by Verizon wireless network.5MP Front Camera.6.5 inches HD+ LCD display and 5,000mAh battery | 7.75W charging.Mediatek Helio P35 Processor. 3GB Ram | 32GB Storage.Compatible with our no-contract talk, text & data plans that start at $30/mo.",
        incart: 0,
        category: "Phones",
    },
    {
        id: 5009,
        name: "Motorola Moto G Stylus 5G",
        front_image: "motorola_edge_X30-removebg-preview.png",
        other_image1: "https://m.media-amazon.com/images/I/41qjUIeOBYL._AC_SR38,50_.jpg",
        other_image2: "https://m.media-amazon.com/images/I/31MFPZLEthL._AC_SR38,50_.jpg",
        other_image3: "https://m.media-amazon.com/images/I/31vUhX6HbJL._AC_SR38,50_.jpg",
        price: 135.00,
        about_item: "Carrier compatibility: AT and T: 4G, VoLTE 5G support planned via MR, Verizon: 5G sub6 NSA, VoLTE, T Mobile: 5G sub6 SA/NSA, VoLTE, WiFi Calling, Video Calling, Tracfone: GSM, CDMA, Spectrum: 5G sub6 NSA, VoLTE, WiFi Calling. Does not support: U.S. Cellular, Republic Wireless, Xfinity Wireless..Other camera description:48 MP Quad Camera System.Bluetooth Technolog : Bluetooth 5.1.VOICE CONTROL : Google Assistant. SECURITY : Side fingerprint reader. Qualcomm Snapdragon 480 5G processor. Ultra-fast performance. Feel the blazing-fast responsiveness of 5G speed. Upgrade to the next generation of wireless connectivity for ultra-fast streaming and downloads.",
        incart: 0,
        category: "Phones",
    },

];
let cart = []
let homeproduct = document.querySelectorAll(".atag");
let product = document.getElementsByClassName("product")[0];
let product_row_container = document.getElementsByClassName("product_row_container")[0];
let product_row_container1 = document.getElementsByClassName("product_row_container1")[0];
let product_row_container2 = document.getElementsByClassName("product_row_container2")[0];
let increment = document.getElementsByClassName("price_increment")[0];
let quantity = document.getElementsByClassName("quantity")[0];
let search = document.getElementById("search");
let span = document.getElementById("span");
let nav = document.getElementById("nav");
let btn = document.getElementsByClassName("btn");
let product_cotainer = document.getElementsByClassName("product_cotainer")[0];
let Search = document.getElementById("search");
let search_container = document.getElementById("search_container");
let cartNumber = document.getElementById("cartNumber");
let Close = document.getElementById("close");
let header = document.getElementById("header");
let main = document.getElementById("main");
let container = document.getElementById("container");
let buttonCheckout = document.getElementsByClassName("buttonCheckout");
let modal = document.getElementById("modal");
let searchedproduct_container = document.getElementById("product_row_container");
let search_result = document.getElementById("search_result");
let search_product = document.getElementById("search_product");
let results = document.getElementById("results");
let right = document.getElementById("right");
// console.log(products);
let filteredproduct = products.filter((val) => {
    return val.category == "homeproduct";
});
let FilteredHomeproduct = products.filter((val) => {
    return val.category == "homeproduct";
})
// console.log(filteredproduct);
let FilteredCloth = products.filter((val) => {
    return val.category == "Clothes";
});
// console.log(FilteredCloth);
let Phones = products.filter((val) => {
    return val.category == "Phones";
});
let limited = 5
let few_Phones = Phones.slice(0, 6);
// console.log(Phones)
let headingDisplayed = false;
// console.log(nav);
function Getphones() {
    Phones.map((val) => {
        // product_row_container.innerHTML += "";
        product_row_container.innerHTML += `
    <div class="mb-[10px] max-w-[200px] min-w-[142px] h-[fit-content]" >
    <a href="product.html?id=${val.id}&name=${val.name}">
     <div class="">
                    <div >
                        <img src="${val.front_image}" alt="cloth" class="w-[100%] p-[20px]" id="img">
                    </div>
                    <div class=""  style="margin-left: 20px;">
                        <p style="text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;">${val.name}</p>
                        <p>$${val.price}</p>
                        </a>
                        
                        </div>
                    </div>
                 </div>
              
            </div>
            `
            ;


    });
}
function GetClothes() {
    FilteredCloth.map((val) => {
        // product_row_container.innerHTML += "";
        product_row_container1.innerHTML += `
        <div class="mb-[10px]  max-w-[200px] min-w-[142px] h-[fit-content]" >
    <a href="product.html?id=${val.id}&name=${val.name}">
     <div class="">
                    <div>
                        <img src="${val.front_image}" alt="cloth" class="w-[100%] p-[20px]" id="img">
                    </div>
                    <div class="" style="margin-left: 20px;">
                    <p style="text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;">${val.name}</p>
                       <p>$${val.price}</p>
                        </a>
                        
                        </div>
                    </div>
                 </div>
              
            </div>
            `



    });
}
// <a href="product.html?id=${val.id}" style="display: flex;justify-content: center;">
function GetHomeproduct() {
    FilteredHomeproduct.map((val) => {
        // product_row_container.innerHTML += "";
        product_row_container2.innerHTML += `
       
        <div class="mb-[10px]  max-w-[200px] min-w-[142px] h-[fit-content]">
        <a href="product.html?id=${val.id}&name=${val.name}">
         <div class="">
                        <div>
                            <img src="${val.front_image}" alt="cloth" class="w-[100%] p-[20px]" id="img">
                        </div>
                        <div class="" style="margin-left: 19px;">
                        <p style="text-overflow: ellipsis;
                        max-width: 134px;
                        white-space: nowrap;
                        overflow: hidden;">${val.name}</p>
                            <p>$${val.price}</p>
                            </a>
                            
                            </div>
                        </div>
                     </div>
                  
                </div>`;


    });
}
if (search) {
    Search.addEventListener("click", () => {
        // search_container.classList.add('active');
        search_container.style.visibility= "visible";
        //search_container.style.display = "block";
        document.body.style.background = "#0006";
        main.style.opacity = "0.2";
        document.body.style.overflow = "hidden";
    });
}
if (Close) {
    Close.addEventListener("click", () => {
        search_container.style.visibility= "hidden";
        main.style.opacity = "1";
        header.style.opacity = "1";
        document.body.style.background = "white";
        console.log("clicked")
    })
}
console.log(Close)
let CartNumber = document.getElementById("cartNumber")

function onLoadcart() {
    // let cartNumber=document.getElementById("cartNumber")
    let cartnumber = localStorage.getItem("cartnumber");

    if (cartnumber && CartNumber) {
        cartNumber.innerText = cartnumber;
    } else {
        CartNumber.innerText = 0;
    }
}
function showCartnumber() {
    let cartnumber = localStorage.getItem("cartnumber");
    cartnumber = parseInt(cartnumber);
    if (cartnumber) {
        console.log(cartnumber)
        localStorage.setItem("cartnumber", cartnumber + 1);
        document.getElementById("cartNumber").textContent = cartnumber + 1;
    } else {
        localStorage.setItem("cartnumber", 1);
        document.getElementById("cartNumber").textContent = 1;
    }
}
onLoadcart()
function AddtoCart(id) {
    let cartitem = localStorage.getItem(id);
    cartitem = JSON.parse(cartitem);
    let p = products.find(item => item.id == id)

    if (cartitem) {

        if (cartitem[p.name] == undefined) {
            cartitem = {
                ...cartitem,
                [p.name]: p,
            }
        }
        cartitem[p.name].incart += 1;
        //cartitem[p.name].price+=p.price
        console.log(cartitem[p.name].price * cartitem[p.name].incart)

    } else {
        cartitem = {
            [p.name]: p
        }
        p.incart = 1
    };
    console.log(cartitem);
    localStorage.setItem(id, JSON.stringify(cartitem));
    totalcost();
}



function GetOneProduct() {

    let urlQuery = new URLSearchParams(window.location.search);
    let Id = urlQuery.get("id");
    let h = products.find(q => q.id == Id);
    console.log(h)
    let D = localStorage.getItem(Id);
    D = JSON.parse(D);
    console.log(D);
    if (D !== null) {
        Object.values(D).map((val) => {
            product.innerHTML += `
            <div class="img_container">
             <img src="${val.front_image}" class="img" alt="">
         </div>
         <div class="about">
             <h1 class="product_name">${val.name}</h1>
             <p class="price  text-gray-500">$${h.price}</p>
             <div>
             <p class="desc text-justify">${val.about_item}</p></div>
             <p class="text-[#00a341] font-black ml-1"><i class="fa-solid fa-circle-check "></i><span class="ml-1">In stock</span></p>
             <div class="btn_group mt-2">
             <button class=" w-[80%] bg-[#313f5e] text-white rounded-[30px] p-[10px] mb-2" onclick="AddtoCart(${val.id}); showCartnumber();totalcost(${val.id});">Add to cart</button>
             <button class=" w-[80%] bg-[#1a1a1a] text-white rounded-[30px] p-[10px]">Buy Now</button>
             </div>
         </div>
      `
        })
    } else {
        let q = products.find(item => item.id == Id);
        console.log(q);
        console.log(q.id)
        product.innerHTML += `
                   <div class="img_container">
                    <img src="${q.front_image}" class="img" alt="">
                </div>
                <div class="about">
                    <h1 class="product_name">${q.name}</h1>
                    <p class="price  text-gray-500">$${q.price}</p>
                    <div>
                    <p class="desc text-justify">${q.about_item}</p></div>
                    <p class="text-[#00a341] font-black ml-1"><i class="fa-solid fa-circle-check "></i><span class="ml-1">In stock</span></p>
                    <div class="btn_group mt-2">
                    <button class=" w-[80%] bg-[#313f5e] text-white rounded-[30px] p-[10px] mb-2" onclick="AddtoCart(${q.id}); showCartnumber();totalcost(${q.id});">Add to cart</button>
                    <button class=" w-[80%] bg-[#1a1a1a] text-white rounded-[30px] p-[10px] mb-4">Buy Now</button>
                    </div>
                </div>
             `
    }

}
console.log(document)

if (search_container) {
    document.onclick = function (e) {
        if (search_container.style.display == "block") {
            if (e.target.id !== "search_product" && e.target.id !== "search") {

                search_container.style.display = "none";
            }
            console.log(e.target.id)
        }
    }
}

let array = []
if (search_product) {
    search_product.addEventListener("keypress", (e) => {
        let k;
        if (search_product.value) {
            array = products.filter((item) => {
                return item.name.toLowerCase().includes(search_product.value.toLowerCase()) || item.category.toLowerCase().includes(search_product.value.toLowerCase());

            })
            console.log("array : ",array)
            results.innerHTML = ""
            if (e.key == "Enter") {
                // window.location.replace("search.html");
                getSearchedProducts(array);
            }
            array.map((item) => {
                results.innerHTML += `<div style="margin-top: 17px;display: flex;align-items: center;gap: 10px;"><img src=${item.front_image} alt=${item.name} style="max-width: 12%;"/><a href="product.html?id=${item.id}" class="mb-3">${item.name}</a></div><br>`
                console.log(item)
                console.log("category",item.category);
            })
            console.log(array)
            localStorage.setItem("Search", JSON.stringify({ array, SEARCH: search_product.value }));
            // location.assign("search.html");
        } else if (e.key == "Enter") {
            results.innerHTML = ""
            results.innerHTML = `<p  style="text-align: center;padding: 31px;font-size: 20px;font-weight: 800;">No Product Found</p>`

        }

        //  console.log(array)
        //checking(array)

    })
}

function getSearchedProducts(array){
    //console.log(array)
    console.log(array);
}
getSearchedProducts()
function totalcost(id) {
    let item = products.find((item) => {
        return item.id == id
    })
    if (item) {
        console.log(item)
        let cartcost = localStorage.getItem("totalcost");
        if (cartcost != null) {
            cartcost = parseInt(cartcost);
            localStorage.setItem("totalcost", cartcost + item.price);
        } else {
            localStorage.setItem("totalcost", item.price);
        }
    }
    window.location.reload("cart.html");
}
//let right= document.getElementsByClassName("right")[0];
function getcartitem(id) {
   let reload = false
    let cartcost = localStorage.getItem("totalcost");
    let sum = 0;
    let incartnumber = localStorage.getItem("cartnumber");
    incartnumber = parseInt(incartnumber)
    console.log(typeof incartnumber, incartnumber)

    let cartContainer = document.getElementsByClassName("checkoutLayout")[0];
    let displayed = false;
    let keys = Object.keys(localStorage);
    let numberkeys =  keys.filter(key => /^\d+$/.test(key));
    for (i in localStorage) {
        let cartitems = localStorage.getItem(i);
        if (cartitems != null) {
            cartitems = JSON.parse(cartitems);
            let f = Object.values(cartitems).filter((item) => {
                return item.incart > 0;
            })

            console.log(f)
           
            if (numberkeys.length!=[]) {
                f.map((item) => {

                    console.log(item)
                    if (cartContainer) {
                        sum += item.price
                        cartContainer.innerHTML += `  <div class="checkoutLayout">

        <div class="list">

            <div class="item">
                <img src="${item.front_image}">
                <div class="info">
                    <div class="name">${item.name}</div>
                </div>
                <div class="quantity"><i class="fa-solid fa-minus minus" onclick="removeitem(${item.id});ReduceCartNumber(); reducetotalcost(${item.id});removeItemcart(${item.id})"></i><span>${item.incart}</span><i class="fa-sharp fa-solid fa-plus plus" onclick="AddtoCart(${item.id});totalcost(${item.id});showCartnumber()"></i></div>
                <div class="returnPrice">$${item.price}</div>
         </div>
    </div>
    
`


                    }
                    if (right) {
                        if (!displayed) {
                            console.log(sum)
                            right.innerHTML += ` 
<h1>Checkout</h1>

<div class="form">
    <div class="group">
        <label for="name">Full Name</label>
        <input type="text" name="name" id="name" placeholder="enter you full name" required>
    </div>

    <div class="group">
        <label for="phone">Phone Number</label>
        <input type="text" name="phone" id="phone" placeholder="enter you full number" required>
    </div>

    <div class="group">
        <label for="address">Address</label>
        <input type="text" name="address" id="address" placeholder="enter you full address" required>
    </div>

    <div class="group">
        <label for="country">Country</label>
        <select name="country" id="country" required>
            <option value="">Choose..</option>
            <option value="pakistan">pakistan</option>
        </select>
    </div>

    <div class="group">
        <label for="city">City</label>
        <select name="city" id="city" required>
            <option value="">Choose..</option>
            <option value="karachi">karachi</option>
            <option value="Lahore">Lahore</option>
            <option value="islamabad">islamabad</option>
            <option value="hyderabad">hyderabad</option>
            <option value="peshawar">peshawar</option>
        </select>
    </div>
</div>
<div class="return">
    <div class="row">
        <div>Total Quantity</div>
        <div class="totalQuantity">${incartnumber}</div>
    </div>
    <div class="row">
        <div>Total Price</div>
        <div class="totalPrice">$${cartcost}</div>
    </div>
</div>
<button class="buttonCheckout" onclick="submitdetails(${item.id})">CHECKOUT</button>`
                            displayed = true;
                        }
                    }

                })
            }else{
                right.style.background="none";
                right.innerHTML = `<h1>Not Item ahhahah</h1>`
            }

        }
    }
}

function removeitem(id) {
    let test = localStorage.getItem(id);
    test = JSON.parse(test);
    console.log(test)
    let p = products.find(item => item.id == id)
    let cartitem = localStorage.getItem(id);
    cartitem = JSON.parse(cartitem);
    console.log(cartitem[p.name].id)
    localStorage.removeItem(cartitem[p.name].id == id);


    if (cartitem) {
        cartitem[p.name].incart -= 1;
        // cartitem[p.name].price-=p.price

    }
    localStorage.setItem(id, JSON.stringify(cartitem))
    //  window.location.replace("cart.html");
}

function ReduceCartNumber() {
    let cartnumber = localStorage.getItem("cartnumber");
    if (cartnumber) {
        cartnumber = JSON.parse(cartnumber);
        localStorage.setItem("cartnumber", cartnumber - 1);
        window.location.reload("cart.html")
        console.log(cartnumber)
    }
    if (cartnumber == 0) {
        alert("hello thor");
    }
}
function reducetotalcost(id) {
    let product = products.find(item => item.id == id)

    let cartcost = localStorage.getItem("totalcost");
    if (cartcost != null) {
        cartcost = parseInt(cartcost);
        console.log(cartcost)
        localStorage.setItem("totalcost", cartcost - product.price);
    }
}
function removeItemcart(id) {
    let cartitem = localStorage.getItem(id);
    let demo = products.find(item => item.id == id);
    if (cartitem) {
        cartitem = JSON.parse(cartitem);
        if (cartitem[demo.name].incart == 0) {
            localStorage.removeItem(id);
            console.log(`Item with ID ${id} and name ${demo.name} removed from cart.`);
        }
    }
}

function submitdetails(id) {
    let Name = document.getElementById("name").value;
    let phoneNumber = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let country = document.getElementById("country").value;
    let city = document.getElementById("city").value;
    if (Name && phoneNumber && address && country && city) {
        console.log(Name, phoneNumber, address, country, city);
        modal.style.visibility = "visible";
        localStorage.clear();
        window.location.reload("cart.html");
    }
}

let display = false;
function searchproduct() {
    searchedproduct_container = ""
    let g = localStorage.getItem("Search");

    g = JSON.parse(g)
    console.log(g.SEARCH);
    search_result.innerHTML = `<p>Search result of : <h1>${g.SEARCH}</h1></p>`
    g.array.map((item) => {
        console.log(item)
        searchedproduct_container += ` 
                 <div class="mb-[10px]  max-w-[200px] min-w-[142px] h-[fit-content]" >
                     <a href="product.html?id=${item.id}">
                       <div>
                                         <img src="${item.front_image}" alt="cloth" class="w-[100%] p-[20px]" id="img">
                                     </div>
                                     <div class="details">
                                     <p class="name">${item.name}</p>
                                        <p class="price">$${item.price}</p>
                                         </a>
                                        
                                         </div>
                                     </div>`
    })
    document.getElementById("product_row_container").innerHTML = searchedproduct_container
}
function checks() {
    let count =[];
    let ID = products.map((Item)=>{
        return Item.id;
        })
        console.log(ID)
        let keys = Object.keys(localStorage);
        let numberkeys =  keys.filter(key => /^\d+$/.test(key));
        console.log(numberkeys)
      
    //    for (let index = 0; index < ID.length; index++) {
        
    //     const element = ID[index];
    //     if(numberkeys.indexOf(element.toString())){
    //         console.log(!numberkeys.indexOf(element.toString()))
    //         console.log(typeof element, "yes : "+element);
    //         count.push(element);
    //      }
    //   }
console.log("Array : ",count)
     let cartnumber = localStorage.getItem("cartnumber");
    let cartcost = localStorage.getItem("totalcost");
    cartcost = parseInt(cartcost);
    cartnumber = parseInt(cartnumber);
    // console.log(typeof cartnumber, "number = " + cartnumber);
    // console.log(typeof cartcost, "Cost = " + cartcost);
    if (cartnumber == 0) {
        localStorage.clear();
    }
    console.log(localStorage)
    if (right && localStorage.length == 0) {
        let returnCart = document.getElementById("returnCart");
         returnCart.style.display = "block"
        right.style.background = "none";
        right.innerHTML = `<h1 style="color:black;text-align:center; border:none">No Item In Cart :(</h1>`
    }else if ( localStorage.length>1&&numberkeys.length == 0 ) {
        let returnCart = document.getElementById("returnCart");
        returnCart.style.display = "block"
            right.style.background = "none";
            right.innerHTML = `<h1 style="color:black;text-align:center; border:none">No Item In Cart :(</h1>`
      }
}
// checks()
GetHomeproduct();
GetClothes();
Getphones()
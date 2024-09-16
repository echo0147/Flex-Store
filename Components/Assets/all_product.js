import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";
import p36_img from "./product_36.png";

let all_product = [
  {
    id: 1,
    name: "Bcaa +Glutamine xpress 300g Scitec Nutrition",
    category: "Supplements",
    image: p1_img,
    new_price: 30,
    old_price: 40,
  },
  {
    id: 2,
    name: "100% creatine monohydrate 300g Scitec Nutrition",
    category: "Supplements",
    image: p2_img,
    new_price: 40,
    old_price: 38,
  },
  {
    id: 3,
    name: "Serious Mass 2,72Kg Optimum Nutrition",
    category: "Supplements",
    image: p3_img,
    new_price: 55,
    old_price: 60,
  },
  {
    id: 4,
    name: "100% Whey Protein 2350g - Scitec Nutrition",
    category: "Supplements",
    image: p4_img,
    new_price: 75,
    old_price: 80,
  },
  {
    id: 5,
    name: "Creatine 5000(60 servings) 300 g -EVL",
    category: "Supplements",
    image: p5_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 6,
    name: "Iso Whey Clear 505g -Muscletech",
    category: "Supplements",
    image: p6_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 7,
    name: "Iso Whey Clear 505g -Muscletech",
    category: "Supplements",
    image: p7_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 8,
    name: "Nitrotech Ripped 1,8kg - Muscletech",
    category: "Supplements",
    image: p8_img,
    new_price: 70,
    old_price: 90,
  },
  {
    id: 9,
    name: "Creatine monohydrate 300g-Nutrend",
    category: "Supplements",
    image: p9_img,
    new_price: 34,
    old_price: 40,
  },
  {
    id: 10,
    name: "Daily Vita-Min 90 Tabs - Scitec Nutrition",
    category: "Supplements",
    image: p10_img,
    new_price: 22,
    old_price: 25,
  },
  {
    id: 11,
    name: "Omega 3 100 Caps - Scitec Nutrition",
    category: "Supplements",
    image: p11_img,
    new_price: 22,
    old_price: 25,
  },
  {
    id: 12,
    name: "Gold Standard Pro gainer 2,31kg - Optimum Nutrition",
    category: "Supplements",
    image: p12_img,
    new_price: 78,
    old_price: 80,
  },
  {
    id: 13,
    name: "PVC Speed Jump Rope - Liveup Sports",
    category: "Accessories",
    image: p13_img,
    new_price: 4,
    old_price: 5,
  },
  {
    id: 14,
    name: "700ml Navy Blue Shaker - Scitec Nutrition",
    category: "Accessories",
    image: p14_img,
    new_price: 8,
    old_price: 10,
  },
  {
    id: 15,
    name: "Bathroom Scale SCALE 100 Glass - Newfeel",
    category: "Accessories",
    image: p15_img,
    new_price: 15,
    old_price: 20,
  },
  {
    id: 16,
    name: "Weightlifting Gloves - Squeeze",
    category: "Accessories",
    image: p16_img,
    new_price: 9,
    old_price: 10,
  },
  {
    id: 17,
    name: "75cm Fitness Ball - Liveup Sports",
    category: "Accessories",
    image: p17_img,
    new_price: 12,
    old_price: 15,
  },
  {
    id: 18,
    name: "Studio Dumbbells - Livepro",
    category: "Accessories",
    image: p18_img,
    new_price: 7,
    old_price: 8,
  },
  {
    id: 19,
    name: "Weightlifting Lumbar Belt - Squeeze",
    category: "Accessories",
    image: p19_img,
    new_price: 13,
    old_price: 15,
  },
  {
    id: 20,
    name: "Beige Tank Top - Scitec Muscle Army",
    category: "Accessories",
    image: p20_img,
    new_price: 17,
    old_price: 20,
  },
  {
    id: 21,
    name: "Elastic Tone Tube Band - Liveup Sports",
    category: "Accessories",
    image: p21_img,
    new_price: 3,
    old_price: 4,
  },
  {
    id: 22,
    name: "Resistance Bands - LivePro",
    category: "Accessories",
    image: p22_img,
    new_price: 4,
    old_price: 5,
  },
  {
    id: 23,
    name: "Batman Stringer Tank Top",
    category: "Accessories",
    image: p23_img,
    new_price: 8,
    old_price: 10,
  },
  {
    id: 24,
    name: "Barre olympique EZ curl 1,2m-livepro",
    category: "Accessories",
    image: p24_img,
    new_price: 45,
    old_price: 50,
  },
  {
    id: 25,
    name: "Keto muesli Coconut-cocoa nibs 200g – Tekmar",
    category: "Snacks",
    image: p25_img,
    new_price: 2,
    old_price: 4,
  },
  {
    id: 26,
    name: "Vegan Bar 40G Raspberry & Brownie - Tekmar",
    category: "Snacks",
    image: p26_img,
    new_price: 1,
    old_price: 1,
  },
  {
    id: 27,
    name: "Keto bar Raspberry Cheescake 40g-Tekmar",
    category: "Snacks",
    image: p27_img,
    new_price: 1,
    old_price: 1,
  },
  {
    id: 28,
    name: "Müsli Yogurt Bars - Apple",
    category: "Snacks",
    image: p28_img,
    new_price: 1,
    old_price: 1,
  },
  {
    id: 29,
    name: "BCAA Energy Drink 330ml Yuzu Apricot - Nutrend",
    category: "Snacks",
    image: p29_img,
    new_price: 1,
    old_price: 1,
  },
  {
    id: 30,
    name: "BCAA Energy Drink 330ml Icy Mojito - Nutrend",
    category: "Snacks",
    image: p30_img,
    new_price: 1,
    old_price: 1,
  },
  {
    id: 31,
    name: "37% Sport protein bar Caramel 45g-Tekmar",
    category: "Snacks",
    image: p31_img,
    new_price: 1,
    old_price: 1,
  },
  {
    id: 32,
    name: "Protein pancake 1036 g - Scitec Nutrition",
    category: "Snacks",
    image: p32_img,
    new_price: 31,
    old_price: 35,
  },
  {
    id: 33,
    name: "Carnitine activity drink Mix Berry avec cafeine 750ml - Nutrend",
    category: "Snacks",
    image: p33_img,
    new_price: 1,
    old_price: 2,
  },
  {
    id: 34,
    name: "25% Sport protein &Magnesium bar Strawberry 50g-Tekmar",
    category: "Snacks",
    image: p34_img,
    new_price: 1,
    old_price: 1,
  },
  {
    id: 35,
    name: "Müsli Yogurt Bars - Forest Fruit",
    category: "Snacks",
    image: p35_img,
    new_price: 1,
    old_price: 1,
  },
  {
    id: 36,
    name: "Nut Bars - Nuts & Honey",
    category: "Snacks",
    image: p36_img,
    new_price: 1,
    old_price: 1,
  },
];

export default all_product;

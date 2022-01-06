import img1 from "./assets/card/1.jpg";
import img2 from "./assets/card/2.jpg";
import img3 from "./assets/card/3.jpg";
import img4 from "./assets/card/4.jpg";
import img5 from "./assets/card/5.jpg";
import img6 from "./assets/card/6.jpg";
import img7 from "./assets/card/7.jpg";
import img8 from "./assets/card/8.jpg";
import img9 from "./assets/card/9.jpg";
const cardInfo = [
  {
    id: "1",
    imgs: img1,
    name: "HighCrest Hotel",
    city: "sulaymaniyah",
    decription:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    rating: 5,
    price: 10,
    distance:'42km from airport',
    location:'4252 Sturgeon Drive'
  },
  {
    id: "2",
    imgs: img2,
    name: "The Hive Hotel",
    city: "Rome",
    decription:
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    rating: 3,
    price: 30,
    distance:'42km from airport',
    location:'4252 Sturgeon Drive'
  },
  {
    id: "3",
    imgs: img3,
    name: "AZIMUT Hotel Vienna",
    city: "Vienna",
    decription:
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    rating: 2,
    price: 15,
    distance:'42km from airport',
    location:'4252 Sturgeon Drive'
  },
  {
    id: "4",
    imgs: img4,
    name: "H2 Hotel Berlin-Alexanderplatz",
    city: "Berlin",
    decription:
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    rating: 5,
    price: 30,
    distance:'42km from airport',
    location:'4252 Sturgeon Drive'
  },
  {
    id: "5",
    imgs: img5,
    name: "Cosmos Hotel",
    city: "Moscow",
    decription:
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    rating: 5,
    price: 40,
    distance:'42km from airport',
    location:'4252 Sturgeon Drive'
  },
  {
    id: "6",
    imgs: img6,
    name: "Novotel Cairo Airport",
    city: "Cairo",
    decription:
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    rating: 4,
    price: 20,
    distance:'42km from airport',
    location:'4252 Sturgeon Drive'
  },
  {
    id: "7",
    imgs: img7,
    name: "Central Park Hotel",
    city: "London",
    decription:
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    rating: 4,
    price: 80,
    distance:'42km from airport',
    location:'4252 Sturgeon Drive'
  },
  {
    id: "8",
    imgs: img8,
    name: "Hotel Sunroute Plaza Shinjuku",
    city: "Tokyo",
    decription:
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    rating: 3,
    price:150,
    distance:'42km from airport',
    location:'4252 Sturgeon Drive'
  },
  {
    id: "9",
    imgs: img9,
    name: "Pullman Paris Tour Eiffel",
    city: "Paris",
    decription:
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    rating: 4,
    price: 100,
    distance:'42km from airport',
    location:'4252 Sturgeon Drive',
    
  },
];

export default cardInfo;

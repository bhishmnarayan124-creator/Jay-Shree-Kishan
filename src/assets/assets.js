import logo from './kisan_logo.png'
import slider from './imgi_34_3-1000x700.jpg'
import slider_1 from './imgi_35_4-1000x700.jpg'
import slider_2 from './imgi_36_5-1000x700.jpg'
import slider_3 from './imgi_37_1-1000x700.jpg'
import product from './imgi_29_10-315x315.jpg'
import banner_image from '../assets/imgi_29_10-315x315.jpg'
import banner_image1 from '../assets/imgi_27_17-315x315.jpg'


export const assets = {
    logo,
    slider,
    slider_1,
    slider_2,
    slider_3,
    product
}

export  const products = [
  {
    id: 1,
    name: "Organic Cold Pressed Sunflower Cooking Oil",
    image: banner_image,
    price: 122,
    sizes: ["1kg", "2kg", "3kg"],
    rating: 5,
    stock: 30,
    sold: 10,
  },
  {
    id: 2,
    name: "Teaveda - Naturally Good",
    image: banner_image1,
    price: 200,
    sizes: ["2kg", "3kg"],
    rating: 3,
    stock: 40,
    sold: 35,
  },
//   {
//     id:3,
//     name:"Sambar Onion - Peeled (Small Onion",
//     image: "",
//     price:122,
//     sizes:["1kg", "2kg", "3kg"],
//     ratting:3,
//     stock:40,
//     sold:35
//   }
];
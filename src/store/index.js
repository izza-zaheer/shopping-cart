import { createStore } from 'vuex'

import rootMutations from './mutation.js'
import rootActions from "./actions.js";
import rootGetters from "./getters.js";
const store= createStore({
  state() {
    return {
cart:[],
total:0,
qty:0,
products:[
  {
    addIsVisible:true,
    removeIsVisible:false,
    id: 1,
    type: "Smartphone",
    brand: "Apple",
    model: "iPhone 12 Pro",
    color: "Graphite",
    capacity: "128 GB",
    imgSrc: require("@/assets/Iphone12Pro/iPhone12Pro.jpg"),
    price: 999,
    name:"",
    description:""
  },
  {
    addIsVisible:true,
    removeIsVisible:false,

    id: 2,
    type: "Smartphone",
    brand: "Apple",
    model: "iPhone 12 Pro 2",
    color: "Silver",
    capacity: "128 GB",
    // imgSrc: require("@/assets/Iphone12Pro/Iphone12Pro2.jpg"),
    imgSrc: require("@/assets/Iphone12Pro/iPhone12Pro2.jpg"),

    price: 999,
    name:"",
    description:""
  },
  {
    addIsVisible:true,
    removeIsVisible:false,

    id: 3,
    type: "Tablets",
    brand: "Apple",
    model: "Ipad Pro",
    color: "Gold",
    capacity: "128 GB",
    // imgSrc: require("@/assets/Iphone12Pro/Iphone12Pro2.jpg"),
    imgSrc: require("@/assets/iPadPro/ipad.jpg"),

    price: 999,
    name:"",
    description:""
  },
  {
    addIsVisible:true,
    removeIsVisible:false,

    id: 4,
    type: "Tablets",
    brand: "Apple",
    model: "iPad Pro 2",
    color: "Pacific Blue",
    capacity: "128 GB",
    // imgSrc: require("@/assets/Iphone12Pro/Iphone12Pro2.jpg"),
    imgSrc: require("@/assets/iPadPro/ipad2.jpg"),

    price: 999,
    name:"",
    description:""
  },
  {
    addIsVisible:true,
    removeIsVisible:false,

    id: 5,
    type: "Tablets",
    brand: "Apple",
    model: "iPad Pro",
    color: "Graphite",
    capacity: "256 GB",
    // imgSrc: require("@/assets/IPhone12Pro/iPhone12Pro2.jpg"),
    imgSrc: require("@/assets/iPadPro/ipad.jpg"),

    price: 1199.0,
    name:"",
    description:""
  },
  {
    addIsVisible:true,
    removeIsVisible:false,

    id: 6,
    type: "Smartphone",
    brand: "Apple",
    model: "iPhone 12 Pro",
    color: "Golden",
    capacity: "256 GB",
    // imgSrc: require("@/assets/IPhone12Pro/iPhone12Pro2.jpg"),
    imgSrc: require("@/assets/IphoneSE/iPhoneSE.jpg"),

    price: 1199,
    name:"",
    description:""
  },
  {
    addIsVisible:true,
    removeIsVisible:false,

    id: 7,
    type: "Tablets",
    brand: "Apple",
    model: "ipad Pro",
    color: "Gold",
    capacity: "256 GB",
    // imgSrc: require("@/assets/IPhone12Pro/iPhone12Pro2.jpg"),
    imgSrc: require("@/assets/iPadPro/ipad.jpg"),

    price: 1199,
    name:"",
    description:""
  },
  {
    addIsVisible:true,
    removeIsVisible:false,

    id: 8,
    type: "Smartphone",
    brand: "Samsung",
    model: "S21 Pro",
    color: "Pacific Blue",
    capacity: "256 GB",
    // imgSrc: require("@/assets/IPhone12Pro/iPhone12Pro2.jpg"),
    imgSrc: require("@/assets/S21/s21.jpg"),

    price: 1199,
    name:"",
    description:""
  },
  {
    addIsVisible:true,
    removeIsVisible:false,

    id: 9,
    type: "Smartphone",
    brand: "Samsung",
    model: "S21 2",
    color: "Graphite",
    capacity: "512 GB",
    // imgSrc: require("@/assets/IPhone12Pro/iPhone12Pro2.jpg"),
    imgSrc: require("@/assets/S21/s21-2.jpg"),
    name:"",
    description:"",

    price: 1399,
  },
  {
    addIsVisible:true,
    removeIsVisible:false,

    id: 10,
    type: "Smartphone",
    brand: "Samsung",
    model: "S21 Ultra",
    color: "Silver",
    capacity: "512 GB",
    // imgSrc: require("@/assets/IPhone12Pro/iPhone12Pro2.jpg"),
    imgSrc: require("@/assets/S21/s21.jpg"),
    name:"",
    description:"",
    price: 1399,
  },
  {
    addIsVisible:true,
    removeIsVisible:false,

    id: 11,
    type: "Smartphone",
    brand: "Samsung",
    model: "S21 Ultra",
    color: "Silver",
    capacity: "512 GB",
    // imgSrc: require("@/assets/IPhone12Pro/iPhone12Pro2.jpg"),
    imgSrc: require("@/assets/S21/s21.jpg"),
    name:"",
    description:"",
    price: 1399,
  },
]
    }
  },
  getters: rootGetters,
  mutations:rootMutations,
  actions: rootActions,
});

export default store;

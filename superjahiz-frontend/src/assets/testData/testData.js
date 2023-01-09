import pic1 from "./../images/products/1.jpg";
import pic2 from "./../images/products/2.jpg";
import pic3 from "./../images/products/3.jpg";
import pic4 from "./../images/products/4.jpg";
import pic5 from "./../images/products/5.jpg";
import pic6 from "./../images/products/6.jpg";
import pic12 from "./../images/products/7.jpg";
import pic13 from "./../images/products/8.jpg";
import pic7 from "./../images/Categories/1.jpg";
import pic8 from "./../images/Categories/2.jpg";
import pic9 from "./../images/Categories/3.jpg";
import pic10 from "./../images/Categories/4.jpg";
import pic11 from "./../images/Categories/5.jpg";
import pic14 from "./../images/Categories/6.jpg";
import pic15 from "./../images/products/9.jpg";
import pic16 from "./../images/products/10.jpg";

var data = {
  products: {
    0: {
      id: "XgEfjzhfkv",
      name: "Ray-Ban plastic Black Glasses",
      price: 569.5,
      desc: "description not available",
      category: "glasses",
      pictures: {
        1: pic6,
      },
      specs: [
        { key: "Color", value: "Black" },
        { key: "lense", value: "black" },
        { key: "Sun glasses", value: "Yes" },
      ],
      inStock: 13,
      sold: 2,
    },
    1: {
      id: "ZxeKL_dYuC",
      name: "Polaroid OneStep2 I-type Camera Long name for testing",
      price: 3250.99,
      desc: "description not available",
      category: "cameras",
      pictures: {
        1: pic1,
      },
      specs: [
        { key: "Color", value: "Black and white" },
        { key: "Professional camera", value: "Yes" },
      ],
      inStock: 20,
      sold: 10,
    },
    2: {
      id: "Box12hWsGR",
      name: "Generic Regular Watch",
      price: 250.75,
      desc: "description not available",
      category: "watches",
      pictures: {
        1: pic2,
      },
      specs: [
        { key: "Color", value: "white" },
        { key: "gender", value: "men" },
      ],
      inStock: 0,
      sold: 43,
    },
    3: {
      id: "37KwyCUWq7",
      name: "Nike Shoes",
      price: 569.5,
      desc: "description not available",
      category: "shoes",
      pictures: {
        1: pic3,
      },
      specs: [
        { key: "Color", value: "black" },
        { key: "Color 2", value: "white" },
        { key: "size", value: "42" },
      ],
      inStock: 3,
      sold: 22,
    },
    4: {
      id: "qqw1mTkWd6",
      name: "Xbox Controller",
      price: 600.0,
      desc: "description not available",
      category: "electronics",
      pictures: {
        1: pic4,
      },
      specs: [
        { key: "Color", value: "yoo" },
        { key: "Frequency", value: "420 HZ" },
        { key: "Bluetooth", value: "Yes" },
        { key: "RJ-11", value: "Yes" },
      ],
      inStock: 12,
      sold: 2,
    },
    5: {
      id: "a0EFDsEun0",
      name: "Beats Pink Headphones",
      price: 70.33,
      desc: "Description not available, but this text serves as a test sample for developement and testing purposes.",
      category: "electronics",
      pictures: {
        1: pic5,
      },
      specs: [
        { key: "Color", value: "yoo" },
        { key: "Frequency", value: "420 HZ" },
        { key: "Bluetooth", value: "Yes" },
        { key: "RJ-11", value: "Yes" },
      ],
      inStock: 2,
      sold: 12,
    },
    6: {
      id: "WZ2M3kXs50",
      name: "Canon EOS 450D",
      price: 700.99,
      desc: "Description not available, but this text serves as a test sample for developement and testing purposes.",
      category: "cameras",
      pictures: {
        1: pic12,
      },
      specs: [
        { key: "Color", value: "black" },
        { key: "SD card", value: "no" },
      ],
      inStock: 2,
      sold: 12,
    },
    7: {
      id: "PMAgr4KG9a",
      name: "5.113 Dslr Camera",
      price: 384.2,
      desc: "Description not available, but this text serves as a test sample for developement and testing purposes.",
      category: "cameras",
      pictures: {
        1: pic13,
      },
      specs: [
        { key: "Color", value: "black" },
        { key: "SD card", value: "yes" },
      ],
      inStock: 2,
      sold: 12,
    },
    8: {
      id: "S3OPk1S4ly",
      name: "Iphone 11 cyan / purple",
      price: 600.99,
      desc: "Description not available, but this text serves as a test sample for developement and testing purposes.",
      category: "phones",
      pictures: {
        1: pic15,
      },
      specs: [
        { key: "Color", value: "cyan or purple" },
        { key: "Ram", value: "16 Gb" },
        { key: "memory", value: "512 Gb" },
        { key: "camera", value: "105 mega pixel" },
      ],
      inStock: 2,
      sold: 12,
    },
    9: {
      id: "6WJ48Q0SD8",
      name: "Samsung galaxy S20 gray",
      price: 384.2,
      desc: "Description not available, but this text serves as a test sample for developement and testing purposes.",
      category: "phones",
      pictures: {
        1: pic16,
      },
      specs: [
        { key: "Color", value: "gray" },
        { key: "Ram", value: "8 Gb" },
        { key: "memory", value: "512 Gb" },
        { key: "camera", value: "105 mega pixel" },
      ],
      inStock: 2,
      sold: 12,
    },
  },
  categories: {
    1: {
      id: "1",
      name: "Glasses",
      picture: pic9,
    },
    2: {
      id: "2",
      name: "Electronics",
      picture: pic8,
    },
    3: {
      id: "3",
      name: "Shoes",
      picture: pic7,
    },
    4: {
      id: "4",
      name: "Watches",
      picture: pic11,
    },
    5: {
      id: "5",
      name: "Cameras",
      picture: pic10,
    },
    6: {
      id: "6",
      name: "Phones",
      picture: pic14,
    },
  },
  orders: [
    {
      id: "1",
      date: "2020-01-01",
      items: [
        {
          id: "1",
          name: "Polaroid OneStep2 I-type Camera Long name for testing",
          price: 3250.99,
          quantity: 1,
        },
        {
          id: "2",
          name: "Generic Regular Watch",
          price: 250.75,
          quantity: 4,
        },
      ],
      //calculate total from items by using items.reduce price * quantity
      total: 7051.5,
      status: "pending",
    },
  ],
};

export default data;

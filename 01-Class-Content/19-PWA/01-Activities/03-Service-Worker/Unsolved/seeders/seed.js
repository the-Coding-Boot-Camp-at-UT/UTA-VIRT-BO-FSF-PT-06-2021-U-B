const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/imageperformance',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const imageSeed = [
  {
    description: 'Day At The Library',
    image: '/assets/images/1.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'Forests Overhead',
    image: '/assets/images/2.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'Brick Wall',
    image: '/assets/images/3.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'Abstract Door In The Wall',
    image: '/assets/images/4.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'Focused Ring',
    image: '/assets/images/5.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'Taxi Cab',
    image: '/assets/images/6.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'Building',
    image: '/assets/images/7.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'Ethereal Pathway',
    image: '/assets/images/8.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'Cutting The Ribbon On Opening Day',
    image: '/assets/images/9.jpg',
    rating: 0,
    date: new Date(Date.now())
  }
];

db.Image.deleteMany({})
  .then(() => db.Image.collection.insertMany(imageSeed))
  .then(data => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

const faker = require('faker');
const Adventures = require('./adventure.js');
const db = require('./index.js');

const seed = () => {
  const adventuresData = [];

  for (let i = 1; i <= 4; i += 1) {
    const categoryOptions = ['null', 'backpacking', 'camping', 'hiking', 'water activity'];

    const adventure = {
      imageUrl: `https://mvp-pics.s3.us-east-2.amazonaws.com/photo${i}.jpg`,
      category: categoryOptions[i],
      description: faker.lorem.words(),
      details: faker.lorem.paragraph(),
      city: faker.address.city(),
      state: faker.address.state(),
      review: faker.lorem.paragraph(),
    };

    adventuresData.push(adventure);
  }

  Adventures.insertMany(adventuresData)
    .then(() => console.log('seeded database'))
    .catch((err) => console.error('Error: ', err));
};

seed();

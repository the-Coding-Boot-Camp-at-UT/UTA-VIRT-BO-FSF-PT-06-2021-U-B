const mongoose = require('mongoose');

const { Pizza } = require('../models');
const pizzaData = {
  pizzaName: 'The Tester',
  createdBy: 'Lernantino',
  size: 'Personal',
  toppings: ['Pepperoni', 'Ricotta', 'Sausage']
};

describe('Pizza Model Test', () => {
  let connection;

  // It's just so easy to connect to the MongoDB Memory Server
  // By using mongoose.connect
  beforeAll(async () => {
    connection = await mongoose.connect(
      global.__MONGO_URI__,
      { useNewUrlParser: true, useCreateIndex: true },
      err => {
        if (err) {
          console.error(err);
          process.exit(1);
        }
      }
    );
  });

  it('Creates and validates a new pizza', async () => {
    const validPizza = new Pizza(pizzaData);
    const savedPizza = await validPizza.save();
    // Object Id should be defined when successfully saved to MongoDB.
    expect(savedPizza._id).toBeDefined();
    expect(savedPizza.pizzaName).toBe(pizzaData.pizzaName);
    expect(savedPizza.createdBy).toBe(pizzaData.createdBy);
    expect(savedPizza.size).toBe(pizzaData.size);
    expect(savedPizza.toppings).toContain('Pepperoni');
    expect(savedPizza.comments.length).toBe(0);

    // delete pizza
    await savedPizza.remove();
  });

  // You shouldn't be able to add in any field that isn't defined in the schema
  it('Create pizza successfully, but the field not defined in schema should be undefined', async () => {
    const pizzaWithInvalidField = new Pizza({
      pizzaName: 'The Tester',
      createdBy: 'Lernantino',
      size: 'Personal',
      toppings: ['Pepperoni', 'Ricotta', 'Sausage'],
      price: 15
    });
    const savedPizza = await pizzaWithInvalidField.save();
    expect(savedPizza._id).toBeDefined();
    expect(savedPizza.price).toBeUndefined();

    await savedPizza.remove();
  });

  // Test Validation is working!!!
  // It should tells us the errors in on enumerable `size` field.
  it('Create pizza without required field should fail', async () => {
    const pizzaWithoutInfo = new Pizza({ pizzaName: 'The tester' });
    let err;
    try {
      const savedPizzaWithoutInfo = await pizzaWithoutInfo.save();
      err = savedPizzaWithoutInfo;
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
  });

  afterAll(async () => {
    await connection.disconnect();
  });
});

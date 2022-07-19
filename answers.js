// create 5 burgers (at least 3 should be beef)
db.burger.insertMany([
  { cheese: 'yes', type: 'beef', toppings: ['pickles', 'lettuce', 'tomatos'] },
  {
    cheese: 'yes',
    type: 'beef',
    toppings: ['pickles', 'mushrooms', 'lettuce']
  },
  { cheese: 'no', type: 'veggie', toppings: ['lettuce', 'olives', 'onions'] },
  { cheese: 'yes', type: 'veggie', toppings: ['ramen', 'tobasco', 'mayo'] },
  { cheese: 'no', type: 'beef', toppings: ['none'] }
])
// find all the burgers
db.burger.find({})
// show just the meat of each burger
db.burger.find({}, { type: 1 })
// show just the toppings of each burger
db.burger.find({}, { toppings: 1 })
// show everything but the cheese
db.burger.find({}, { type: 1, toppings: 1 })
// find all the burgers with beef
db.burger.find({ type: 'beef' })
// find all the burgers that are not beef
db.burger.find({ type: { $ne: 'beef' } })
// find the first burger with cheese
db.burger.find({ cheese: 'yes' }, { 'cheese.$': 1 })
// find one and update the first burger with cheese to have a property of 'double cheese'
db.burger.updateOne(
  { _id: ObjectId('62d7381b45bfd055742f0b0e') },
  { $set: { cheese: 'double' } }
)

// find the burger you updated to have double cheese
db.burger.find({ cheese: 'double' })
// find and update all the beef burgers to be 'veggie'
db.burger.updateMany({ type: 'beef' }, { $set: { type: 'veggie' } })
// delete one of your veggie burgers
// WRONG - dELETES ALL : db.burger.remove({meat: 'veggie'})
db.burger.deleteOne({ type: 'veggie' })
// drop the collection
//Expected Output
//true
db.burger.deleteMany({})
// drop the database
//Expected Output
// {
//   "dropped": "burgers",
//   "ok": 1
// }
db.dropDatabase()
//
// Bonus
//recreate your burgers database and your burger collection
//copy paste your insert burgers from above to reseed your database

// Change the name of the key cheese to 'pumpkinSpice'

// find all the burgers with ketchup (or another topping you used at least once)

// find all the burgers with pickles (or a topping you used more than once) and remove the pickles

// add a topping of 'eggs' to all the beef burgers
//note since this db is 'reset' there should be no veggie burgers, all beef burgers should still be intact

//Add a price to each burger, start with $5.00 for each burger

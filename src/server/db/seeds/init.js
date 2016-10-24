
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('coffee').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('coffee').insert({
          name: 'Pikes Peak Roaster',
          roaster: 'Starbucks',
          origin: 'Kenya',
          roast: 'light',
          caffeine: 20,
          decaf: false,
          price: 5,
          quantity: 1
        }),
        knex('coffee').insert({
          name: 'Bold Dark Roaster',
          roaster: 'Folgers',
          origin: 'Hawaii',
          roast: 'Dark',
          caffeine: 13,
          decaf: false,
          price: 6,
          quantity: 1
        }),
        knex('coffee').insert({
          name: 'Morning Roast',
          roaster: 'Dunkin Donuts',
          origin: 'Brazil',
          roast: 'Medium',
          caffeine: 17,
          decaf: false,
          price: 4,
          quantity: 1
        }),
        knex('coffee').insert({
          name: 'Morning Roast Rooster',
          roaster: 'Dunkin Donuts',
          origin: 'Central Africa',
          roast: 'Medium',
          caffeine: 12,
          decaf: false,
          price: 5,
          quantity: 1
        })
      ]);
    });
};

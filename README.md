# Token-Based Authentication with Node

## Getting Started

1. Fork/Clone
1. Install dependencies
1. `gulp`


Steps:
1. Set up your datebase
  -create and apply migrations  
    + createdb neap_server  and neap_server_test
    + knex migrate:make coffee  (And data to migration file)
    + knex migration:latest      (Run migration file)
  -create and apply seed
  + knex seed:make
  + Add data to your seed file
  + knex seed:Run
  + sanity check
     - psql
     - \c neap_server
     - select * from coffee;

1. set up route config
   + route config file:  register route (const coffeeRoutes) and require it in.

1. create file in routes folder for that resource
   + don't forget to require in knex in your js file that you created.


   + duplicate your test/integration/routes.index.test.js file and name it with your name and add your tests to it.
   +Don;t forget to require in knex if you are using it in your test
   +You need to change the beforeEach, that afterEach and the tests you create!

1. Set up knex queries
1. set up env variables
1. add route handlers for that resource
1. add control (optional)


heroku addons:create heroku-postgresql:hobby-dev

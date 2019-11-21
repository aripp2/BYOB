
exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('breweries', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.integer('year_est').unsigned();
      table.integer('num_locations').unsigned();

      table.timestamps(true, true);
    }),
    knex.schema.createTable('beers', (table) => {
      table.increments('id').primary();
      table.string('beer');
      table.string('style');
      table.integer('abv').unsigned();
      table.integer('ibu').unsigned();
      table.integer('brewery_id').unsigned();
      table.foreign('brewery_id').references('breweries.id')

      table.timestamps(true, true);
    })
  ])
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('beers'),
    knex.schema.dropTable('breweries')
  ])
};

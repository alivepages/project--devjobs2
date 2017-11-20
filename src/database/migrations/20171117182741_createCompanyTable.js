
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('company', table => {
      table.increments();
      table.string('name');
      table.text('description');
      table.string('imageLink');
      table.string('location');
    });
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('company');
};

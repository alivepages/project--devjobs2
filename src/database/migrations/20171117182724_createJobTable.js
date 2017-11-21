
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('job', table => {
      table.increments();
      table.string('title');
      table.text('description');
      table.string('location');
      table.decimal('salary', 14, 2);
      table.boolean('fullTime');
    });
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('job');
};

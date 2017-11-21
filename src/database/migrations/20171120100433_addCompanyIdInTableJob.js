
exports.up = function(knex, Promise) {
  return knex
  .schema
  .table('job', table => {
    table
      .integer('companyId')
      .unsigned()
      .index()
      .references('id')
      .inTable('company');
      return table;
  });
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .table('job', table => {
      table.dropForeign('companyId');
      table.dropColumn('companyId');
      return table;
    });
};

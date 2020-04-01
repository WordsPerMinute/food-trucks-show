
exports.up = function(knex) {
  return knex.schema.createTable('trucks', (t) => {
    t.increments('id')
    t.string('name')
    t.string('website')
    t.string('phone')
    t.string('logo')

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('trucks')
};


exports.up = function(knex) {
  return knex.schema.createTable('trucks', (t) => {
    t.increments("id")
    t.string("name")
    t.string("lat")
    t.string("long")
    t.string("address")
    t.string("food_type")
    t.integer("rating")
    t.string("hours")
    t.string("phone")
    t.text("truck")
    t.text("food")
    t.string("website")

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('trucks')
};


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('trucks').del()
    .then(function () {
      // Inserts seed entries
      return knex('trucks').insert([
        {name: "george's", website: "wwwhttp", phone: "555-555-5555", logo: "wwwhttp"}
      ]);
    });
};

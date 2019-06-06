exports.up = function(knex, Promise) {
	return knex.schema.createTable('cohorts', function(table) {
		table.increments();
		table.text('name').notNullAble();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('cohorts');
};

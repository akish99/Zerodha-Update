const supabase = require("../db/supabase");

class OrdersModel {
	constructor(values) {
		Object.assign(this, values);
	}

	async save() {
		const { data, error } = await supabase
			.from("orders")
			.insert({
				name: this.name,
				qty: this.qty,
				price: this.price,
				mode: this.mode,
			})
			.select()
			.single();

		if (error) throw error;
		Object.assign(this, data);
		return this;
	}
}

module.exports = { OrdersModel };
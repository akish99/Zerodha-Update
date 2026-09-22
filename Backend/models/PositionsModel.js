const supabase = require("../db/supabase");

class PositionsModel {
	constructor(values) {
		Object.assign(this, values);
	}

	async save() {
		const { data, error } = await supabase
			.from("positions")
			.insert({
				product: this.product,
				name: this.name,
				qty: this.qty,
				avg: this.avg,
				price: this.price,
				net: this.net,
				day: this.day,
				is_loss: this.isLoss,
			})
			.select()
			.single();

		if (error) throw error;
		Object.assign(this, { ...data, isLoss: data.is_loss });
		return this;
	}

	static async find() {
		const { data, error } = await supabase.from("positions").select("*");
		if (error) throw error;
		return data.map(({ is_loss, ...position }) => ({
			...position,
			isLoss: is_loss,
		}));
	}
}

module.exports = { PositionsModel };
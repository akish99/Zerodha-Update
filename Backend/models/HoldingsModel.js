const supabase = require("../db/supabase");

class HoldingsModel {
  constructor(values) {
    Object.assign(this, values);
  }

  async save() {
    const { data, error } = await supabase
      .from("holdings")
      .insert({
        name: this.name,
        qty: this.qty,
        avg: this.avg,
        price: this.price,
        net: this.net,
        day: this.day,
      })
      .select()
      .single();

    if (error) throw error;
    Object.assign(this, data);
    return this;
  }

  static async find() {
    const { data, error } = await supabase.from("holdings").select("*");
    if (error) throw error;
    return data;
  }
}

module.exports = { HoldingsModel };


const supabase = require("../db/supabase");
const bcrypt = require("bcrypt");

class User {
  static async findOne({ email }) {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .maybeSingle();

    if (error) throw error;
    return data;
  }

  static async findById(id) {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", id)
      .maybeSingle();

    if (error) throw error;
    return data;
  }

  static async create({ email, password, username, createdAt }) {
    const hashedPassword = await bcrypt.hash(password, 12);
    const { data, error } = await supabase
      .from("users")
      .insert({
        email,
        password: hashedPassword,
        username,
        created_at: createdAt || new Date().toISOString(),
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  }
}

module.exports = User;
const connection = require("../database/database");

module.exports = {
  async create(req, res) {
    const { id } = req.body;

    const ong = await connection("ongs")
      .where("id", id)
      .select("name")
      .first();

    if (!ong) {
      return res.status(400).json({ error: "não a ong com esse id" });
    }
    return res.json(ong);
  }
};

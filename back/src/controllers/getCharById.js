const { URL_BASE, KEY } = process.env;
const axios = require("axios");
const { response } = require("express");

const getCharById = (req, res) => {
  const { id } = req.params;
  axios
    .get(`${URL_BASE}/character/${id}?key=${KEY}`)
    .then((response) => {
      const { id, name, species, image, gender } = response.data;
      res.status(200).json({ id, name, species, image, gender });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

module.exports = getCharById;

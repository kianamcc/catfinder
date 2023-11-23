const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json);
app.use(cors());

const PORT = process.env.PORT || 5000;

const { API_BASE_URL, API_KEY, API_SECRET_KEY } = process.env;

app.get("/", (req, res) => {
  res.json({ success: true });
});

app.post("/api", (req, res) => {
  axios
    .post(
      // get access token
      `${API_BASE_URL}/oauth2/token`, // token request, must be POST, contains single parameter and values named grant_type
      `grant_type=client_credentials&client_id=${API_KEY}&client_secret=${API_SECRET_KEY}`
    )
    .then((response) => {
      axios
        .get(`https://api.petfinder.com/v2/animals?type=cat&page=1`, {
          headers: { Authorization: `Bearer ${response.data.access_token}` },
        })
        .then((response) => {})
        .catch((error) => {
          console.log("Error", error);
        });
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
});

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});

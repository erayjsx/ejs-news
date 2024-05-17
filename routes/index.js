const express = require("express");
const router = express.Router();
const axios = require("axios");

const fetchNews = async () => {
  try {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=2bf73729fd4a42d8a29a0b0e8b2a9c34"
    );
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw new Error("Error fetching news");
  }
};

router.get("/", async (req, res) => {
  try {
    const articles = await fetchNews();
    res.render("index", {
      pageTitle: "Home",
      articles,
    });
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).send("Error fetching news");
  }
});

module.exports = router;

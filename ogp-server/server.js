const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// CORSを許可
app.use(cors());

// OGP情報を取得するエンドポイント
app.get("/ogp", async (req, res) => {
    const url = req.query.url;
    if (!url) {
        return res.status(400).json({ error: "URL is required" });
    }

    try {
        // WebページのHTMLを取得
        const { data } = await axios.get(url, { timeout: 5000 });
        const $ = cheerio.load(data);

        // OGP情報を取得
        const ogTitle = $('meta[property="og:title"]').attr("content") || $("title").text() || "";
        const ogDescription = $('meta[property="og:description"]').attr("content") || 
            $('meta[name="description"]').attr("content") ||"";
        const ogImage = $('meta[property="og:image"]').attr("content") || "";
        const ogUrl = $('meta[property="og:url"]').attr("content") || url;

        res.json({
            status: "success",
            data:{
                title: ogTitle,
                description: ogDescription,
                image:{
                    url: ogImage,
                },    
                url: ogUrl,
            }
        });
    } catch (error) {
        console.error("Error fetching OGP:", error);
        res.status(500).json({ error: "Failed to fetch OGP data" });
    }
});

// サーバーを起動
app.listen(PORT, () => {
    console.log(`OGP server is running on http://localhost:${PORT}`);
});

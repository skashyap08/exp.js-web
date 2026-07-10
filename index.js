const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 9000;

// Middleware
app.use(express.static(path.join(__dirname, "public")));

// Routes

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "about.html"));
});

app.get("/services", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "services.html"));
});

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "contact.html"));
});

// 404 Page

app.use((req, res) => {
    res.status(404).send(`
        <h1 style="text-align:center;margin-top:100px;font-family:Arial;">
        404 | Page Not Found
        </h1>
    `);
});

app.listen(PORT, () => {
    console.log(`🚀 Server Running at http://localhost:${PORT}`);
});
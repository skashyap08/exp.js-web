const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 5000;
// Static Folder
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
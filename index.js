import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let allPosts = [];

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/post", (req, res) => {
  const newPost = {
    title: req.body["postTitle"],
    content: req.body["postContent"],
  };
  allPosts.push(newPost);
  res.redirect("/post");
});

app.get("/post", (req, res) => {
  res.render("post.ejs", { posts: allPosts });
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

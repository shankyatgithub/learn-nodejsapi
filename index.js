const express = require("express");
const app = express();
require("dotenv").config();

app.get('/', (req,res) => {
    res.send('Hello World!');
})

const gitHubData = {
"login": "shankyatgithub",
"id": 61506648,
"node_id": "MDQ6VXNlcjYxNTA2NjQ4",
"avatar_url": "https://avatars.githubusercontent.com/u/61506648?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/shankyatgithub",
"html_url": "https://github.com/shankyatgithub",
"followers_url": "https://api.github.com/users/shankyatgithub/followers",
"following_url": "https://api.github.com/users/shankyatgithub/following{/other_user}",
"gists_url": "https://api.github.com/users/shankyatgithub/gists{/gist_id}",
"starred_url": "https://api.github.com/users/shankyatgithub/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/shankyatgithub/subscriptions",
"organizations_url": "https://api.github.com/users/shankyatgithub/orgs",
"repos_url": "https://api.github.com/users/shankyatgithub/repos",
"events_url": "https://api.github.com/users/shankyatgithub/events{/privacy}",
"received_events_url": "https://api.github.com/users/shankyatgithub/received_events",
"type": "User",
"site_admin": false,
"name": null,
"company": null,
"blog": "",
"location": null,
"email": null,
"hireable": null,
"bio": null,
"twitter_username": null,
"public_repos": 17,
"public_gists": 0,
"followers": 0,
"following": 0,
"created_at": "2020-02-26T13:58:39Z",
"updated_at": "2023-11-29T12:10:10Z"
}

app.get('/github', (req,res) => {
    res.send(gitHubData);
})

app.get('/login', (req,res) => {
    let userName = req.query.user;
    if(userName == "admin"){
        res.json({"message":"Login Successful!"});
    }else{
        res.status(401).json({"error":'Invalid Username or Password!'});
    }
})

app.listen(process.env.PORT, () => console.log(`app is listening on port ${process.env.PORT}`));
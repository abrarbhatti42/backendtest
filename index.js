require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const myGitHubData = {
  "login": "abrarbhatti42",
  "id": 147974272,
  "node_id": "U_kgDOCNHogA",
  "avatar_url": "https://avatars.githubusercontent.com/u/147974272?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/abrarbhatti42",
  "html_url": "https://github.com/abrarbhatti42",
  "followers_url": "https://api.github.com/users/abrarbhatti42/followers",
  "following_url": "https://api.github.com/users/abrarbhatti42/following{/other_user}",
  "gists_url": "https://api.github.com/users/abrarbhatti42/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/abrarbhatti42/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/abrarbhatti42/subscriptions",
  "organizations_url": "https://api.github.com/users/abrarbhatti42/orgs",
  "repos_url": "https://api.github.com/users/abrarbhatti42/repos",
  "events_url": "https://api.github.com/users/abrarbhatti42/events{/privacy}",
  "received_events_url": "https://api.github.com/users/abrarbhatti42/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "abrar bhatti",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 3,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-10-15T08:48:16Z",
  "updated_at": "2025-07-09T11:10:03Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) =>{
    res.send('prof.aybee@twitter')
})

app.get('/login', (req, res) => {
    res.send('<h1>please login at prof.aybee</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h1>prof.aybee yt</h1>')
})

app.get('/github', (req, res) => {
    res.json(myGitHubData)
})

app.listen(process.env.PORT, () => {
  console.log(`prof.aybee on port ${port}`)
})

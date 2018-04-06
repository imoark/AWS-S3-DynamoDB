# Final Assignment

Code the following microservices(remember that these are functions):

1. A services that adds all of your audio files in an S3 bucket to a DynamoDB
database.
---
> GET - https://7rpm3t4pnk.execute-api.us-west-2.amazonaws.com/dev/micromusic/generate

> This service allows you **adds all of your audio files in an S3 bucket to a DynamoDB
database**.

---

2. A service that allows a user to search for a song(the name of the file) or
returns a list of all of the songs(files) you have in your S3 bucket.
---
> GET - https://7rpm3t4pnk.execute-api.us-west-2.amazonaws.com/dev/micromusic/search/{filename}

> This service **allows a user to search for a song (the name of the file)**. Type any word that is contained in the file name. For example: `https://7rpm3t4pnk.execute-api.us-west-2.amazonaws.com/dev/micromusic/search/Luna` will search any file name that contains Luna. BE CAREFUL, it is **Case Sensitive**.
---
> GET - https://7rpm3t4pnk.execute-api.us-west-2.amazonaws.com/dev/micromusic/list

> This service allows you to **returns a list of all of the songs (files)**.

---
3. A service that allows you to create a new playlist and add a song to that
playlist. (You might want to use a second DynamoDB table for this)
---
> POST - https://7rpm3t4pnk.execute-api.us-west-2.amazonaws.com/dev/micromusic/playlist/create

> This service **allows you to create a new playlist**. Using Postman, you need to put a JSON object in your Body. Here is one example:

```
{
    "playlistname": "USA Country Song",
    "songlist": {
      "songtitle": "Wasted - Carrie Underwood"
    }
}
```
---
> GET - https://7rpm3t4pnk.execute-api.us-west-2.amazonaws.com/dev/micromusic/playlist/grab

> This is to grab all data from Playlist Table.

---

```Service
Service Information
service: music-serverless
stage: dev
region: us-west-2
stack: music-serverless-dev
api keys:
  None
endpoints:
  GET - https://7rpm3t4pnk.execute-api.us-west-2.amazonaws.com/dev/micromusic/generate
  GET - https://7rpm3t4pnk.execute-api.us-west-2.amazonaws.com/dev/micromusic/list
  GET - https://7rpm3t4pnk.execute-api.us-west-2.amazonaws.com/dev/micromusic/search/{filename}
  POST - https://7rpm3t4pnk.execute-api.us-west-2.amazonaws.com/dev/micromusic/playlist/create
  GET - https://7rpm3t4pnk.execute-api.us-west-2.amazonaws.com/dev/micromusic/playlist/grab

```

For the purposes of this assignment I recommend making several small txt files to stand in for your MP3s/OGG(other audio files).

```txt
    Tee Shirt - Birdy.txt
    Luna Sea - Vetiver.txt
    Wasted - Carrie Underwood.txt
    Irrelevant - Lauren Aquilina.txt
    You Belong With Me - Taylor Swift.txt

```
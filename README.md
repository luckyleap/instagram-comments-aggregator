# Instagram Comments Aggregator

This repository achieves the following tasks using the [instagram api](https://www.instagram.com/developer/):

 1.  Find a user who has a post with at least 200 likes.
 2.  Grab the most recent 100 posts for that user.
 3.  For each of the 100 posts from step #2, return a list of the most recent comments associated with each post.
 4.  Provide a single JSON object that contains the concatenated data received from steps 1-3.

## Setup
In order to run the code, [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) must first be installed.

**Important** :
The current client id used in the project is in sandbox mode and therefore does not have access to public data. In order to get public data, replace `client_id` with an approved client_id under `index.js`


## Running the project

<i>Note</i> : Npm install might take some time
```
npm install

node index.js
```
Open a web browser and go to `http://localhost:3000`

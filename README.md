# group4

## Getting Started
- Clone our repo
Run
`npm install`

Start up the server
`node server.js`



## Express Router and routes

| Route | HTTP Verb | Description |
| --------| --------- | ----------- |
| /api/user/:userid | GET | Retrieve the information of a given user. |
| /api/user| POST | Create a new user |
| /api/listing/:listingId| GET| Get a given listing by ID|
| /api/listing/:listingId| POST | Create a new listing|
| /api/listing/:listingId| DELETE| Delete a given listing|
| /api/request/:requestId| GET | Get a given request info from a user to another|
| /api/request/:requestId| POST| Create a new rental request|
| /api/request/:requestId| DELETE| Delete a given request.|
| /api/user/ratings/:ratingId| GET | Get the rating given to a user|
| /api/listing/ratings/:ratingId| GET | Add or update a rating to a user|

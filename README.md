# group4

## Getting Started
- Clone our repo
Run
`npm install`

Start up the server
`node server.js`



## Express Router and routes

| Route | HTTP Verb | Description |Observations
| --------| --------- | ----------- |---|
|/api/auth/login | POST | Returns token if correct username and password is provided| |
| /api/user/:userid | GET | Retrieve the information of a given user. |
| /api/user/:userId| POST | Update a user| |
| /api/user| POST | Create or update a new user |
| /api/user| GET | Get the list of all users |
| /api/user| DELETE | Delete a user | Only administrators|
| /api/listing/:listingId| GET| Get a given listing by ID|
| /api/listing/:listingId| POST | Create a new listing|
| /api/listing/:listingId| DELETE| Delete a given listing|
| /api/request | GET | Get all the requests in the system| |
| /api/request/:requestId| GET | Get a given request info from a user to another|
| /api/request| POST| Create a new rental request|
| /api/request/:requestId| DELETE| Delete a given request.| Only administrators|
| /api/user/ratings/:ratingId| GET | Get the rating given to a user|
| /api/user/ratings/:ratingId| POST| Create or update a given rating| Only referred user or administrators|
| /api/user/ratings/:ratingId| DELETE | Delete a given rating|
| /api/listing/ratings/:ratingId| GET | Add or update a rating to a user|
| /api/listing/ratings/:ratingId| POST | Create or update a given listing rating|
| /api/listing/ratings/:ratingid| DELETE | Delete a given listing rating|

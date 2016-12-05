import pg from 'pg';

pg.defaults.ssl = true;
const connectionString = process.env.DATABASE_URL || 'postgres://nxlatahqfspior:LfDdATwlKEdEoDes7Yxfza0QR-@ec2-23-23-107-82.compute-1.amazonaws.com:5432/d5lrfb7jjdfu63';

/**
 * Get all the user ratings from our system
 */
function get(req,res){
    const results = [];
    // connect
    pg.connect(connectionString, (err,client,done) => {
      // Handle connection errors
      if (err) {
          done();
          console.log(err);
          return res.status(500).json({success: false, data: err});
      }

      // SQL Query get all listing ratings
      const query = client.query('SELECT * FROM ShareGoods.renterrating;');

      query.on('row', (row) => {
          results.push(row);
      });
      // After all data is returned, close connection and return results
      query.on('end', () => {
          done();
          return res.json(results);
      });
    });
}

/** Make a new rating for a listing
 * @param
 */
function create(req,res){
  const results = [];
  const data = {
      listingId: req.body.listingid,
      consumer: req.body.user1,
      renter: req.body.user2,
      ratings: req.body.rating
  }
  //Connect to the database
  pg.connect(connectionString,(err,client,done) => {
    // Handle connection errors
    if (err) {
        done();
        console.log(err);
        return res.status(500).json({success: false, data: err});
    }

    //SQL QUery data > INSERT
    const query = client.query('INSERT INTO ShareGoods.renterrating (listingid,ratings,startdate,user1id,user2id)' +
     ' VALUES($1,$2,now(),$3,$4)',
    [data.listingId, data.ratings,data.consumer,data.renter]);

    // After all data is returned, close connection and return results
    query.on('end', () => {
        done();
        return res.sendStatus(200);
    });
  });
}

/**
 * Returns the ratings for a specific user that the user requests
 * @param username
 */
function find(req,res){
    const results = [];
    var username = req.params;

    if(params.userId){
      pg.connect(connectionString, (err,client,done) => {
        if(err){
          console.log(err);
          done();
          return res.sendStatus(500).json({success: false, data: err});
        }
        //SELECT query
        const query = client.query('select distinct first_name, last_name, phonenumber, email '
        + ' FROM sharegoods.user a INNER JOIN sharegoods.renterrating b on user2id = $1;',
        [params.userId]);
        //Send the data row by row
        // Stream results back one row at a time
        query.on('row', (row) => {
            results.push(row);
        });
        // After all data is returned, close connection and return results
        query.on('end', () => {
            done();
            return res.json(results);
        });

      });
    }
}

/** Given a listing Id the entry should be updated
 * @param userId, listingId, and newRating
 */
function update(req,res){
      var params = req.params;
      var data = {
        listingId: req.body.listingId,
        newRating: req.body.newRating
      };
      // Produce the query
      pg.connect(connectionString, (err,client, done) => {
        const query = client.query("UPDATE ShareGoods.renterrating SET ratings = $1"+
        "WHERE listingId = $2 AND user2id = $3;",[data.newRating,data.listingId,params.userId]);
        // After all data is returned, close connection and return results
        query.on('end', () => {
            done();
            return res.sendStatus(200);
        });

      });
}

/** Remove a given entry for a review on a user
 * @param listingId, user2id,user1id (body)
 */
function remove(req,res){
  var params = req.params; //user2id
  var data = {
    listingId: req.body.listingid,
    user: req.body.user
  };
  // Produce the query
  pg.connect(connectionString, (err,client, done) => {
    const query = client.query("DELETE FROM ShareGoods.renterrating "+
    " WHERE listingId = $1 AND user1id = $2 AND user2id = $3;",
    [data.listingId,data.user,params.userId]);
    // After all data is returned, close connection and return results
    query.on('end', () => {
        done();
        return res.sendStatus(200);
    });
  });

}

export default {get,create,find,update,remove};

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
     ' VALUES($1,$2,now(),$4,$5)',
    [data.listingId, data.ratings,data.startdate,data.consumer,data.renter]);

    // After all data is returned, close connection and return results
    query.on('end', () => {
        done();
        return res.sendStatus(200);
    });
  });
}

/**
 * Returns the ratings for a specific user that the user requests
 * @param userId
 */
function find(req,res){
    const results = [];
    var params = req.params;
    if(params.userId){
      pg.connect(connectionString, (err,client,done) => {
        if(err){
          console.log(err);
          done();
          return res.sendStatus(500).json({success: false, data: err});
        }
        //SELECT query
        const query = client.query('select first_name,last_name, phonenumber, email '
        + ' from sharegoods.user a INNER JOIN sharegoods.renterrating b on user2id = $1;';
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
 * @param userId, startdate and newRating
 */
function update(req,res){
      var params = req.params;
      var data = {

        prevRating: req.body.prevRating,
        newRating: req.body.newRating
      };

      // Produce the query
      pg.connect(connectionString, (err,client, done) => {
        const query = client.query("UPDATE ShareGoods.listingrating SET rating = $1"+
        "WHERE listingId = $2 AND rating = $3",[data.newRating,params.listingId,data.prevRating]);
        // After all data is returned, close connection and return results
        query.on('end', () => {
            done();
            return res.sendStatus(200);
        });

      });
}

/** Remove a given listingId and ranking from a date
 * @param listingId, rating (body)
 */
function remove(req,res){
  var params = req.params;
  var rating = req.body.rating;
  // Produce the query
  pg.connect(connectionString, (err,client, done) => {
    const query = client.query("DELETE FROM ShareGoods.listingrating "+
    " WHERE listingId = $1 AND rating = $2",[params.listingId,rating]);
    // After all data is returned, close connection and return results
    query.on('end', () => {
        done();
        return res.sendStatus(200);
    });
  });

}

export default {get,create,find,update,remove};

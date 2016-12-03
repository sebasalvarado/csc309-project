import pg from 'pg';

pg.defaults.ssl = true;
const connectionString = process.env.DATABASE_URL || 'postgres://nxlatahqfspior:LfDdATwlKEdEoDes7Yxfza0QR-@ec2-23-23-107-82.compute-1.amazonaws.com:5432/d5lrfb7jjdfu63';

/**
 * Get all the listing ratings from our system
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
      client.query('SELECT * FROM ShareGoods.listingrating;')

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

/* Make a new rating for a listing
 *
 */
function create(req,res){
  const results = [];
  const data = {
      listingId: req.body.listingId,
      rating: req.body.rating,
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
    client.query('INSERT INTO ShareGoods.listingrating (listingid,rating,date) VALUES($1,$2,now())',
    [data.listingid, data.rating]);

    // After all data is returned, close connection and return results
    query.on('end', () => {
        done();
        return res.sendStatus(200);
    });
  });
}

/**
 * Returns the listing that the user requests
 */
function find(req,res){
    const results = [];
    var params = req.params;
    if(params.listingId){
      pg.connect(connectionString, (err,client,done)=> (){
        if(err){
          done();
          console.log(err);
          return res.status(500).json({success: false, data: err});
        }

        //SELECT query
        client.query('select s.listingId as listingId, rating, location, item, category' +
        'from sharegoods.listings s INNER' +
        'JOIN sharegoods.listingrating b ON s.listingId = b.listingId' + 'where s.listingId = $1;',
        [params.listingId]);

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
 * @param listingId, prevRating and newRating
 */
function update(req,res){
      var params = req.params;
      var data = {
        listingId: req.body.listingId,
        prevRating: req.body.prevRating,
        newRating: req.body.newRating
      }

      // Produce the query
      pg.connect(connectionString, (err,client, done) => {
        client.query("UPDATE ShareGoods.listingrating SET rating = $1"+
        "WHERE listingId = $2 AND rating = $3",[data.listingId,data.prevRating,data.newRating]);
        // After all data is returned, close connection and return results
        query.on('end', () => {
            done();
            return res.sendStatus(200);
        });

      });
}

/** Remove a given listingId and ranking from a date
 * @param
 */
function remove(req,res){
  var params = req.params;
  var rating = req.body.rating;
  // Produce the query
  pg.connect(connectionString, (err,client, done) => {
    client.query("DELETE FROM ShareGoods.listingrating"+
    "WHERE listingId = $1 AND rating = $2",[params.listingId,rating]);
    // After all data is returned, close connection and return results
    query.on('end', () => {
        done();
        return res.sendStatus(200);
    });
  });

}

export default {get,create,find,update,remove};

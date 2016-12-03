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
        return res.json(results);
    });
  });
}

function find(req,res){

}

function update(req,res){

}

function remove(req,res){

}

export default {get,create,find,update,remove};

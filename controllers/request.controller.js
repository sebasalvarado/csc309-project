/* Set up database connection */
 import pg from 'pg';
 pg.defaults.ssl = true;
 const connectionString = process.env.DATABASE_URL || 'postgres://nxlatahqfspior:LfDdATwlKEdEoDes7Yxfza0QR-@ec2-23-23-107-82.compute-1.amazonaws.com:5432/d5lrfb7jjdfu63';


/* List all current requests in database */
 function list(req, res, next) {
   const results = [];
   const id = req.params.listingID;
   pg.connect(connectionString, (err, client, done) => {

    /* Handle connection errors */
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    /* Define SQL query, listingID is available */
    if (typeof id != "undefined") {
      const query = client.query('SELECT * FROM ShareGoods.requests WHERE listingid=($1)', [id]);
      query.on('row', (row) => {
        results.push(row);
      });

      /* After all data is returned, close connection and return results */
      query.on('end', () => {
        done();
        return res.json(results);
      });

    }

    /* Define SQL query, listingID is not available */
    else {

      const query = client.query('SELECT * FROM ShareGoods.requests');
      query.on('row', (row) => {
        results.push(row);
      });

      /* After all data is returned, close connection and return results */
      query.on('end', () => {
        done();
        return res.json(results);
      });
    }
  });
 }


/* Create new item request tuple in database */
 function create(req, res, next) {
    res.send("ay");

    const results = [];
    const data = {
    email : req.body.listingid,
    phone : req.body.requestdate,
    item : req.body.userid,

    }
    pg.connect(connectionString, (err, client, done) => {
     // Handle connection errors
     if(err) {
       done();
       console.log(err);
       return res.status(500).json({success: false, data: err});
     }

     /* SQL Query > Insert Data */
     client.query('INSERT INTO ShareGoods.requests (listingid, requestdate, userid) VALUES ($1, $2, $3)',
     [data.listingid, data.requestdate, data.userid]);

     /* SQL Query > Select Data */
     const query = client.query('SELECT * FROM ShareGoods.requests');
     /* Stream results back one row at a time */
     query.on('row', (row) => {
       results.push(row);
     }
   );

     /* After all data is returned, close connection and return results */
     query.on('end', () => {
       done();
       return res.json(results);
     });
   });
 }


/* Remove an item request tuple in database  */
function remove(req, res, next) {
  const id = req.params.listingID;
  const results = [];
  pg.connect(connectionString, (err, client, done) => {
     // Handle connection errors
     if(err) {
       done();
       console.log(err);
       return res.status(500).json({success: false, data: err});
     }
     // SQL Query > Delete Data
    client.query('DELETE FROM ShareGoods.requests WHERE listingid=($1)', [id]);
    var query = client.query('SELECT * FROM ShareGoods.requests');
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
   return res.json('ok');
}

 export default {list, create, remove};

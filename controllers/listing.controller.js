import pg from 'pg';
pg.defaults.ssl = true;
const connectionString = process.env.DATABASE_URL || 'postgres://nxlatahqfspior:LfDdATwlKEdEoDes7Yxfza0QR-@ec2-23-23-107-82.compute-1.amazonaws.com:5432/d5lrfb7jjdfu63';

 function list(req, res, next) {

   const results = [];
   const id = req.params.listingID;
   pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if (err) {

      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});

    }
    // SQL Query > Select Data
    if (typeof id != 'undefined') {
      const query = client.query('SELECT * FROM ShareGoods.listings WHERE listingid=($1)', [id]);
      query.on('row', (row) => {
        results.push(row);
      });
      // After all data is returned, close connection and return results
      query.on('end', () => {
        done();
        console.log("queried");
        return res.json(results);
      });
    }

    else {
      const query = client.query('SELECT * FROM ShareGoods.listings');
      query.on('row', (row) => {
        results.push(row);
      });
      // After all data is returned, close connection and return results
      query.on('end', () => {
        done();
        return res.json(results);
      });
    }

  });

 }

 function create(req, res, next){

   const results = [];
   const data = {
    email : req.body.email,
    phone : req.body.phone,
    item : req.body.item,
    category : req.body.category,
    description : req.body.description,
    returndate : req.body.returnDate,
    location : req.body.location
  }

  pg.connect(connectionString, (err, client, done) => {
   // Handle connection errors
   if(err) {
     done();
     console.log(err);
     return res.status(500).json({success: false, data: err});
   }
   // SQL Query > Insert Data
   client.query('INSERT INTO ShareGoods.listings (email, phone, item, category, description, returndate, location) VALUES ($1, $2, $3, $4, $5, $6, $7)',
   [data.email, data.phone, data.item, data.category, data.description, data.returndate, data.location]);
   // SQL Query > Select Data
   const query = client.query('SELECT * FROM ShareGoods.listings');
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
    client.query('DELETE FROM ShareGoods.listings WHERE listingid=($1)', [id]);
    var query = client.query('SELECT * FROM ShareGoods.listings');
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

 export default {list, create, remove};

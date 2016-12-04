/* Set up database connection */
 import pg from 'pg';
 pg.defaults.ssl = true;
 const connectionString = process.env.DATABASE_URL || 'postgres://nxlatahqfspior:LfDdATwlKEdEoDes7Yxfza0QR-@ec2-23-23-107-82.compute-1.amazonaws.com:5432/d5lrfb7jjdfu63';


/* List all current requests in database */
 function list(req, res, next) {
   const results = [];
   const id = req.user.id;

   pg.connect(connectionString, (err, client, done) => {

    /* Handle connection errors */
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    /* Define SQL query, listingID is available */
    if (typeof id != "undefined") {
      const query = client.query("Select item as item, category as category, description as description, to_char(returnDate, 'YYYY-dd-Mon') as date, email From ShareGoods.requests, ShareGoods.listings WHERE ShareGoods.requests.listingID = ShareGoods.listings.listingid AND userid=($1)", [id]);
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

 export default {list};

import pg from 'pg';

pg.defaults.ssl = true;
const connectionString = process.env.DATABASE_URL || 'postgres://nxlatahqfspior:LfDdATwlKEdEoDes7Yxfza0QR-@ec2-23-23-107-82.compute-1.amazonaws.com:5432/d5lrfb7jjdfu63';

/**
 * Get all the listing ratings from our system
 */
function get(req,res){

}

function create(req,res){

}

function find(req,res){

}

function update(req,res){

}

function remove(req,res){

}

export default {get,create,find,update,remove};

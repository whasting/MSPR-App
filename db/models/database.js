const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://root:root@localhost:5432/mspr_dev';

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
  'CREATE TABLE animals(id SERIAL PRIMARY KEY, name VARCHAR(40) not null, description TEXT, type VARCHAR(40) not null, estimated_age VARCHAR(40), organization VARCHAR(255) not null, adopted BOOLEAN not null)');
query.on('end', () => { client.end(); });

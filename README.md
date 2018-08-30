# take-note

This app allows you to take notes that will persist as they are stored in a Cassandra database. 

The first thing you need to do is install Cassandra and CQL, and then after you have done so you can run the following CQL commands: 

create keyspace takenotesapp with replication={'class': 'SimpleStrategy', 'replication-factor': 1};

use takenotesapp;

CREATE TABLE note( id timeuuid PRIMARY KEY, name text, contents text, author text);

You can then start up the database by running:

cassandra -f 


# take-note

This app allows you to take notes that will persist as they are stored in a Cassandra database. 

The first thing you need to do is install Cassandra and CQL, and then after you have done so you can run the following CQL commands: 

  create keyspace takenotesapp with replication={'class': 'SimpleStrategy', 'replication-factor': 1};

  use takenotesapp;

  CREATE TABLE note( id timeuuid PRIMARY KEY, name text, contents text, author text);

You can then start up the database by running:

cassandra -f 

and then you need to start your spring server by going into note_server and then with: 

./mvnw spring-boot:run

This is assuming you are already running your Tomcat server.

Next cd into note_client and run npm start, and you should see the client running on your browser! 


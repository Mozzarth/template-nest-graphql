## Docker Database

docker run -d --name some-mongo \
 -e MONGO_INITDB_ROOT_USERNAME=mongoadmin \
 -e MONGO_INITDB_ROOT_PASSWORD=secret \
 -e MONGO_INITDB_DATABASE=nestjs-graphql-example \
 -p 27017:27017 \
 mongo

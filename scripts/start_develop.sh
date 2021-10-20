#!/bin/bash
SERVICE=eigenvector.node

docker-compose build ${SERVICE}
docker-compose run --rm ${SERVICE} yarn install

docker-compose up -d
cd ../basic-network


# Now launch the CLI container in order to install, instantiate chaincode
# and prime the ledger with our 10 cars



docker-compose -f ./docker-compose.yml down --volumes --remove-orphans

docker rm -f $(docker ps -aq)

docker rmi -f $(docker images | grep fabcar | awk '{print $3}')

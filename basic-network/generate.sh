#!/bin/sh
#
# Copyright IBM Corp All Rights Reserved
#
# SPDX-License-Identifier: Apache-2.0
#
export PATH=$GOPATH/src/github.com/hyperledger/fabric/build/bin:${PWD}/../bin:${PWD}:$PATH
export FABRIC_CFG_PATH=${PWD}
CHANNEL_NAME=mychannel

# remove previous crypto material and config transactions
rm -fr config/*
rm -fr crypto-config/*

# generate crypto material
cryptogen generate --config=./crypto-config.yaml
if [ "$?" -ne 0 ]; then
  echo "Failed to generate crypto material..."
  exit 1
fi

# generate genesis block for orderer
configtxgen -profile OneOrgOrdererGenesis -outputBlock ./config/genesis.block
if [ "$?" -ne 0 ]; then
  echo "Failed to generate orderer genesis block..."
  exit 1
fi

# generate channel configuration transaction
configtxgen -profile ChannelSS -outputCreateChannelTx ./config/channelss.tx -channelID channelss
if [ "$?" -ne 0 ]; then
  echo "Failed to generate channel configuration transaction..."
  exit 1
fi

configtxgen -profile ChannelMR -outputCreateChannelTx ./config/channelmr.tx -channelID channelmr
if [ "$?" -ne 0 ]; then
  echo "Failed to generate channel configuration transaction..."
  exit 1
fi

configtxgen -profile ChannelKB -outputCreateChannelTx ./config/channelkb.tx -channelID channelkb
if [ "$?" -ne 0 ]; then
  echo "Failed to generate channel configuration transaction..."
  exit 1
fi

configtxgen -profile ChannelALL -outputCreateChannelTx ./config/channelall.tx -channelID channelall
if [ "$?" -ne 0 ]; then
  echo "Failed to generate channel configuration transaction..."
  exit 1
fi

# generate anchor peer transaction
configtxgen -profile ChannelSS -outputAnchorPeersUpdate ./config/Org1MSPanchors_ss.tx -channelID channelss -asOrg Org1MSP
if [ "$?" -ne 0 ]; then
  echo "Failed to generate anchor peer update for Org1MSP..."
  exit 1
fi

configtxgen -profile ChannelSS -outputAnchorPeersUpdate ./config/Org2MSPanchors.tx -channelID channelss -asOrg Org2MSP
if [ "$?" -ne 0 ]; then
  echo "Failed to generate anchor peer update for Org1MSP..."
  exit 1
fi

configtxgen -profile ChannelMR -outputAnchorPeersUpdate ./config/Org1MSPanchors_mr.tx -channelID channelmr -asOrg Org1MSP
if [ "$?" -ne 0 ]; then
  echo "Failed to generate anchor peer update for Org1MSP..."
  exit 1
fi

configtxgen -profile ChannelMR -outputAnchorPeersUpdate ./config/Org3MSPanchors.tx -channelID channelmr -asOrg Org3MSP
if [ "$?" -ne 0 ]; then
  echo "Failed to generate anchor peer update for Org1MSP..."
  exit 1
fi

configtxgen -profile ChannelKB -outputAnchorPeersUpdate ./config/Org1MSPanchors_kb.tx -channelID channelkb -asOrg Org1MSP
if [ "$?" -ne 0 ]; then
  echo "Failed to generate anchor peer update for Org1MSP..."
  exit 1
fi

configtxgen -profile ChannelKB -outputAnchorPeersUpdate ./config/Org4MSPanchors.tx -channelID channelkb -asOrg Org4MSP
if [ "$?" -ne 0 ]; then
  echo "Failed to generate anchor peer update for Org1MSP..."
  exit 1
fi

configtxgen -profile ChannelALL -outputAnchorPeersUpdate ./config/Org4MSPanchors_all.tx -channelID channelall -asOrg Org4MSP
if [ "$?" -ne 0 ]; then
  echo "Failed to generate anchor peer update for Org1MSP..."
  exit 1
fi

configtxgen -profile ChannelALL -outputAnchorPeersUpdate ./config/Org3MSPanchors_all.tx -channelID channelall -asOrg Org3MSP
if [ "$?" -ne 0 ]; then
  echo "Failed to generate anchor peer update for Org1MSP..."
  exit 1
fi

configtxgen -profile ChannelALL -outputAnchorPeersUpdate ./config/Org2MSPanchors_all.tx -channelID channelall -asOrg Org2MSP
if [ "$?" -ne 0 ]; then
  echo "Failed to generate anchor peer update for Org1MSP..."
  exit 1
fi

configtxgen -profile ChannelALL -outputAnchorPeersUpdate ./config/OrgaMSPanchors_all.tx -channelID channelall -asOrg Org1MSP
if [ "$?" -ne 0 ]; then
  echo "Failed to generate anchor peer update for Org1MSP..."
  exit 1
fi
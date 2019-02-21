const imageHash = require('image-hash')
var log4js = require('log4js');
var logger = log4js.getLogger('SampleWebApp');
const express = require("express");
const app = express();
var bodyParser = require("body-parser");
var _ = require('lodash')
const PORT = 8080;
const HOST = "192.168.0.9";
//"192.168.29.197"//
const mongoose = require('mongoose')
var Fabric_Client = require("fabric-client");
var path = require("path");
var util = require("util");
var os = require("os");
var cors = require('cors')
var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken');
var bearerToken = require('express-bearer-token');
var fabric_client = new Fabric_Client();
var channel = fabric_client.newChannel("mychannel");
var peer = fabric_client.newPeer("grpc://localhost:7051");
channel.addPeer(peer);
var order = fabric_client.newOrderer('grpc://localhost:7050')
channel.addOrderer(order);


var member_user = null;
var store_path = path.join(__dirname, "hfc-key-store");
console.log("Store path:" + store_path);
var tx_id = null;



app.options('*', cors());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// app.set('secret', 'thisismysecret');
// app.use(expressJWT({
//   secret: 'thisismysecret'
// }).unless({
//   path: ['/users']
// }));
// app.use(bearerToken());
// app.use(function (req, res, next) {
//   logger.debug(' ------>>>>>> new request for %s', req.originalUrl);
//   if (req.originalUrl.indexOf('/users') >= 0) {
//     return next();
//   }

//   var token = req.token;
//   jwt.verify(token, app.get('secret'), function (err, decoded) {
//     if (err) {
//       res.send({
//         success: false,
//         message: 'Failed to authenticate token. Make sure to include the ' +
//           'token returned from /users call in the authorization header ' +
//           ' as a Bearer token'
//       });
//       return;
//     } else {

//       req.username = decoded.username;
//       logger.debug(util.format('Decoded from JWT token: username - %s', decoded.username));
//       return next();
//     }
//   });
// });





// app.post('/users', async function (req, res) {

//   var username = req.body.username;
//   var password = req.body.password;

//   var db = mongoose.connection;
//   db.on('error', console.error)
//   db.once('open', function () {
//     console.log('Connected to mongod server')
//   })

//   console.log(`username: ${username}, password: ${password}`)
//   try {
//     await mongoose.connect('mongodb://user:a49679947@ds163984.mlab.com:63984/jwt-tutorial', {
//       useNewUrlParser: true
//     }, async (error, db) => {
//       if (error) {
//         console.log(error);
//       } else {
//         var query = {
//           username: username
//         };
//         const docs = await db.collection('hyperledgerTest').find(query).toArray();
//         console.log(docs)
//         console.log(docs[0].password)
//         if (password != docs[0].password) {
//           throw new Error('password');
//         }
//       }
//     })


//     logger.debug('End point : /users');
//     logger.debug('User name : ' + username);
//     if (!username) {
//       res.json(getErrorMessage('\'username\''));
//       return;
//     }
//     var token = jwt.sign({
//       username: username,
//       exp: Math.floor(Date.now() / 1000) + 36000
//     }, app.get('secret'));

//     let response = Fabric_Client.newDefaultKeyValueStore({
//         path: store_path
//       })
//       .then(state_store => {
//         fabric_client.setStateStore(state_store);
//         var crypto_suite = Fabric_Client.newCryptoSuite();
//         var crypto_store = Fabric_Client.newCryptoKeyStore({
//           path: store_path
//         });
//         crypto_suite.setCryptoKeyStore(crypto_store);
//         fabric_client.setCryptoSuite(crypto_suite);
//         return fabric_client.getUserContext("user1", true);
//       })
//       .then(user_from_store => {
//         if (user_from_store && user_from_store.isEnrolled()) {
//           console.log("Successfully loaded user1 from persistence");
//           member_user = user_from_store;
//         } else {
//           throw new Error("Failed to get user1.... run registerUser.js");
//         }

//         logger.debug('-- returned from registering the username %s for organization ', username);
//         if (response && typeof response !== 'string') {
//           logger.debug('Successfully registered the username %s for organization ', username);
//           response.token = token;
//           res.json(response);
//         } else {
//           logger.debug('Failed to register the username %s for organization  with::%s', username, response);
//           res.json({
//             success: false,
//             message: response
//           });
//         }

//       });
//   } catch (error) {
//     res.json({
//       "error": "ERROR"
//     })
//   }
// });

app.get("/api/query/:fcn", function (req, res) {
  Fabric_Client.newDefaultKeyValueStore({
      path: store_path
    })
    .then(state_store => {
      fabric_client.setStateStore(state_store);
      var crypto_suite = Fabric_Client.newCryptoSuite();
      var crypto_store = Fabric_Client.newCryptoKeyStore({
        path: store_path
      });
      crypto_suite.setCryptoKeyStore(crypto_store);
      fabric_client.setCryptoSuite(crypto_suite);
      return fabric_client.getUserContext("user1", true);
    })
    .then(user_from_store => {
      if (user_from_store && user_from_store.isEnrolled()) {
        console.log("Successfully loaded user1 from persistence");
        member_user = user_from_store;
      } else {
        throw new Error("Failed to get user1.... run registerUser.js");
      }


      const request = {
        chaincodeId: "fabcar",
        fcn: req.params.fcn,
        args: [""]
      };
      return channel.queryByChaincode(request);
    })
    .then(query_responses => {
      console.log("Query has completed, checking results");
      console.log(query_responses);
      if (query_responses && query_responses.length == 1) {
        if (query_responses[0] instanceof Error) {
          console.error("error from query = ", query_responses[0]);
        } else {
          console.log("Response is ", query_responses[0].toString());
        }
      } else {
        console.log("No payloads were returned from query");
      }
      res.status(200).json({
        response: query_responses[0].toString()
      });
    })
    .catch(function (err) {
      res.status(500).json({
        error: err.toString()
      });
    });
});
app.use(cors()); 
app.post("/api/invoke/stock", function (req, res) {


  console.log(req.body)
  Fabric_Client.newDefaultKeyValueStore({
      path: store_path
    })
    .then(state_store => {
      fabric_client.setStateStore(state_store);
      var crypto_suite = Fabric_Client.newCryptoSuite();
      var crypto_store = Fabric_Client.newCryptoKeyStore({
        path: store_path
      });
      crypto_suite.setCryptoKeyStore(crypto_store);
      fabric_client.setCryptoSuite(crypto_suite);
      return fabric_client.getUserContext("user1", true);
    })
    .then(user_from_store => {
      if (user_from_store && user_from_store.isEnrolled()) {
        console.log("Successfully loaded user1 from persistence");
        member_user = user_from_store;
      } else {
        throw new Error("Failed to get user1.... run registerUser.js");
      }

      tx_id = fabric_client.newTransactionID();

    // args : 
    // {
    //     userId: 'user1', 
    //     name: '가족사랑 암보험',
    //     image: 'stock.jpg',
    //     InsuranceCompany: 'Samsung',
    // }


      var request = {
        chaincodeId: "fabcar",
        fcn: "createStock",
        args: [req.body.Key, req.body.userId, req.body.name, req.body.image, req.body.InsuranceCompany], //["CAR12", "a", "b", "c", "d"],
        chainId: "mychannel",
        txId: tx_id
      };
      return channel.sendTransactionProposal(request);
    }).then((results) => {
      var proposalResponses = results[0];
      var proposal = results[1];
      let isProposalGood = false;
      if (proposalResponses && proposalResponses[0].response &&
        proposalResponses[0].response.status === 200) {
        isProposalGood = true;
        console.log('Transaction proposal was good');
      } else {
        console.error('Transaction proposal was bad');
      }
      if (isProposalGood) {
        console.log(util.format(
          'Successfully sent Proposal and received ProposalResponse: Status - %s, message - "%s"',
          proposalResponses[0].response.status, proposalResponses[0].response.message));
        var request = {
          proposalResponses: proposalResponses,
          proposal: proposal
        };
        var transaction_id_string = tx_id.getTransactionID(); 
        var promises = [];

        var sendPromise = channel.sendTransaction(request);
        promises.push(sendPromise); 
        let event_hub = channel.newChannelEventHub(peer);
        let txPromise = new Promise((resolve, reject) => {
          let handle = setTimeout(() => {
            event_hub.unregisterTxEvent(transaction_id_string);
            event_hub.disconnect();
            resolve({
              event_status: 'TIMEOUT'
            }); 
          }, 3000);
          event_hub.registerTxEvent(transaction_id_string, (tx, code) => {
              clearTimeout(handle);
              var return_status = {
                event_status: code,
                tx_id: transaction_id_string
              };
              if (code !== 'VALID') {
                console.error('The transaction was invalid, code = ' + code);
                resolve(return_status); 
              } else {
                console.log('The transaction has been committed on peer ' + event_hub.getPeerAddr());
                resolve(return_status);
              }
            }, (err) => {
              reject(new Error('There was a problem with the eventhub ::' + err));
            }, {
              disconnect: true
            } 
          );
          event_hub.connect();

        });
        promises.push(txPromise);

        return Promise.all(promises);
      } else {
        console.error('Failed to send Proposal or receive valid response. Response null or status is not 200. exiting...');
        throw new Error('Failed to send Proposal or receive valid response. Response null or status is not 200. exiting...');
      }

    }).then((results) => {
      console.log('Send transaction promise and event listener promise have completed');
      if (results && results[0] && results[0].status === 'SUCCESS') {
        console.log('Successfully sent transaction to the orderer.');
      } else {
        console.error('Failed to order the transaction. Error code: ' + results[0].status);
      }

      if (results && results[1] && results[1].event_status === 'VALID') {
        console.log('Successfully committed the change to the ledger by the peer');
      } else {
        console.log('Transaction failed to be committed to the ledger due to ::' + results[1].event_status);
      }
    }).catch((err) => {
      console.error('Failed to invoke successfully :: ' + err);
    }).then(() => {
      res.send('success invoke');
    })

});


app.post("/api/invoke/claim", function (req, res) {


  console.log(req.body)
  Fabric_Client.newDefaultKeyValueStore({
      path: store_path
    })
    .then(state_store => {
      fabric_client.setStateStore(state_store);
      var crypto_suite = Fabric_Client.newCryptoSuite();
      var crypto_store = Fabric_Client.newCryptoKeyStore({
        path: store_path
      });
      crypto_suite.setCryptoKeyStore(crypto_store);
      fabric_client.setCryptoSuite(crypto_suite);
      return fabric_client.getUserContext("user1", true);
    })
    .then(user_from_store => {
      if (user_from_store && user_from_store.isEnrolled()) {
        console.log("Successfully loaded user1 from persistence");
        member_user = user_from_store;
      } else {
        throw new Error("Failed to get user1.... run registerUser.js");
      }

      tx_id = fabric_client.newTransactionID();

    // args : 
    // {
    //     userId: 'user1', 
    //     name: '가족사랑 암보험',
    //     image: 'stock.jpg',
    //     InsuranceCompany: 'Samsung',
    // }
        // {
    //     accidentName: " 머리아픔 ",
    //     accidentDay: "18.08.21",
    //     requestDay: "170203",
    //     accidentNum: "sdf165s1",
    //     insuranceName: " 김수정",
    //     insuranceCo: "메리츠",
    //     stateReceive: false,
    //     userId: 'user1', 
    //     image: 'insurance.jpg',
    //   }


      var request = {
        chaincodeId: "fabcar",
        fcn: "createClaimForInsurance",        
        args: [req.body.Key, req.body.accidentName, req.body.accidentDay, req.body.requestDay, req.body.accidentNum, req.body.insuranceName, req.body.insuranceCo, req.body.stateReceive, req.body.userId, req.body.image],
        chainId: "mychannel",
        txId: tx_id
      };
      return channel.sendTransactionProposal(request);
    }).then((results) => {
      var proposalResponses = results[0];
      var proposal = results[1];
      let isProposalGood = false;
      if (proposalResponses && proposalResponses[0].response &&
        proposalResponses[0].response.status === 200) {
        isProposalGood = true;
        console.log('Transaction proposal was good');
      } else {
        console.error('Transaction proposal was bad');
      }
      if (isProposalGood) {
        console.log(util.format(
          'Successfully sent Proposal and received ProposalResponse: Status - %s, message - "%s"',
          proposalResponses[0].response.status, proposalResponses[0].response.message));
        var request = {
          proposalResponses: proposalResponses,
          proposal: proposal
        };
        var transaction_id_string = tx_id.getTransactionID(); 
        var promises = [];

        var sendPromise = channel.sendTransaction(request);
        promises.push(sendPromise); 
        let event_hub = channel.newChannelEventHub(peer);
        let txPromise = new Promise((resolve, reject) => {
          let handle = setTimeout(() => {
            event_hub.unregisterTxEvent(transaction_id_string);
            event_hub.disconnect();
            resolve({
              event_status: 'TIMEOUT'
            }); 
          }, 3000);
          event_hub.registerTxEvent(transaction_id_string, (tx, code) => {
              clearTimeout(handle);
              var return_status = {
                event_status: code,
                tx_id: transaction_id_string
              };
              if (code !== 'VALID') {
                console.error('The transaction was invalid, code = ' + code);
                resolve(return_status); 
              } else {
                console.log('The transaction has been committed on peer ' + event_hub.getPeerAddr());
                resolve(return_status);
              }
            }, (err) => {
              reject(new Error('There was a problem with the eventhub ::' + err));
            }, {
              disconnect: true
            } 
          );
          event_hub.connect();

        });
        promises.push(txPromise);

        return Promise.all(promises);
      } else {
        console.error('Failed to send Proposal or receive valid response. Response null or status is not 200. exiting...');
        throw new Error('Failed to send Proposal or receive valid response. Response null or status is not 200. exiting...');
      }

    }).then((results) => {
      console.log('Send transaction promise and event listener promise have completed');
      if (results && results[0] && results[0].status === 'SUCCESS') {
        console.log('Successfully sent transaction to the orderer.');
      } else {
        console.error('Failed to order the transaction. Error code: ' + results[0].status);
      }

      if (results && results[1] && results[1].event_status === 'VALID') {
        console.log('Successfully committed the change to the ledger by the peer');
      } else {
        console.log('Transaction failed to be committed to the ledger due to ::' + results[1].event_status);
      }
    }).catch((err) => {
      console.error('Failed to invoke successfully :: ' + err);
    }).then(() => {
      res.send('success invoke');
    })

});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
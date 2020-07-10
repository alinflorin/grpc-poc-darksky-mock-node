import { Server, ServerCredentials } from 'grpc';
const services = require('./grpc/darksky_grpc_pb.js');
const messages = require('./grpc/darksky_pb.js');

const randomInteger = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const server = new Server();
server.addService(services.DarkSkyService, {
  getTemp: (call, callback) => {
    console.log(`Called getTemp() with request`, call.request);
    const request = call.request;
    const reply = new messages.GetTempReply();
    reply.setCurrentTemp(randomInteger(0, 100));
    callback(null, reply);
  },
  getWind: (call, callback) => {
    console.log(`Called getWind() with request`, call.request);
    const request = call.request;
    const reply = new messages.GetWindReply();
    reply.setCurrentWind(randomInteger(0, 100));
    callback(null, reply);
  }
});
server.bind('0.0.0.0:3000', ServerCredentials.createInsecure());
server.start();
console.log('Started');
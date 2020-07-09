// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var darksky_pb = require('./darksky_pb.js');

function serialize_darksky_GetTempReply(arg) {
  if (!(arg instanceof darksky_pb.GetTempReply)) {
    throw new Error('Expected argument of type darksky.GetTempReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_darksky_GetTempReply(buffer_arg) {
  return darksky_pb.GetTempReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_darksky_GetTempRequest(arg) {
  if (!(arg instanceof darksky_pb.GetTempRequest)) {
    throw new Error('Expected argument of type darksky.GetTempRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_darksky_GetTempRequest(buffer_arg) {
  return darksky_pb.GetTempRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_darksky_GetWindReply(arg) {
  if (!(arg instanceof darksky_pb.GetWindReply)) {
    throw new Error('Expected argument of type darksky.GetWindReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_darksky_GetWindReply(buffer_arg) {
  return darksky_pb.GetWindReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_darksky_GetWindRequest(arg) {
  if (!(arg instanceof darksky_pb.GetWindRequest)) {
    throw new Error('Expected argument of type darksky.GetWindRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_darksky_GetWindRequest(buffer_arg) {
  return darksky_pb.GetWindRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var DarkSkyService = exports.DarkSkyService = {
  getTemp: {
    path: '/darksky.DarkSky/GetTemp',
    requestStream: false,
    responseStream: false,
    requestType: darksky_pb.GetTempRequest,
    responseType: darksky_pb.GetTempReply,
    requestSerialize: serialize_darksky_GetTempRequest,
    requestDeserialize: deserialize_darksky_GetTempRequest,
    responseSerialize: serialize_darksky_GetTempReply,
    responseDeserialize: deserialize_darksky_GetTempReply,
  },
  getWind: {
    path: '/darksky.DarkSky/GetWind',
    requestStream: false,
    responseStream: false,
    requestType: darksky_pb.GetWindRequest,
    responseType: darksky_pb.GetWindReply,
    requestSerialize: serialize_darksky_GetWindRequest,
    requestDeserialize: deserialize_darksky_GetWindRequest,
    responseSerialize: serialize_darksky_GetWindReply,
    responseDeserialize: deserialize_darksky_GetWindReply,
  },
};

exports.DarkSkyClient = grpc.makeGenericClientConstructor(DarkSkyService);

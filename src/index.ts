import { Server, ServerCredentials } from 'grpc';

const server = new Server();
server.bind('0.0.0.0:3000', ServerCredentials.createInsecure());
server.start();

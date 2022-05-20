/**
 * @fileoverview gRPC-Web generated client stub for todo
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as todo_pb from './todo_pb';


export class todoServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptoraddTodo = new grpcWeb.MethodDescriptor(
    '/todo.todoService/addTodo',
    grpcWeb.MethodType.UNARY,
    todo_pb.addTodoParams,
    todo_pb.todoObject,
    (request: todo_pb.addTodoParams) => {
      return request.serializeBinary();
    },
    todo_pb.todoObject.deserializeBinary
  );

  addTodo(
    request: todo_pb.addTodoParams,
    metadata: grpcWeb.Metadata | null): Promise<todo_pb.todoObject>;

  addTodo(
    request: todo_pb.addTodoParams,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: todo_pb.todoObject) => void): grpcWeb.ClientReadableStream<todo_pb.todoObject>;

  addTodo(
    request: todo_pb.addTodoParams,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: todo_pb.todoObject) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/todo.todoService/addTodo',
        request,
        metadata || {},
        this.methodDescriptoraddTodo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/todo.todoService/addTodo',
    request,
    metadata || {},
    this.methodDescriptoraddTodo);
  }

  methodDescriptordeleteTodo = new grpcWeb.MethodDescriptor(
    '/todo.todoService/deleteTodo',
    grpcWeb.MethodType.UNARY,
    todo_pb.deleteTodoParams,
    todo_pb.deleteResponse,
    (request: todo_pb.deleteTodoParams) => {
      return request.serializeBinary();
    },
    todo_pb.deleteResponse.deserializeBinary
  );

  deleteTodo(
    request: todo_pb.deleteTodoParams,
    metadata: grpcWeb.Metadata | null): Promise<todo_pb.deleteResponse>;

  deleteTodo(
    request: todo_pb.deleteTodoParams,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: todo_pb.deleteResponse) => void): grpcWeb.ClientReadableStream<todo_pb.deleteResponse>;

  deleteTodo(
    request: todo_pb.deleteTodoParams,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: todo_pb.deleteResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/todo.todoService/deleteTodo',
        request,
        metadata || {},
        this.methodDescriptordeleteTodo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/todo.todoService/deleteTodo',
    request,
    metadata || {},
    this.methodDescriptordeleteTodo);
  }

  methodDescriptorgetTodos = new grpcWeb.MethodDescriptor(
    '/todo.todoService/getTodos',
    grpcWeb.MethodType.UNARY,
    todo_pb.getTodoParams,
    todo_pb.todoResponse,
    (request: todo_pb.getTodoParams) => {
      return request.serializeBinary();
    },
    todo_pb.todoResponse.deserializeBinary
  );

  getTodos(
    request: todo_pb.getTodoParams,
    metadata: grpcWeb.Metadata | null): Promise<todo_pb.todoResponse>;

  getTodos(
    request: todo_pb.getTodoParams,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: todo_pb.todoResponse) => void): grpcWeb.ClientReadableStream<todo_pb.todoResponse>;

  getTodos(
    request: todo_pb.getTodoParams,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: todo_pb.todoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/todo.todoService/getTodos',
        request,
        metadata || {},
        this.methodDescriptorgetTodos,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/todo.todoService/getTodos',
    request,
    metadata || {},
    this.methodDescriptorgetTodos);
  }

}


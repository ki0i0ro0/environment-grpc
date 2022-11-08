// GENERATED CODE -- DO NOT EDIT!

// package: todo
// file: todo.proto

import * as todo_pb from "./todo_pb";
import * as grpc from "@grpc/grpc-js";

interface ItodoServiceService
  extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  addTodo: grpc.MethodDefinition<todo_pb.addTodoParams, todo_pb.todoObject>;
  deleteTodo: grpc.MethodDefinition<
    todo_pb.deleteTodoParams,
    todo_pb.deleteResponse
  >;
  getTodos: grpc.MethodDefinition<todo_pb.getTodoParams, todo_pb.todoResponse>;
}

export const todoServiceService: ItodoServiceService;

export interface ItodoServiceServer extends grpc.UntypedServiceImplementation {
  addTodo: grpc.handleUnaryCall<todo_pb.addTodoParams, todo_pb.todoObject>;
  deleteTodo: grpc.handleUnaryCall<
    todo_pb.deleteTodoParams,
    todo_pb.deleteResponse
  >;
  getTodos: grpc.handleUnaryCall<todo_pb.getTodoParams, todo_pb.todoResponse>;
}

export class todoServiceClient extends grpc.Client {
  constructor(
    address: string,
    credentials: grpc.ChannelCredentials,
    options?: object
  );
  addTodo(
    argument: todo_pb.addTodoParams,
    callback: grpc.requestCallback<todo_pb.todoObject>
  ): grpc.ClientUnaryCall;
  addTodo(
    argument: todo_pb.addTodoParams,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<todo_pb.todoObject>
  ): grpc.ClientUnaryCall;
  addTodo(
    argument: todo_pb.addTodoParams,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<todo_pb.todoObject>
  ): grpc.ClientUnaryCall;
  deleteTodo(
    argument: todo_pb.deleteTodoParams,
    callback: grpc.requestCallback<todo_pb.deleteResponse>
  ): grpc.ClientUnaryCall;
  deleteTodo(
    argument: todo_pb.deleteTodoParams,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<todo_pb.deleteResponse>
  ): grpc.ClientUnaryCall;
  deleteTodo(
    argument: todo_pb.deleteTodoParams,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<todo_pb.deleteResponse>
  ): grpc.ClientUnaryCall;
  getTodos(
    argument: todo_pb.getTodoParams,
    callback: grpc.requestCallback<todo_pb.todoResponse>
  ): grpc.ClientUnaryCall;
  getTodos(
    argument: todo_pb.getTodoParams,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<todo_pb.todoResponse>
  ): grpc.ClientUnaryCall;
  getTodos(
    argument: todo_pb.getTodoParams,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<todo_pb.todoResponse>
  ): grpc.ClientUnaryCall;
}

import grpc = require('@grpc/grpc-js')
import protoLoader = require('@grpc/proto-loader')
import { v4 as uuidv4 } from 'uuid'

const packageDefinition = protoLoader.loadSync('./todo.proto', {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
})

const todoProto: any = grpc.loadPackageDefinition(packageDefinition).todo

let Todos: any[] = []

const addTodo = (call: any, callback: any) => {
  const todoObject = {
    id: uuidv4(),
    task: call.request.task,
  }
  console.log(call.request)
  Todos.push(todoObject)
  console.log(`Todo: ${todoObject.id} added!`)
  callback(null, todoObject)
}

const getTodos = (call: any, callback: any) => {
  console.log('Get tasks')
  console.log(Todos)
  callback(null, { todos: Todos })
}

const deleteTodo = (call: any, callback: any) => {
  Todos = Todos.filter((todo: any) => todo.id !== call.request.id)
  console.log(`Todo: ${call.request.id} deleted`)
  callback(null, { message: 'Success' })
}

const getServer = () => {
  const server = new grpc.Server()
  server.addService(todoProto.todoService.service, { addTodo, getTodos, deleteTodo })
  return server
}

if (require.main === module) {
  const server = getServer()
  server.bindAsync('0.0.0.0:9090', grpc.ServerCredentials.createInsecure(), (error, port) => {
    if (error) {
      console.error(error)
    }
    server.start()
    console.log(`server start listing on port ${port}`)
  })
}

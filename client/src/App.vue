<template>
  <div class="w-1/4 mx-auto pt-20 text-center">
    <h1 class="text-2xl text-center font-bold">Todo List gRPC Client</h1>
    <div class="mt-10">
      <input
        v-model="inputField"
        type="text"
        class="appearance-none border rounded py-2 px-3 text-black mb-3 leading-tight outline-none bg-gray-400"
      />
      <button
        class="btn ml-4"
        :disabled="!inputField"
        @click="addTodo"
        @keyup.enter="addTodo"
      >
        Add Todo
      </button>
    </div>
    <ul class="flex flex-col mt-6 rounded-lg border divide-y divide-gray-400">
      <li
        v-for="todo in todos"
        :key="todo.id"
        class="p-4 border-grey flex items-stretch"
      >
        <p class="flex-1">
          {{ todo.task }}
        </p>
        <div
          class="flex-none h-6 w-6 flex items-center justify-center hover:text-gray-600"
          @click="deleteTodo(todo)"
        >
          ×
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import todo_pb from "./todo_pb";
import grpc_web from "./todo_grpc_pb";

const { getTodoParams, addTodoParams, deleteTodoParams } = todo_pb;
const { todoServiceClient } = grpc_web;

const todos = ref<any>("");
const inputField = ref("");

const client = new todoServiceClient("http://localhost:8080", null);

const getTodos = () => {
  let getRequest = new getTodoParams();
  client.getTodos(getRequest, {}, (err: any, response: any) => {
    if (err) console.log(err);
    if (response) {
      console.log(response.toObject());
      todos.value = response.toObject().todosList;
    }
  });
};

getTodos();

const addTodo = () => {
  let addRequest = new addTodoParams();
  addRequest.setTask(inputField.value);
  client.addTodo(addRequest, {}, (err: any) => {
    if (err) console.log(err);
    inputField.value = "";
    getTodos();
  });
};

const deleteTodo = (todo: { id: string }) => {
  let deleteRequest = new deleteTodoParams();
  deleteRequest.setId(todo.id);
  client.deleteTodo(deleteRequest, {}, (err: any, response: any) => {
    if (err) console.log(err);
    if (response && response.getMessage() === "Success") {
      getTodos();
    }
  });
};
</script>

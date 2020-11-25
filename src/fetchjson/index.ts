import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  console.log(response.data);
  const todo = response.data as Todo;
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;
  todos(id, title, completed);
});
const todos = (id: number, title: string, completed: boolean) => {
  console.log(
    `the todo with ID: ${id}
     has a title of: ${title}
     is it finished yet:${completed}
    `
  );
};

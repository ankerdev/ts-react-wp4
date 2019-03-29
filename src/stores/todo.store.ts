import {
  observable,
  action,
  reaction,
  computed,
} from 'mobx';

interface ITodo {
  task: string;
  complete: boolean;
}

class TodoStore {
  @observable todoList: ITodo[] = [];

  constructor() {
    reaction(
      () => this.todoList.filter((todo) => !todo.complete),
      (incompletedTasks) => {
        if (incompletedTasks.length > 5) {
          alert(`You've got ${incompletedTasks.length} incompleted tasks`);
        }
      }
    )
  }

  @computed
  get numberOfTasks(): number {
    return this.todoList.length;
  }

  @action
  addTodo(task: string) {
    this.todoList.push({
      task,
      complete: false,
    });
  }

  @action
  completeTodo(completedTodo: ITodo) {
    const foundTodo: ITodo | undefined = this.todoList.find((todo) => todo === completedTodo);
    if (foundTodo) {
      foundTodo.complete = true;
    }
  }
}

export const todoStore = new TodoStore();

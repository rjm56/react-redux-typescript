// Extract expected state change an test separately to test it is returning what you expect

export const setTodoName = (value: string) => {
  return {
    todoName: value
  }
}
import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [task, setTask] = useState(TASKS);
  const [categories] = useState(CATEGORIES);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function addNewTask(newItem) {
    setTask([...task, newItem]);
  }

  function deleteItem(taskName) {
    setTask(task.filter((item) => item.text !== taskName));
  }

  const itemDisplayed = task.filter((item) => {
    if (selectedCategory === "All") return true;
      return selectedCategory === item.category;
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories= { categories}
        onButtonClick= { selectedCategory}
        clickedButton={ setSelectedCategory}
      />
      <NewTaskForm onTaskFormSubmit={ addNewTask} categories= {categories} />
      <TaskList deleteItem={ deleteItem} tasks={itemDisplayed} />
    </div>
  );
}

export default App;

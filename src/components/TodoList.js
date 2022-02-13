import React from "react";
import Tasks from "./Tasks";

const TodoList = (props) => {
  const deleteTaskHandler = (id) => {
    props.getTaskId(id);
  };

  const favouriteTaskHandler = (id) => {
    props.favTask(id);
  };
  const renderTaskList = props.todo.map((task) => {
    return (
      <Tasks
        key={task.id}
        task={task}
        clickHandler={deleteTaskHandler}
        favHandler={favouriteTaskHandler}
      />
    );
  });

  return <div className="ui celled list">{renderTaskList}</div>;
};

export default TodoList;

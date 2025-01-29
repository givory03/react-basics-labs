import React from 'react';


const Task = (props) => {
  // Assign a class based on priority level
  const priorityClass = `priority ${props.priority}`;

  return (
    <div className="card">
      <p className="title">{props.title}</p>
      <p>Due: {props.deadline}</p>
      <p className="description">{props.description}</p>
      <p className={priorityClass}>Priority: {props.priority}</p>
    </div>
  );
};

export default Task;


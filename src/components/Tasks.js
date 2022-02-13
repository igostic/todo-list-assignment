import React from "react";

const Tasks = (props) => {
  const { id, name, isFavourite } = props.task;
  const styles = {
    containerStyle: {
      float: "right",
      color: isFavourite ? "gold" : "black",
    },
  };
  const { containerStyle } = styles;
  return (
    <div className="item">
      <div className="content" style={{ float: "left" }}>
        <div className="header">{name}</div>
      </div>
      <i
        className="trash alternate outline icon"
        onClick={() => props.clickHandler(id)}
        style={{ float: "right" }}
      ></i>
      <i
        className="star alternate outline icon"
        onClick={() => props.favHandler(id)}
        style={containerStyle}
      ></i>
    </div>
  );
};

export default Tasks;

import React, { useState } from "react";

const Search = (props) => {
  const [searchTerm, SetSearchTerm] = useState("");
  return (
    <div className="ui main">
      {props.todo.length > 0 ? (
        <form className="ui form">
          <div className="field">
            <input
              type="text"
              placeholder="Search Tasks..."
              onChange={(e) => {
                SetSearchTerm(e.target.value);
              }}
            />
          </div>
        </form>
      ) : (
        <h1>No Task :(</h1>
      )}
      {
        // eslint-disable-next-line
        props.todo
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val, key) => {
            return (
              <div className="ui celled list" key={key}>
                <div className="item">
                  <div className="content">
                    <div className="header">{val.name}</div>
                  </div>
                </div>
              </div>
            );
          })
      }
    </div>
  );
};

export default Search;

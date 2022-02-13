import React, { useState, useEffect } from "react";
import { v4 as uuid_v4 } from "uuid";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import FavoriteList from "./components/FavoriteList";
import Pagination from "./components/Pagination";
import Search from "./components/Search";

function App() {
  const LOCAL_STORAGE_KEY = "todo";
  const [todo, setFriends] = useState([]);
  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [tasksPerPage] = useState(4);

  //Passing props from Child to Parents
  const addFriendHandler = (task) => {
    setFriends([...todo, { id: uuid_v4(), ...task }]);
  };

  //Delete the todo by Passing props from Child to Parents
  const removeFriendHandler = (id) => {
    const newFriendsList = todo.filter((task) => {
      return task.id !== id;
    });
    setFriends(newFriendsList);
  };

  //Mark As Favorite by Passing props from Child to Parents
  const starFriendHandler = (id) => {
    var updatedStar;
    const prodIndex = todo.findIndex((p) => p.id === id);
    const updatedFriends = todo;
    const newFavStatus = prodIndex !== -1 ? !todo[prodIndex].isFavourite : null;
    updatedFriends[prodIndex] = {
      ...todo[prodIndex],
      isFavourite: newFavStatus,
    };
    updatedStar = updatedFriends.filter((index) => index !== -1);
    setFriends(updatedStar);
  };

  //Getting from Local Storage
  useEffect(() => {
    const recievedFriends = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (recievedFriends) setFriends(recievedFriends);
  }, []);

  //Storing Friends into the local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todo));
  }, [todo]);

  //Get Current Page of Friends for Pagination
  const indexOfLastFriendPage = currentPage * tasksPerPage;
  const indexOfFirstFriendPage = indexOfLastFriendPage - tasksPerPage;
  const currentFriendPage = todo.slice(
    indexOfFirstFriendPage,
    indexOfLastFriendPage
  );

  //Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route
          path="/"
          exact
          render={(props) => (
            <React.Fragment>
              <AddTask addFriendHandler={addFriendHandler} />
              <TodoList
                todo={currentFriendPage}
                getTaskId={removeFriendHandler}
                favTask={starFriendHandler}
              />
              <div className="ui container">
                <Pagination
                  tasksPerPage={tasksPerPage}
                  totalTasks={todo.length}
                  paginate={paginate}
                />
              </div>
            </React.Fragment>
          )}
        />
        <Route
          path="/favourites"
          exact
          render={(props) => (
            <React.Fragment>
              <FavoriteList starTasks={todo} />
            </React.Fragment>
          )}
        />
        <Route
          path="/search"
          exact
          render={(props) => (
            <React.Fragment>
              <Search todo={todo} />
            </React.Fragment>
          )}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;

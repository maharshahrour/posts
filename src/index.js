import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import { BrowserRouter, Route , Switch } from "react-router-dom";
import PostIndex from './components/posts_index';
import promise from 'redux-promise';
import NewPosts from './components/posts_new';
import PostsShow from './components/post_show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
      <Switch>
        <Route path="/posts/:id" component={PostsShow} />
        <Route path="/posts/new" component={NewPosts} />
        <Route path="/" component={PostIndex}/>
      </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));

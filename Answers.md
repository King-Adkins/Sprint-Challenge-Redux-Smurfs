1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    .map .reduce and .filter dont have side effects but instead will create a new array. We use concat to extend the properties of an oject and cope it to another oject.


1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions are the instructions that tells redux what it needs to do for each reducer. Reducers are the functions that handle each action and replace the store. The store contains the global state of an app it is immutable but can be replaced with new data.


1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    The application state is global while the component state is local.For smaller apps its better to use component state and for larger apps we use application.


1.  What is middleware?

    Middleware is a way of interacting with actions before they hit the reducer.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux-thunk is a middleware that handles async actions returning them as functions that can be called to directly.

1.  Which `react-redux` method links up our `components` with our `redux store`?

    Connect links the components to the redux store otherwise react will not have the store data.
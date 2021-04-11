# optimization_with_react

A simple small project that demonstrates when and how to use Memorization to improve performance.

#### -----------------------------------------------------

Before we dive into how to memoize our apps and improve the performance, we need to ask ourselves why our apps need them?
Sometimes React ends up re-rendering many components, if not all of them, in the DOM tree, where most of them do not need to re-render because there is no update in their UI/props even does not affect the state they have. This is expensive because it's a waste of time and also a waste of CPU resources. This is why we need to memoized to prevent that.
<br />
Also, we need to understand how React works, when we update the DOM, React renders the component, then compares the result with previous one, if there is any different then it will render the result.

<br />
Luckily, React has tools to help us with optimization, and out the box, React is fast and optimized, but if you do need to, react gets your back.

## `React.memo()`

It is a higher order component that we can use to wrap a component to memoized the result so we can
skip unnecessary rendering in the future and this is how React.memo() improves the performance. Now, on every render React will check the memoized Component and compares if it has the same props them it will skip unnecessary rendering.

##### --------------------------------

If we pass simple props like numbers and strings and these props don't get to change then we are in the safe side and React.memo() works perfectly with them. But what if we want to pass a function or object, this kind of approach will cause rendering to our components because whenever we updated the state of the parent component will cause re-render to it because it creates new instance of the object or the function

```js
let obj1 = {
  test: true,
};
let obj2 = {
  test: true,
};
```

now, obviously we have 2 objects have the same key/values so they are equal. WELL,NOOO it's in the dictionary of js

```js
obj1 === obj2; // false because they pointing to different instance in the memory
obj1 === obj1; // true
obj2 === obj2; // true
```

and also React.memo() does a shallow comparison. In this case, we can use the second argument of it

```js
React.memo(Component, checkEquality(prevProps, nextProps));
```

we can use checkEquality function to check the previous and the next props and if they are
equal then return true and skip the unnecessary rendering and if not then update the UI and re-render.

#### -------------

Now, imagine that we need to pass a callback function from parent to child

`Before`

```js
function ParentComponent() {
  const [state, useState] = useState();
  const [name, setName] = useState("");
  const changeState = () => {
    // do something
  };

  return (
    <div>
      <Child state={state} changeState={changeState} />
    </div>
  );
}
```

Now, on each rendering will cause the child to render as well. This is bad and expensive. we need to preserve the function so we can pass to the child without causing any side effect to the `Child Component`
to do that, we are gonna use the useCallback hook function to preserve it

`After`

```js
function ParentComponent() {
  const [state, useState] = useState();
  const [name, setName] = useState("");
  const changeState = useCallback(() => {
    // do something
  }[dependencies]);

  return (
    <div>
      <Child state={state} changeState={changeState} />
    </div>
  );
}
```

`changeState` will always return the same result as long as the dependencies are same.

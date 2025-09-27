## What are Hooks?

Hooks are special functions in React that start with `use`. They let you work with state and other React features in functional components.

---

### The `useState` Hook

The `useState` hook lets you manage state in your component. It provides two things:

- **A state variable**: Retains data between renders.
- **A state setter function**: Updates the variable and triggers React to re-render the component.

#### Syntax

```js
const [state, setState] = useState(initialState)
```

#### Breakdown

- `state`: The current value of the state variable, initialized with `initialState`.
- `setState`: A function to update the state variable.
- `useState(initialState)`: Sets the initial value for the state variable.

> **Note:** Always use hooks at the top level of your component.



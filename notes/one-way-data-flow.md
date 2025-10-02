## One-Way Data Flow

When a prop is set by the parent component, the child component cannot modify it.

This concept is called **One-Way Data Flow**: data flows downward from parent to child, but not upward. The child receives data, but cannot send changes back up through props.

Reference: Video 22. Cart Checkout - Complete Intro to React v9


So a component can only manage it's own state and has no concept of any other's components state.
# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
   Stateful Components are components which have state. Class components also have a lifecycle. On the other hand, functional components don't have state, and they don't use lifeCycle methods. They also aren't allowed to use this.setState method to change state. Stateful components can render both props and state, whereas a stateless component can render props.

2. When does a componentWillMount function be called? What about a componentWillUpdate? componentWillMount is done before the initial render of a componennt and is used to assess props and do any extra logic based upon them and as such can be performed on the server in order to get the first server side rendering.

ComponentWillUpdate gives you control to manipulate the component just before it receives new props or state. The idea of componentWillUpdate is to prepare for a state change, you can use an animation for your divs.

3. Define stateful logic.
   Stateful logic is any code that is used to create or modify data.

4. What are the three step of creating a successful test? What is done in each phase?

- Arrange: This is where you render out the component to the DOM.
- Act: Here we can grab what we're testing.
- Assert: Lastly here we assert using two functions such as expect and .toBeInTheDocument.

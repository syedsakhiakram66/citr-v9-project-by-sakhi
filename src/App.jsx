import {createRoot} from "react-dom/client";
import Pizza from "./components/Pizza.jsx";


const App = () => {
    return (
        <div>
            <h1>Padre Gino's - Order Now</h1>
            <Pizza name="S Pizza" desc="Flavorful trio of juicy beef, crisp capsicum with spicy red paprika"/>
            <Pizza name="Veg" desc="Delightful combination of onion, capsicum, tomato & grilled mushroom"/>
            <Pizza name="Mozrella Pizza" desc="A hugely popular mozzerella, with a deliciously tangy single cheese topping"/>
            <Pizza name="Too Much Veg Pizza" desc="Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno & extra cheese"/>
        </div>
    )
    
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));





















// what this code did. -- use version control to understand these comments better.

/* 
App is defined as a functional component, 
it returs a React.createElement function that creates a div and a h1
By calling it once we stamp it once in the page


Reusable Components, on line 1 we declared and defined another component called Pizza.
This component is then used in the App component many times which result in it displaying many times. 

This is now been written on my third comment.

I am now using props to make my components more reusable and useful and this saves us alot of time. As you can read the code and understand most of the code.
To explain some concepts I am using explicit code. Use version control to understand this code better.


*/

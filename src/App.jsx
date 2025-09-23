const Pizza = () => {
    return React.createElement(
        "div",
        {},
       [
        React.createElement("h1", {}, "The Pepperoni Pizza" ),
        React.createElement("p", {}, "ham, cheese" )
       ]
    ) 
    
}

const App = () => {
    return React.createElement (
        "div",
        {},
        [
        React.createElement (
            "h1", {}, "Padre Gino's"
        ),

        React.createElement(Pizza),
        React.createElement(Pizza),
        React.createElement(Pizza),
        React.createElement(Pizza),
        React.createElement(Pizza)
    ]
    )   
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));

// what this code does. 

/* 
App is defined as a functional component, 
it returs a React.createElement function that creates a div and a h1
By calling it once we stamp it once in the page


Reusable Components, on line 1 we declared and defined another component called Pizza.
This component is then used in the App component many times which result in it displaying many times. 


*/

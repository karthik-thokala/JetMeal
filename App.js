const parent = React.createElement("div",{id:"parent"},
    [React.createElement(
        "div",
        {id:"child"},
        [React.createElement("h1",{},"I am the h1 Tag "),React.createElement("h2",{},"I am the h2 Tag "),]
    ),React.createElement(
        "div",
        {id:"child"},
        [React.createElement("h1",{},"I am the h1 Tag "),React.createElement("h2",{},"I am the h2 Tag "),]
    ),]

);



const k = React.createElement("h1",{id:"heading",xyz:"abc"},"Hello World from React this is Karthik  !");
console.log(parent);
const j = ReactDOM.createRoot(document.getElementById("root"));
j.render(parent);
const main = React.createElement("main", { id: "mainBody" }, ["THIS IS THE MAIN BODY", React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "I am H1 using React"), React.createElement("h2", {}, "I am H2 using React")]), React.createElement("div", { id: "child2" },
            [React.createElement("h1", {}, "I am H1 using React"), React.createElement("h2", {}, "I am H2 using React")])])]);

;
const root1 = ReactDOM.createRoot(document.querySelector("body"));
root1.render(main);






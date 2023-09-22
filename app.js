//Single Element
const heading = React.createElement('h1',{id:'heading'},"Hello React JS");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);

//Nested Element
const divTag = React.createElement('div',{id:'Grandparent'},
React.createElement('div',{id:'parent'}),[
    React.createElement('div',{id:innerParent},
    [
        React.createElement('h1',{id:'heading1'},"Heading in side divs1"),
        React.createElement('h2',{id:'heading2'},"Heading in side divs2")
    ]),
    React.createElement('div',{id:innerParent},
    [
        React.createElement('h1',{id:'heading1'},"Heading in side divs1"),
        React.createElement('h2',{id:'heading2'},"Heading in side divs2")
    ]),
]);

root.render(divTag);
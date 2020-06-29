console.log('App.js is running')

//JSX - JavaScript XML
const app = {
    title: 'Indecision-App',
    subtitle: 'rafamar testing React.js',
    options: ['One','Two']
}
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{(app.options.length>0 ? 'Here are your options' : 'No options')}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>);

var username = 'RafaMar';
var age = 28;
var userLocation = 'Ronda';
const user = {
    name: 'RafaMar',
    age: 28,
    location: 'Ronda'
}
function getLocation(location){
    if(location){
        return <p>Location: {location}</p>;
    }
}
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age>=18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
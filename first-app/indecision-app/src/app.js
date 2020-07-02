console.log('App.js is running')

//JSX - JavaScript XML
const appRoot = document.getElementById('app');
const app = {
    title: 'Indecision-App',
    subtitle: 'rafamar testing React.js',
    options: []
}
const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option){
        app.options.push(option);
        e.target.elements.option.value = ''
        renderTemplate();
    }
};

const onRemoveAll = () => {
    app.options = [];
    renderTemplate();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum]
    alert(option);
};

const renderTemplate = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{(app.options.length>0 ? 'Here are your options' : 'No options')}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>¿Que debería hacer?</button>
            <button onClick={onRemoveAll}>Remove all</button>
            <ol>
                { app.options.map((option) => <li key={option}>{option}</li>) }
            </ol>
            <form onSubmit={onFormSubmit}> 
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}


renderTemplate();

//------------------------------------------------------------------//
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


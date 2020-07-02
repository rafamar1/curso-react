const appRoot = document.getElementById('app');
let visibility = true;
const hideShowParagraph = () => {
    visibility = !visibility;
    render();
};
const render = () =>{
    const template = (
        <div>
            <h1>Visibility Toogle</h1>
            <button onClick={hideShowParagraph}>{visibility ? 'Hide details' : 'Show details'}</button>
            {visibility && (<p>Hey. These are some details you can now see!</p>)}
        </div>
    );
    ReactDOM.render(template, appRoot);
}
render();
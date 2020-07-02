let count = 0;
const someId = 'customId'
const plusOne = () => {
    count++;
    renderCounterApp();
}
const minusOne = () => {
    count--;
    renderCounterApp();
}
const reset = () =>{
    count=0;
    renderCounterApp();
};
const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateThree = (
        <div>
            <h1>Count: {count}</h1>
            <button id="plusOne"className="button" onClick={plusOne}>+1</button>
            <button id="minusOne"className="button" onClick={minusOne}>-1</button>
            <button id={someId} className="button" onClick={reset}>reset</button>
        </div>
    );     
    
    ReactDOM.render(templateThree, appRoot);       
};

renderCounterApp();
class VisibilityToogle extends React.Component {
    constructor(props){
        super(props);
        this.handleToogleVisibility = this.handleToogleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleToogleVisibility(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render() {
        return (
        <div>
            <h1>Visibility Toogle</h1>
            <button onClick={this.handleToogleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
            {this.state.visibility && (<p>Hey. These are some details you can now see!</p>)}
        </div>
        );
    }
}

ReactDOM.render(<VisibilityToogle/>, document.getElementById('app'));
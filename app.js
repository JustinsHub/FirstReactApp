const App = () =>{
    return (
        <div>
            <h1>Hello World</h1>
            <Animal name="Dexter" species="Dog"/>
            <Animal emptiness="yup"/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))
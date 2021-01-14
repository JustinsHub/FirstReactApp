const App = () =>{
    return (
        <div>
            <h1>Hello World</h1>
            <Animal name="Dexter" species="Dog" random={["some", "random", "array"]}/>
            <RandomAge age={[1,2,3,4,5]}/>
            <ToDoList todos={["clean", "wash", "coffee"]}/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))
const ToDoList = ({todos})=>{
    return (
    <ul>
        Our To Do's: {todos.map(t => <li>{t}</li>)}
    </ul>
    )
}
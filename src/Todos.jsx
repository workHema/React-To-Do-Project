import Todo from "./Todo";

function Todos({todos, changeStatusValue, DeleteItem}){
return <>
<div className="todoContainer">
{todos.map((todo)=>{
    return <Todo {...todo} key={todo.id} DeleteItem={DeleteItem} changeStatusValue={changeStatusValue}/>
})}
</div>

</>
}

export default Todos
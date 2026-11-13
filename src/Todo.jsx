import './assets/css/Form.css'
import { ImCross } from "react-icons/im";
function Todo({title, status, id, changeStatusValue, DeleteItem}){
return <>
<div className="list-render TodosContainer
">

<div className="todo-title ">
<p className={`${status? "Done" : ''} title`}><input type="checkbox" name="" id="" checked={status} onClick={()=>{changeStatusValue(id)}} readOnly/>
{title}

</p>
<button onClick={()=>{DeleteItem(id)}} className='todo-btn'><ImCross /></button>

</div>

</div>
</>
}

export default Todo
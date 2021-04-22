import React,{useState} from 'react';
//import TodoList from './TodoList'
import { AiOutlineEdit} from 'react-icons/ai';
import { IoMdCloseCircleOutline} from 'react-icons/io';
import TodoForm from './TodoForm';

function Todo({todos, completeTodo, removeTodo, updateTodo }) {

    const [edit, setEdit] = useState({
        id:null,
        value: ''
    })

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ""
        })
    }

    if(edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpdate}/>
    }

    return todos.map((todo,index) =>(
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>

            <div key={todo.id} onClick={()=> completeTodo(todo.id) }>
                {todo.text}
            </div>
            <div className='icons'>
            <IoMdCloseCircleOutline
            onClick={()=>removeTodo(todo.id)}
            className='delete-icon'
            />
            <AiOutlineEdit
            onClick={()=> setEdit({ id:todo.id, value: todo.text})}
            className='edit-icon'
            />
            </div>
        
        </div>
    ));
}

export default Todo

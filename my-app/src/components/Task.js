import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={()=>onToggle(task.id)}>
            <h3>{task.text}{''}
                <FaTimes style={{color:'red', cursor:'pointer'}} 
                onClick={()=> onDelete(task.id)}/>                     
            </h3>                                                               
            <p>{task.day}</p>
        </div>                                     // by mistake, i added an onToggle={onToggle} in FaTimes, 
                                                   // that make the onDoubleClick ignore them. Also
                                                   //if you say onClick insted of onDobClick, 
                                                   //it ignores the FaTimes Click, and so the removing of Task
    )
}

export default Task

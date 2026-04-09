import { Draggable } from '@hello-pangea/dnd';
import { deleteTodo } from '../api';

function TodoItem({ task, index, onTodoDeleted }) {
  const stringId = String(task.id);

  const handleDelete = async (e) => {
      e.stopPropagation();
      try {
        await deleteTodo(task.id);
        onTodoDeleted(task.id, task.status);
      } catch (error) {
        console.error("Erreur lors de la suppression :", error);
      }
    };
  
  return (
   <Draggable draggableId={stringId} index={index}>
     {(provided) => (
       <div
         className="item"
         ref={provided.innerRef}
         {...provided.draggableProps}
         {...provided.dragHandleProps}
         style={provided.draggableProps.style}
       >
  
         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <strong>{task.title}</strong>
            <button onClick={handleDelete} className="delete-btn">×</button>
         </div>
         {task.description && (
           <p className="item-desc">{task.description}</p>
         )}
       </div>
     )}
   </Draggable>
  );
}

export default TodoItem;
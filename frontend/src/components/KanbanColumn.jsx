import { Droppable } from '@hello-pangea/dnd';
import TodoItem from './TodoItem';

export default function KanbanColumn({ title, id, tasks, onTodoDeleted }) {
  return (
    <div className="column">
      <h3>{title}</h3>
      <Droppable droppableId={id}>
        {(provided) => (
          <div 
            className="list" 
            ref={provided.innerRef} 
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              <TodoItem 
                key={task.id}
                task={task} 
                index={index} 
                onTodoDeleted={onTodoDeleted} 
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
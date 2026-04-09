import { Draggable } from '@hello-pangea/dnd';

export default function TodoItem({ task, index }) {
  const stringId = String(task.id);

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
          {task.content || task.title || task.text || task.name || "ID: " + task.id}
        </div>
      )}
    </Draggable>
  );
}
import React, { useState, useEffect } from 'react';
import { DragDropContext } from '@hello-pangea/dnd';
import { getAllTodos, updateTodo } from '../api';
import KanbanColumn from './KanbanColumn';
import AddTodo from './AddTodo';

export default function KanbanBoard() {
  const [tasks, setTasks] = useState({ todo: [], in_progress: [], done: [] });

  useEffect(() => {
    const loadData = async () => {
      const data = await getAllTodos();

      const cleanData = data.map(t => ({ ...t, id: String(t.id) }));
      
      setTasks({
        todo: cleanData.filter(t => t.status === 'todo'),
        in_progress: cleanData.filter(t => t.status === 'in_progress'),
        done: cleanData.filter(t => t.status === 'done')
      });
    };
    loadData();
  }, []);

  const onDragEnd = async (result) => {
    const { source, destination, draggableId } = result;
    if (!destination) return;

    const start = source.droppableId;
    const end = destination.droppableId;

    const startList = [...tasks[start]];
    const endList = [...tasks[end]];
    const [movedItem] = startList.splice(source.index, 1);

    if (start === end) {
      startList.splice(destination.index, 0, movedItem);
      setTasks({ ...tasks, [start]: startList });
    } else {
      endList.splice(destination.index, 0, movedItem);
      setTasks({
        ...tasks,
        [start]: startList,
        [end]: endList
      });

      const updatedTodo = { 
          title: movedItem.title,
          description: movedItem.description,
          status: end 
      }
      await updateTodo(draggableId, updatedTodo)
    }
    
    const updatedTodo = { ...movedItem, status: end };
    console.log("Envoi à l'API:", draggableId, updatedTodo);
    await updateTodo(draggableId, updatedTodo);
  };

  const onTodoAdded = (newTodo) => {

    const todoWithId = { ...newTodo, id: String(newTodo.id) };
    setTasks(prev => ({ ...prev, todo: [...prev.todo, todoWithId] }));
  };

  return (
    <div className="kanban-wrapper">
      <AddTodo onTodoAdded={onTodoAdded} />
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="board">
          <KanbanColumn title="À faire" id="todo" tasks={tasks.todo} />
          <KanbanColumn title="En cours" id="in_progress" tasks={tasks.in_progress} />
          <KanbanColumn title="Terminé" id="done" tasks={tasks.done} />
        </div>
      </DragDropContext>
    </div>
  );
}
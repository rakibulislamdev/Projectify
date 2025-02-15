import { useState } from "react";
import Done from "./cards/Done";
import OnProgress from "./cards/OnProgress";
import Revised from "./cards/Revised";
import Todo from "./cards/Todo";
import { initialData } from "../data/Task";
import Modal from "./modal/Modal";

export default function TodoLists() {
  const [task, setTask] = useState(initialData);
  const [openModal, setOpenModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const reverseTask = [...task].reverse();

  function handleModalClose() {
    setOpenModal(false);
    setTaskToUpdate(null);
  }

  function handleCreateTask(event, newTask, isEdit) {
    event.preventDefault();

    if (isEdit) {
      setTask([...task, newTask]);
    } else {
      setTask(
        task.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }

    setOpenModal(false);
  }

  function handleEditTask(item) {
    setTaskToUpdate(item);
    setOpenModal(true);
  }

  function handleDeleteTask(itemId) {
    const filteredTodo = task.filter((task) => task.id !== itemId);
    setTask(filteredTodo);
  }

  return (
    <div className="mx-auto max-w-7xl p-6">
      {openModal && (
        <Modal
          onClose={handleModalClose}
          onCreateTask={handleCreateTask}
          taskToUpdate={taskToUpdate}
        />
      )}

      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Projectify</h2>
        <div className="flex space-x-2">
          <button
            className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white cursor-pointer"
            onClick={() => setOpenModal(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
              <path d="M15 12h-6" />
              <path d="M12 9v6" />
            </svg>
            Add
          </button>
        </div>
      </div>
      <div className="-mx-2 mb-6 flex flex-wrap">
        <Todo
          task={reverseTask}
          onEditTask={handleEditTask}
          onDeleteTask={handleDeleteTask}
        />
        <OnProgress
          task={reverseTask}
          onEditTask={handleEditTask}
          onDeleteTask={handleDeleteTask}
        />
        <Done
          task={reverseTask}
          onEditTask={handleEditTask}
          onDeleteTask={handleDeleteTask}
        />
        <Revised
          task={reverseTask}
          onEditTask={handleEditTask}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    </div>
  );
}

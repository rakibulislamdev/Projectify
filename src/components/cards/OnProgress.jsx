import { useContext } from "react";
import { taskContext } from "../../context";

export default function OnProgress({ onEditTask, onDeleteTask }) {
  const { task } = useContext(taskContext);
  const filteredProgress = [...task]
    .reverse()
    .filter((task) => task.category === "On-Progress");

  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div className="rounded-lg bg-yellow-500 p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            On Progress ({filteredProgress.length})
          </h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={18}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-sort-descending"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l9 0" />
            <path d="M4 12l7 0" />
            <path d="M4 18l7 0" />
            <path d="M15 15l3 3l3 -3" />
            <path d="M18 6l0 12" />
          </svg>
        </div>

        {filteredProgress.length === 0 ? (
          <p>Task List is empty!</p>
        ) : (
          filteredProgress.map((item) => (
            <div key={item.id} className="mb-4 rounded-lg bg-gray-800 p-4">
              <div className="flex justify-between">
                <h4 className="mb-2 flex-1 font-semibold text-yellow-500">
                  {item.taskName}
                </h4>
                <div className="flex gap-2">
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
                    className="h-4 w-4 cursor-pointer text-zinc-300"
                    onClick={() => onDeleteTask(item.id)}
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 7l16 0" />
                    <path d="M10 11l0 6" />
                    <path d="M14 11l0 6" />
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                  </svg>
                  <svg
                    className="h-4 w-4 cursor-pointer text-zinc-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => onEditTask(item)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </div>
              </div>
              <p className="mb-2 text-sm text-zinc-200">{item.description}</p>
              <p className="mt-6 text-xs text-zinc-400">
                {new Date(item.dueDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "2-digit",
                })}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

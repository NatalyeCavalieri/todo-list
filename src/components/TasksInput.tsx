
import { RiCheckboxBlankCircleLine } from "react-icons/ri"
import { RiCheckboxCircleLine } from "react-icons/ri"
import { FaRegTrashAlt } from "react-icons/fa"
import { TaskTyping } from "../App"

interface TaskProps {
  task: TaskTyping
  removeTask: (id: number) => void
  handleCompleted: () => void
}

export function TasksInput({ task, removeTask, handleCompleted }: TaskProps) {
 

  function handleRemove() {
    removeTask(task.id)
  }

  return (
    <div className="flex items-center justify-center mb-[12px] ">
      <div className="w-[640px] flex items-center bg-stone-600 p-4 justify-between rounded-xl">
        <div className=" flex gap-4">
          <button onClick={handleCompleted}>
            {task.completed ? (
              <RiCheckboxCircleLine className="text-orange-400 text-xl" />
            ) : (
              <RiCheckboxBlankCircleLine className="text-orange-400 text-xl" />
            )}
          </button>
          <p className="text-base text-stone-200"> {task.nameTask} </p>
        </div>
        <button onClick={handleRemove}>
          <FaRegTrashAlt className=" text-lg text-orange-950 transition-transform duration-300 ease-in-out transform hover:scale-105" />
        </button>
      </div>
    </div>
  )
}

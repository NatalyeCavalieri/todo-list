import { useState } from "react"
import { RiCheckboxBlankCircleLine } from "react-icons/ri"
import { RiCheckboxCircleLine } from "react-icons/ri"
import { FaRegTrashAlt } from "react-icons/fa"
import { TaskTyping } from "../App"

interface TaskProps{
  task: TaskTyping
}

export function TasksInput({ task } : TaskProps) {
  const [check, setCheck] = useState(false)
  function handleCheckBox() {
    setCheck(!check)
  }

  return (
    <div className="flex items-center justify-center">
      <div className="w-[640px] flex items-center bg-stone-600 p-4 justify-between rounded-xl">
        <div className=" flex gap-4">
          <button onClick={handleCheckBox}>
            {check ? (
              <RiCheckboxCircleLine className="text-orange-400 text-xl" />
            ) : (
              <RiCheckboxBlankCircleLine className="text-orange-400 text-xl" />
            )}
          </button>
          <p className="text-base text-stone-200"> {task.nameTask} </p>
        </div>
        <button>
          <FaRegTrashAlt className=" text-lg text-orange-950 transition-transform duration-300 ease-in-out transform hover:scale-105" />
        </button>
      </div>
    </div>
  )
}

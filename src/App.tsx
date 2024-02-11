import { PiSealCheckFill } from "react-icons/pi"
import { IoIosAddCircleOutline } from "react-icons/io"
import { Notepad } from "@phosphor-icons/react"

export function App() {
  return (
    <div className="bg-stone-800 h-screen">
      <header className="bg-stone-900 h-48 flex items-center justify-center gap-2">
        <PiSealCheckFill className="text-yellow-300 size-6" />
        <h1 className="text-slate-50 text-4xl font-black text-yellow-200 ">
          to<span className="text-yellow-500">do</span>
        </h1>
      </header>
      <div className="flex items-center justify-center">
        <form className="w-[640px] flex items-center justify-center -mt-6 gap-2">
          <input
            className="bg-stone-600 placeholder:text-stone-400 p-4 rounded-lg w-full h-12 text-stone-100 outline-none"
            type="text"
            placeholder="Adicione uma nova tarefa"
          />
          <button className="bg-yellow-500 p-4 rounded-lg h-12 flex items-center font-bold text-stone-800 hover:bg-yellow-600 duration-200 gap-1">
            Criar
            <IoIosAddCircleOutline className="size-6" />
          </button>
        </form>
      </div>

      <div className=" flex justify-center mt-16 ">
        <div className="w-[640px] flex justify-between">
          <div className="flex items-center gap-2">
            <p className="text-sm font-bold text-yellow-200">Tarefas criadas</p>
            <span className="p-1 bg-stone-600 rounded-full w-6 h-5 flex items-center justify-center text-stone-50 text-sm">
              0
            </span>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-sm font-bold text-yellow-500">Concluidas</p>
            <span className="p-1 bg-stone-600 rounded-full w-6 h-5 flex items-center justify-center text-stone-50 text-sm">
              0
            </span>
          </div>
        </div>
      </div>

      <div className=" mt-6 flex flex-col items-center justify-center">
        <div className="w-[640px] border-y-[0.5px] rounded-xl border-stone-500"></div>
        <Notepad className="text-stone-600 mt-16" size={56} />
        <p className="text-md font-bold text-stone-400 mt-4">
          Você ainda não tem tarefas cadastradas{" "}
          <p className="text-stone-500 font-normal">
            Crie tarefas e organize seus itens a fazer
          </p>
        </p>
      </div>
      
    </div>
  )
}

import TodoLists from "./components/TodoLists";
import Header from "./Header";
import SideBar from "./SideBar";
import { taskContext } from "./context";
import { useState } from "react";
import { initialData } from "./data/Task";

function App() {
  const [task, setTask] = useState(initialData);

  return (
    <taskContext.Provider value={{ task, setTask }}>
      <div className="flex h-screen">
        <SideBar />
        <main className="flex-1 overflow-y-auto overflow-x-hidden">
          <Header />
          <TodoLists />
        </main>
      </div>
    </taskContext.Provider>
  );
}

export default App;

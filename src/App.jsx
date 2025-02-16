import { taskContext } from "./context";
import { useState } from "react";
import { initialData } from "./data/Task";
import Page from "./Page";

function App() {
  const [task, setTask] = useState(initialData);

  return (
    <taskContext.Provider value={{ task, setTask }}>
      <Page />
    </taskContext.Provider>
  );
}

export default App;

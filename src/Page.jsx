import TodoLists from "./components/TodoLists";
import Header from "./Header";
import SideBar from "./SideBar";

export default function Page() {
  return (
    <div className="flex h-screen">
      <SideBar />
      <main className="flex-1 overflow-y-auto overflow-x-hidden">
        <Header />
        <TodoLists />
      </main>
    </div>
  );
}

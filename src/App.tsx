import { useFetch } from "./hooks/useFetch";
import { Card } from "./components/Card";
import { Sidebar } from "./components/Sidebar";

function App() {
  const { characterList } = useFetch();

  return (
    <>
      <Sidebar
        children={
          <>
            <div className="flex flex-row flex-wrap w-full justify-evenly">
              {characterList?.results.map((re) => (
                <Card key={re.id} re={re} />
              ))}
            </div>
          </>
        }
      />
    </>
  );
}

export default App;

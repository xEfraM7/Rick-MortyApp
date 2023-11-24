import { useFetch } from "./hooks/useFetch";
import { Card } from "./components/Card";
import { Sidebar } from "./components/Sidebar";
import { Paginate } from "./components/Paginate";

function App() {
  const { characterList, searchPage } = useFetch();

  return (
    <>
      <Sidebar
        children={
          <>
            <div className="grid grid-cols-4 gap-4">
              {characterList?.results.map((re) => (
                <Card key={re.id} re={re} />
              ))}
            </div>
            <Paginate
              pages={characterList?.info.pages || 0}
              searchPage={searchPage}
            />
          </>
        }
      />
    </>
  );
}

export default App;

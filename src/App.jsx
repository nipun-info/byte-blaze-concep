import { Nav } from "./Components/Nav";
import Blogs from "./pages/Blogs";
import Bookmarks from "./pages/Bookmarks";
import { Home } from "./pages/Home";


function App() {
  return (
    <>
      <div>
        <Nav />
      </div>
      <Home />
      <Blogs />
      <Bookmarks />
    </>
  );
}

export default App;

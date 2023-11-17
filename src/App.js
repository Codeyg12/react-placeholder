import PostList from "./components/PostList";
import StoreProvider from "./utils/storeProvider";

function App() {
  return (
    <>
      <StoreProvider>
        <PostList />
      </StoreProvider>
    </>
  );
}

export default App;

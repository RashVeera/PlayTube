import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import store from "./utils/Appstore";
import { Provider } from "react-redux";
import WatchPage from "./components/WatchPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import ResultSearches from "./components/ResultSearches";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
        {
          path: "/search",
          element: <ResultSearches />,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <div className="flex-col  bg-black">
        <Header />
        {/* <Body/> */}
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;

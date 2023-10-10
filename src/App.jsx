import { RouterProvider, createBrowserRouter } from "react-router-dom";
import List from "./List";
import AppLayout from "./AppLayout";
import { ListProvider } from "./ListContext";
import Item from "./Item";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <List />,
      },
      {
        path: "/task/:id",
        element: <Item />,
      },
    ],
  },
]);

function App() {
  return (
    <ListProvider>
      <RouterProvider router={router} />
    </ListProvider>
  );
}

export default App;

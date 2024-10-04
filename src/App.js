import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//Components
import Home from "./screens/HomeScreen";
import Admin from "./screens/AdminScreen";
import Panel from "./screens/PanelScreen";
import Titles from "./screens/TitlesScreen";
import Types from "./screens/TypesScreen";
import Categories from "./screens/CategoriesScreen";
import SubCategories from "./screens/SubCategoriesScreen";
import Badges from "./screens/BadgesScreen";
import Posts from "./screens/PostsScreen";
import Notifications from "./screens/NotificationsScreen";
import Subscriptions from "./screens/SubscriptionsScreen";
import Supports from "./screens/SupportsScreen";
import Reports from "./screens/ReportsScreen";
import Term from "./screens/TermScreen";
import Contact from "./screens/ContactScreen";
//Old Components
import PersistLogin from "./components/olds/PersistLogin";
import RequireAuth from "./components/olds/RequireAuth";
import Missing from "./components/olds/Missing";
import Unauthorized from "./components/olds/Unauthorized";
//Constants
import Roles from "./constants/Roles";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "unauthorized",
      element: <Unauthorized />,
    },
    {
      path: "privacy_policy",
      element: <Term />,
    },
    {
      path: "contact_us",
      element: <Contact />,
    },
    {
      path: "admin",
      element: <Admin />,
    },
    {
      element: <PersistLogin />,
      children: [
        {
          element: <RequireAuth allowedRoles={[Roles.Admin]} />,
          children: [
            {
              path: "panel",
              element: <Panel />,
            },
            {
              path: "titles",
              element: <Titles />,
            },
            {
              path: "types",
              element: <Types />,
            },
            {
              path: "categories",
              element: <Categories />,
            },
            {
              path: "sub_categories",
              element: <SubCategories />,
            },
            {
              path: "badges",
              element: <Badges />,
            },
            {
              path: "posts",
              element: <Posts />,
            },
            {
              path: "notifications",
              element: <Notifications />,
            },
            {
              path: "subscriptions",
              element: <Subscriptions />,
            },
            {
              path: "supports",
              element: <Supports />,
            },
            {
              path: "reports",
              element: <Reports />,
            },
            //Other paths here..
          ],
        },
      ],
    },
    {
      path: "/*",
      element: <Missing />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

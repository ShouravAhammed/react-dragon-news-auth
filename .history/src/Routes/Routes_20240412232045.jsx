import Root from "../layout/Root";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>
    }
])

export default router;
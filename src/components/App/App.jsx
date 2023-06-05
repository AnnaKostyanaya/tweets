import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ReactLoader from '../Loader/Loader';

const Layout = lazy(() => import("../Layout/Layout"));
const Home = lazy(() => import("pages/Home/Home"));
const User = lazy(() => import("pages/User/User"));

const App = () => {


return (
  <Suspense fallback={<ReactLoader />}>

    <Routes>
      <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/tweets/:id" element={<User />} />
          <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  </Suspense>
);
}

export default App;
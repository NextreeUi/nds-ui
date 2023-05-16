import * as React from "react";
import { Route, Routes, useLocation, useParams } from "react-router-dom";

// components
import Contents from "@/layout/components/Contents";
import Loading from "@/layout/components/Loading";

function NoLayout() {
  const location = useLocation();
  const { type, id } = useParams();

  return (
    <>
      <Routes>
        <Route path={`:type/:id`} element={<Contents />} />
      </Routes>
      <Loading />
    </>
  );
}

export default NoLayout;

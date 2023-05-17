import * as React from "react";
import { Route, Routes, useLocation, useParams } from "react-router-dom";

// components
import Contents from "@/layout/components/Contents";
import LoadingPage from "@/layout/components/LoadingPage";

function NoLayout() {
  const location = useLocation();
  const { type, id } = useParams();

  return (
    <>
      <Routes>
        <Route path={`:type/:id`} element={<Contents />} />
      </Routes>
      <LoadingPage />
    </>
  );
}

export default NoLayout;

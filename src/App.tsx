import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      {/*<Header />*/}
      <main>
        // TODO: изменить роуты
        <Routes>
          <Route index element={<a />} />
          <Route path={"/projects/"}>
            <Route path={""} element={<a />} />
          </Route>
          <Route path="*" element={<a />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

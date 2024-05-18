import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserPanelPage } from "./pages/UserPanelPage/UserPanelPage";

export const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      {/*<Header />*/}
      <main>
        {/*// TODO: изменить роуты*/}
        <Routes>
          <Route index element={<UserPanelPage />} />
          <Route path={"/projects/"}>
            <Route path={""} element={<a />} />
          </Route>
          <Route path="*" element={<a />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

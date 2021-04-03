import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import { Provider } from "react-redux";

import routes from "@/router";
import store from "@/store";

import XHHeader from "@/components/app-header";
import XHFooter from "@/components/app-footer";
import XHAppPlayerBar from "@/pages/player/app-play-bar"

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <XHHeader />
        {
          renderRoutes(routes)
        }
        <XHFooter />
        <XHAppPlayerBar />
      </HashRouter>
    </Provider>
  )
})

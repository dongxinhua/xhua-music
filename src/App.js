import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';

import routes from "@/router";

import XHHeader from "@/components/app-header";
import XHFooter from "@/components/app-footer";

export default memo(function App() {
  return (
    <HashRouter>
      <XHHeader />
      {
        renderRoutes(routes)
      }
      <XHFooter />
    </HashRouter>
  )
})

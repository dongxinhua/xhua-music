import React from "react";

import XHDiscover from "@/pages/discover";
import XHRecommend from "@/pages/discover/c-pages/recommend";
import XHRanking from "@/pages/discover/c-pages/ranking";
import XHSongs from "@/pages/discover/c-pages/songs";
import XHDjradio from "@/pages/discover/c-pages/djradio";
import XHArtist from "@/pages/discover/c-pages/artist";
import XHAlbum from "@/pages/discover/c-pages/album";

import XHMine from "@/pages/mine";
import XHFriend from "@/pages/friend";
import { Redirect } from "react-router";

const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/discover" />
    )
  },
  {
    path: "/discover",
    component: XHDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to="/discover/recommend" />
        )
      },
      {
        path: "/discover/recommend",
        component: XHRecommend
      },
      {
        path: "/discover/ranking",
        component: XHRanking
      },
      {
        path: "/discover/songs",
        component: XHSongs
      },
      {
        path: "/discover/djradio",
        component: XHDjradio,
        exact: true
      },
      {
        path: "/discover/artist",
        component: XHArtist
      },
      {
        path: "/discover/album",
        component: XHAlbum
      }
    ]
  },
  {
    path: "/mine",
    component: XHMine
  },
  {
    path: "/friend",
    component: XHFriend
  }
];

export default routes;
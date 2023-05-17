import { Redirect } from "react-router-dom";
import React from "react";
const Discover = React.lazy(()=>import( "../views/discover"))
const Songs = React.lazy(()=>import( "../views/discover/c-pages/songs"))
const Recommend = React.lazy(()=>import( "../views/discover/c-pages/recommend"))
const Djradio = React.lazy(()=>import( "../views/discover/c-pages/djradio"))
const Album = React.lazy(()=>import( "../views/discover/c-pages/album"))
const Artist = React.lazy(()=>import( "../views/discover/c-pages/artist"))
const Ranking = React.lazy(()=>import( "../views/discover/c-pages/ranking"))
const Friend = React.lazy(()=>import( "../views/friend"))
const Mine = React.lazy(()=>import( "../views/mine"))


const routes = [
  {
    path: '/',
    exact: true,
    render: () => {
      return <Redirect to='/discover'></Redirect>
    }
  },
  {
    path: '/discover',
    component: Discover,
    // exact: true,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => {
          return <Redirect to='/discover/recommend'></Redirect>
        },
      },
      {
        path: '/discover/recommend',
        component: Recommend
      },
      {
        path: '/discover/album',
        component: Album
      },
      {
        path: '/discover/songs',
        component: Songs
      },
      {
        path: '/discover/djradio',
        component: Djradio
      },
      {
        path: '/discover/artist',
        component: Artist
      },
      {
        path: '/discover/ranking',
        component: Ranking
      },
    ]
  },
  {
    path: '/friend',
    component: Friend
  },
  {
    path: '/mine',
    component: Mine
  }
]
export default routes
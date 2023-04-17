import React from 'react';
import {useRoutes} from 'react-router-dom';
import Dashboard from './Dashboard';
import Homepage from './Homepage';
import Shorts from './Shorts';
import Subcriptions from './Subscriptions';
import Library from './Library'
import NotFound from './NotFound';
import Login from './Login';


const RoutePages = () => {

  const  elements = useRoutes ([
    {
      children: [
        {
          element: <Dashboard />,
          children: [
            {
              path:'/',
              element: <Homepage />
            },
            {
              path:'/dashboard/shorts',
              element: <Shorts/>
            }, 
            {
              path:'/dashboard/subscriptions',
              element: <Subcriptions/>
            },
            {
              path:'/dashboard/library',
              element: <Library/>
            },
            {
              path:'*',
              element: <NotFound />
            }
          ]
        }
      ]
    },
    {
      children: [
        {
          path:'/login',
          element:<Login />
        }
      ]
    }


  ])



  return (
     elements
  )
}

export default RoutePages;


import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

// Layout
import GlobalLayout from 'layout/GlobalLayout';

// Pages
const HomePage = lazy(() => import('pages/Home'));
const SelectTopicPage = lazy(() => import('pages/Topic'));
const SolveProblemPage = lazy(() => import('pages/Solve'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'select-topics',
        element: <SelectTopicPage />,
      },
      { path: 'solve', element: <SolveProblemPage /> },
    ],
  },
]);

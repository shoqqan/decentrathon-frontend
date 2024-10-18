import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const VacanciesPage = lazy(() => import('../pages/VacanciesPage/VacanciesPage'))
const FeedbacksPage = lazy(() => import('../pages/FeedbacksPage/FeedbacksPage'))
const TasksPage = lazy(() => import('../pages/TasksPage/TasksPage'))
const ProfilePage = lazy(() => import('../pages/ProfilePage/ProfilePage'))

const router = createBrowserRouter([
	{
		path: '/',
		Component: VacanciesPage,
	},
	{
		path: '/feedback',
		Component: FeedbacksPage,
	},
	{
		path: '/tasks',
		Component: TasksPage,
	},
	{
		path: '/profile',
		Component: ProfilePage,
	},
])

function Router() {
	return <RouterProvider router={router} />
}

export default Router

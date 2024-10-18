import { lazy } from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { MainWrapper } from '@/widgets/MainWrapper/MainWrapper.tsx'

const VacanciesPage = lazy(() => import('../pages/VacanciesPage/VacanciesPage'))
const FeedbacksPage = lazy(() => import('../pages/FeedbacksPage/FeedbacksPage'))
const TasksPage = lazy(() => import('../pages/TasksPage/TasksPage'))
const ProfilePage = lazy(() => import('../pages/ProfilePage/ProfilePage'))


const router = createBrowserRouter([
	{
		path: '/',
		element: <MainWrapper/>,
		children: [
			{
				index: true,
				element: <Navigate to="vacancies" replace />,
			},
			{
				path: 'vacancies',
				element: <VacanciesPage/>,
			},
			{
				path: 'feedback',
				element: <FeedbacksPage/>,
			},
			{
				path: 'tasks',
				element: <TasksPage/>
			},
			{
				path:'profile',
				element: <ProfilePage/>
			}

		]
	},
])

function Router() {
	return <RouterProvider router={router} />
}

export default Router

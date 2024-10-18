import { MainWrapper } from '@/widgets/MainWrapper'
import { lazy, Suspense } from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

const VacanciesPage = lazy(() => import('../pages/VacanciesPage/VacanciesPage'))
const FeedbacksPage = lazy(() => import('../pages/FeedbacksPage/FeedbacksPage'))
const TasksPage = lazy(() => import('../pages/TasksPage/TasksPage'))
const ProfilePage = lazy(() => import('../pages/ProfilePage/ProfilePage'))

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainWrapper />,
		children: [
			{
				index: true,
				element: <Navigate to='vacancies' replace />,
			},
			{
				path: 'vacancies',
				element: <VacanciesPage />,
			},
			{
				path: 'feedback',
				element: <FeedbacksPage />,
			},
			{
				path: 'tasks',
				element: <TasksPage />,
			},
			{
				path: 'profile',
				element: <ProfilePage />,
			},
		],
	},
])

function Router() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<RouterProvider router={router} />
		</Suspense>
	)
}

export default Router

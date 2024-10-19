import VacanciesPage from '../pages/VacanciesPage/VacanciesPage'
import FeedbacksPage from '@/pages/FeedbacksPage/FeedbacksPage'
import ProfilePage from '@/pages/ProfilePage/ProfilePage'
import TasksPage from '@/pages/TasksPage/TasksPage'
import VacancyDetailPage from '@/pages/VacancyDetailPage/VacancyDetailPage'
import { MainWrapper } from '@/widgets/MainWrapper'
import { Suspense } from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

// const VacanciesPage = lazy(() => import('../pages/VacanciesPage/VacanciesPage'))
// const FeedbacksPage = lazy(() => import('../pages/FeedbacksPage/FeedbacksPage'))
// const TasksPage = lazy(() => import('../pages/TasksPage/TasksPage'))
// const ProfilePage = lazy(() => import('../pages/ProfilePage/ProfilePage'))
// const VacancyDetailPage = lazy(() => import('../pages/VacancyDetailPage/VacancyDetailPage'))

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
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<VacanciesPage />
					</Suspense>
				),
			},
			{
				path: 'vacancies/:id',
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<VacancyDetailPage />
					</Suspense>
				),
			},
			{
				path: 'feedback',
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<FeedbacksPage />
					</Suspense>
				),
			},
			{
				path: 'tasks',
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<TasksPage />
					</Suspense>
				),
			},
			{
				path: 'profile',
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<ProfilePage />
					</Suspense>
				),
			},
		],
	},
])

function Router() {
	return <RouterProvider router={router} />
}

export default Router

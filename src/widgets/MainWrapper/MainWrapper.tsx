import styles from './MainWrapper.module.scss'
import { MainLayout } from '@/widgets/MainLayout'
import { MainNavbar } from '@/widgets/MainNavbar'
import { Outlet } from 'react-router'

export function MainWrapper() {
	return (
		<div className={styles.main_wrapper}>
			<MainLayout>
				<Outlet />
			</MainLayout>
			<div className={styles.main_space} />
			<MainNavbar />
		</div>
	)
}

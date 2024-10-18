import styles from './MainWrapper.module.scss'
import { MainLayout } from '@/widgets/MainLayout'
import { Outlet } from 'react-router'
import { MainNavbar } from '@/widgets/MainNavbar'

export function MainWrapper() {
	return (
		<div className={styles.main_wrapper}>
			<MainLayout>
				<Outlet/>
			</MainLayout>
			<MainNavbar/>
		</div>
	)
}


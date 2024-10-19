import styles from './MainNavbar.module.scss'
import { CurrencyDollarIcon, EnvelopeIcon, MagnifyingGlassIcon, UserIcon } from '@heroicons/react/16/solid'
import clsx from 'clsx'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
	{
		title: 'Поиск',
		navigateTo: '/vacancies',
		icon: <MagnifyingGlassIcon width={24} height={24} />,
	},
	{
		title: 'Отклики',
		navigateTo: '/feedbacks',
		icon: <EnvelopeIcon width={24} height={24} />,
	},
	{
		title: 'Токены',
		navigateTo: '/tasks',
		icon: <CurrencyDollarIcon width={24} height={24} />,
	},
	{
		title: 'Профиль',
		navigateTo: '/profile',
		icon: <UserIcon width={24} height={24} />,
	},
]

export function MainNavbar() {
	const { pathname } = useLocation()

	return (
		<div className={styles.navbar__wrapper}>
			<div className={styles.navbar}>
				{navItems.map((nav) => (
					<Link to={nav.navigateTo} className={clsx(styles.link)} data-active={pathname.includes(nav.navigateTo)}>
						{nav.icon}
						<p>{nav.title}</p>
					</Link>
				))}
			</div>
		</div>
	)
}

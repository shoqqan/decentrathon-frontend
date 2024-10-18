import { CurrencyDollarIcon, EnvelopeIcon, MagnifyingGlassIcon, UserIcon } from '@heroicons/react/16/solid'
import { Link, useLocation } from 'react-router-dom'
import styles from './MainNavbar.module.scss'
import clsx from 'clsx'

export function MainNavbar() {
	const {pathname} = useLocation();

	const icons = [
		{
			title:"Поиск",
			navigateTo:"/vacancies",
			icon: <MagnifyingGlassIcon width={24} height={24} />
		},
		{
			title:"Отклики",
			navigateTo:"/feedback",
			icon: <EnvelopeIcon width={24} height={24} />
		},
		{
			title:"Токены",
			navigateTo:"/tasks",
			icon: <CurrencyDollarIcon width={24} height={24} />
		},
		{
			title:"Профиль",
			navigateTo:"/profile",
			icon: <UserIcon width={24} height={24} />
		},
	]

	return (
		<div className={styles.navbar}>
			{icons.map((nav)=>
			<Link to={nav.navigateTo} className={clsx(styles.link,{
				[styles.active]: pathname===nav.navigateTo,
			})}>
				{nav.icon}
				<p>{nav.title}</p>
			</Link>
			)}
		</div>
	)
}


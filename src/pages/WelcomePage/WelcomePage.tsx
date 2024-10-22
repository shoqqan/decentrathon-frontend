import dog from '../../../public/dog.json'
import styles from './WelcomePage.module.scss'
import { useRole } from '@/app/providers/AppProvider'
import { AccountRoles } from '@/shared/constants/accountRoles'
import { getTelegramWebApp } from '@/shared/helpers/getTelegramWebApp'
import { authApi } from '@/shared/services/auth'
import { Button } from '@/shared/ui/Button'
import { useState } from 'react'
import Lottie from 'react-lottie'

export default function WelcomePage() {
	const { onSelect } = useRole()
	const [pending, setPending] = useState<boolean>(false)

	const handleSelectRole = (role: AccountRoles) => async () => {
		const telegramWebApp = getTelegramWebApp()
		if (!telegramWebApp) {
			return
		}

		try {
			setPending(true)
			const resultInitData = telegramWebApp.initData
			await authApi.tg({
				role,
				init_data: resultInitData,
			})
		} catch (error) {
			console.log(error)
		} finally {
			onSelect(role)
			setPending(false)
		}
	}

	return (
		<div className={styles.welcome_page}>
			<Lottie
				options={{
					animationData: dog,
					loop: true,
				}}
				height={120}
				width={120}
			/>
			<h1 className={styles.title}>Войдите как</h1>
			<Button className={styles.button} disabled={pending} onClick={handleSelectRole(AccountRoles.RECRUITER)}>
				Рекрутер
			</Button>
			<Button className={styles.button} disabled={pending} onClick={handleSelectRole(AccountRoles.RECRUITER)}>
				Соискатель
			</Button>
		</div>
	)
}

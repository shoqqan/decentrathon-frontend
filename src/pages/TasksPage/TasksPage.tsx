import styles from './TasksPage.module.scss'
import { MoneyLottie } from '@/shared/ui/MoneyLottie/MoneyLottie.tsx'
import { Button } from '@/shared/ui/Button'
import { IconButton } from '@/shared/ui/IconButton'
import { BanknotesIcon, ClipboardIcon } from '@heroicons/react/16/solid'

export default function TasksPage() {
	return (
		<div className={styles.tasks_page}>
			<div className={styles.hero}>
				<MoneyLottie/>
				<h2>Выполняй задания и получай бонусы</h2>
			</div>
			<div className={styles.tasks_container}>
				<div className={styles.task}>
					<BanknotesIcon width={50} height={50}/>
					<p>Загрузить в историю резюме</p>
				</div>
				<div className={styles.button_container}>
					<Button className={styles.link}>Пригласи друзей</Button>
					<IconButton className={styles.icon_button}><ClipboardIcon className={styles.icon} width={25} height={25}/></IconButton>
				</div>
			</div>
		</div>
	)
}

import styles from './ProfilePage.module.scss'
import { Resume } from '@/pages/ProfilePage/components/Resume/Resume.tsx'
import { Statistics } from '@/pages/ProfilePage/components/Statistics/Statistics.tsx'
import { EditableField } from '@/shared/ui/EditableField/EditableField.tsx'
import { UserIcon } from '@heroicons/react/24/outline'
import { TonConnectButton } from '@tonconnect/ui-react'

export default function ProfilePage() {
	return (
		<div className={styles.profile_page}>
			<div className={styles.avatar_container}>
				<div className={styles.avatar}>
					<UserIcon width={50} height={50} />
				</div>
				<h1 className={styles.title}>Middle Frontend Developer</h1>
			</div>
			<div className={styles.ton_connect}>
				<TonConnectButton />
			</div>
			<Statistics />
			<EditableField onCheck={() => {}}>Активно ищу работу</EditableField>
			<Resume />
		</div>
	)
}

import styles from "./ProfilePage.module.scss"
import { EditableField } from '@/shared/ui/EditableField/EditableField.tsx'
import { Resume } from '@/pages/ProfilePage/components/Resume/Resume.tsx'
import { Statistics } from '@/pages/ProfilePage/components/Statistics/Statistics.tsx'

export default function ProfilePage() {
	return (
		<div className={styles.profile_page}>
			<div className={styles.avatar_container}>
				<div className={styles.avatar}/>
				<h1 className={styles.title}>Middle Frontend Developer</h1>
			</div>

			<Statistics/>
			<EditableField>Активно ищу работу</EditableField>
			<Resume/>
		</div>
	)
}

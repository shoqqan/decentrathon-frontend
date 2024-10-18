import styles from './BackButton.module.scss'
import { IconButton } from '@/shared/ui/IconButton'
import { ArrowLeftIcon } from '@heroicons/react/16/solid'
import { useNavigate } from 'react-router-dom'

export function BackButton() {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate('../')
	}

	return (
		<IconButton className={styles.back_button} onClick={handleClick}>
			<ArrowLeftIcon width={20} height={20} color='black' />
		</IconButton>
	)
}

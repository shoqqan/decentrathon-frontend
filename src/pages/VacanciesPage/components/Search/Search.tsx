import styles from './Search.module.scss'
import { IconButton } from '@/shared/ui/IconButton'
import { TextInput } from '@/shared/ui/TextInput'
import { AdjustmentsHorizontalIcon, MagnifyingGlassIcon } from '@heroicons/react/16/solid'

export function Search() {
	return (
		<div className={styles.search}>
			<TextInput
				size='md'
				leftSectionPointerEvents='none'
				leftSection={<MagnifyingGlassIcon width={24} height={24} color='black' />}
				placeholder='Должность, ключевые слова'
			/>
			<IconButton>
				<AdjustmentsHorizontalIcon width={24} height={24} color='black' />
			</IconButton>
		</div>
	)
}

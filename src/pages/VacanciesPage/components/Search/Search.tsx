import { FilterDrawer } from '../FilterDrawer'
import styles from './Search.module.scss'
import { IconButton } from '@/shared/ui/IconButton'
import { TextInput } from '@/shared/ui/TextInput'
import { AdjustmentsHorizontalIcon, MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import { useDisclosure } from '@mantine/hooks'

export function Search() {
	const filterModal = useDisclosure(false)

	return (
		<>
			<div className={styles.search}>
				<TextInput
					size='md'
					leftSectionPointerEvents='none'
					leftSection={<MagnifyingGlassIcon className={styles.search_icon} width={24} height={24} />}
					placeholder='Должность, ключевые слова'
				/>
				<IconButton onClick={filterModal[1].open}>
					<AdjustmentsHorizontalIcon width={24} height={24} />
				</IconButton>
			</div>
			<FilterDrawer opened={filterModal[0]} onClose={filterModal[1].close} />
		</>
	)
}

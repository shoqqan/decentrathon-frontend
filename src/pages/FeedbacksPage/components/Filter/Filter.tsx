import styles from './Filter.module.scss'
import { FilterButton } from './FilterButton'
import { useState } from 'react'

enum Filters {
	ALL = 'all',
	INVITATION = 'invitation',
	WAITING = 'waiting',
	REJECTED = 'rejected',
}

export function Filter() {
	const [filter, setFilter] = useState<Filters>(Filters.ALL)

	const handleFilter = (newFilter: Filters) => () => {
		setFilter(newFilter)
	}

	const getIsActive = (compareFilter: Filters) => filter === compareFilter

	return (
		<div className={styles.filter}>
			<FilterButton isActive={getIsActive(Filters.ALL)} onClick={handleFilter(Filters.ALL)}>
				Все
			</FilterButton>
			<FilterButton isActive={getIsActive(Filters.INVITATION)} onClick={handleFilter(Filters.INVITATION)}>
				Приглашение
			</FilterButton>
			<FilterButton isActive={getIsActive(Filters.WAITING)} onClick={handleFilter(Filters.WAITING)}>
				Ожидание
			</FilterButton>
			<FilterButton isActive={getIsActive(Filters.REJECTED)} onClick={handleFilter(Filters.REJECTED)}>
				Отказы
			</FilterButton>
		</div>
	)
}

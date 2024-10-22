import type { AccountRoles } from '../constants/accountRoles'
import type { EmploymentTypes } from '../constants/employmentTypes'
import type { WorkTypes } from '../constants/workTypes'

export type TJob = {
	title: string
	details: string
	work_type: WorkTypes
	salary_from: number
	salary_to: number
	employment_type: EmploymentTypes
	experience: string
}

export type TUser = {
	id: number
	avatar_url: string
	first_name: string
	last_name: string
	lang: string
	role: AccountRoles
}

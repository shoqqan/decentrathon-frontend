import type { EmploymentTypes } from '@/shared/constants/employmentTypes'
import type { WorkTypes } from '@/shared/constants/workTypes'
import type { TJob } from '@/shared/types'

export type TJobDto = TJob & {}

export type TJobListResponse = {
	count: number
	jobs: TJob[]
}

export type TJobListDto = {
	skip: number
	limit: number
	q: string
	work_type: WorkTypes | null
	employment_type: EmploymentTypes | null
}

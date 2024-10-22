export type TApplicationDto = {
	job_id: number
	user_id: number
	status: string
}

export type TApplicationListResponse = {
	count: number
	applications: TApplicationDto[]
}

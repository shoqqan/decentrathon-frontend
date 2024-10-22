/* eslint-disable class-methods-use-this */
import { baseApi } from '../base'
import type { TJobDto, TJobListDto, TJobListResponse } from './types'
import type { TJob } from '@/shared/types'

export class JobsApi {
	async create(args: TJobDto): Promise<TJob> {
		return baseApi.post('/jobs', args)
	}

	async getList(args: TJobListDto): Promise<TJobListResponse> {
		return baseApi.get('/jobs', { params: args })
	}
}

export const jobsApi = new JobsApi()

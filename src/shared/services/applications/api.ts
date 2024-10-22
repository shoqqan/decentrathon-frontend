import { baseApi } from '../base'
import type { TApplicationDto, TApplicationListResponse } from './types'

/* eslint-disable class-methods-use-this */
class ApplicationsApi {
	async create(args: TApplicationDto): Promise<void> {
		return baseApi.post('/applications', args)
	}

	async getList(): Promise<TApplicationListResponse> {
		return baseApi.get('/applications')
	}
}
export const applicationsApi = new ApplicationsApi()

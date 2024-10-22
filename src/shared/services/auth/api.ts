/* eslint-disable class-methods-use-this */
import { baseApi } from '../base'
import type { TTgAuthDto, TTgAuthResponse } from './types'

class AuthApi {
	async tg(args: TTgAuthDto): Promise<TTgAuthResponse> {
		return baseApi.post('/auth/tg', args)
	}
}

export const authApi = new AuthApi()

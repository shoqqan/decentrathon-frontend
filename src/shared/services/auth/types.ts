import type { AccountRoles } from '@/shared/constants/accountRoles'
import type { TUser } from '@/shared/types'

export type TTgAuthDto = {
	role: AccountRoles
	init_data: string
}

export type TTgAuthResponse = {
	access_token: string
	user: TUser
}

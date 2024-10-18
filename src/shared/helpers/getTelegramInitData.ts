/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
export function getTelegramInitData(initData: string) {
	const firstLayerInitData = Object.fromEntries(new URLSearchParams(initData).entries())

	const initDataObj: Record<string, any> = {}

	for (const key in firstLayerInitData) {
		try {
			initDataObj[key] = JSON.parse(firstLayerInitData[key])
		} catch {
			initDataObj[key] = firstLayerInitData[key]
		}
	}

	return initDataObj
}

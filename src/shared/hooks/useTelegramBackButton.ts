import { getTelegramWebApp } from '../helpers/getTelegramWebApp'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

interface UseTelegramBackButtonProps {
	onBack?: () => void
}

export const useTelegramBackButton = ({ onBack }: UseTelegramBackButtonProps = {}) => {
	const navigate = useNavigate()

	const handleBack = () => {
		const telegramWebApp = getTelegramWebApp()
		telegramWebApp.BackButton?.hide()
		if (!onBack) {
			navigate('../')
			return
		}
		onBack()
	}

	useEffect(() => {
		const telegramWebApp = getTelegramWebApp()
		if (!telegramWebApp) {
			return
		}
		telegramWebApp.BackButton?.show()
		telegramWebApp.BackButton?.onClick(handleBack)
	}, [])
}

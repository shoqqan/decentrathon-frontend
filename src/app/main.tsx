import { AppProvider } from './providers/AppProvider'
import { TelegramProvider } from './providers/TelegramProvider'
import Router from './router'
import '@/shared/base.scss'
import { themeConfig } from '@/shared/configs/themeConfig'
import { MantineProvider } from '@mantine/core'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<MantineProvider theme={themeConfig}>
			<AppProvider>
				<TelegramProvider>
					<Router />
				</TelegramProvider>
			</AppProvider>
		</MantineProvider>
	</StrictMode>,
)

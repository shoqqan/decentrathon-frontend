import { AppProvider } from './providers/AppProvider'
import { TelegramProvider } from './providers/TelegramProvider'
import Router from './router'
import '@/shared/base.scss'
import { themeConfig } from '@/shared/configs/themeConfig'
import '@mantine/carousel/styles.css'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<MantineProvider theme={themeConfig}>
			<AppProvider>
				<TelegramProvider>
					<main className='app'>
						<Router />
					</main>
				</TelegramProvider>
			</AppProvider>
		</MantineProvider>
	</StrictMode>,
)

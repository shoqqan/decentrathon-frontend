import { AppProvider } from './providers/AppProvider'
import { TelegramProvider } from './providers/TelegramProvider'
import Router from './router'
import '@/shared/base.scss'
import { themeConfig } from '@/shared/configs/themeConfig'
import '@mantine/carousel/styles.css'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import { TonConnectUIProvider } from '@tonconnect/ui-react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<MantineProvider theme={themeConfig}>
			<AppProvider>
				<TelegramProvider>
					<TonConnectUIProvider manifestUrl='https://f5b39e134c35.ngrok.app/manifest.json'>
						<QueryClientProvider client={queryClient}>
							<main className='app'>
								<Router />
							</main>
						</QueryClientProvider>
					</TonConnectUIProvider>
				</TelegramProvider>
			</AppProvider>
		</MantineProvider>
	</StrictMode>,
)

import Router from './router'
import '@/shared/base.scss'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<MantineProvider>
			<Router />
		</MantineProvider>
	</StrictMode>,
)

import styles from './Drawer.module.scss'
import { Drawer } from '@mantine/core'

const DrawerExtend = Drawer.extend({
	classNames: {
		content: styles.drawer_content,
		header: styles.drawer_header,
		body: styles.drawer_body,
		title: styles.drawer_title,
		close: styles.drawer_close,
	},
})

export { Drawer, DrawerExtend }

import styles from './Drawer.module.scss'
import { Drawer } from '@mantine/core'

const DrawerExtend = Drawer.extend({
	classNames: {
		content: styles.drawer_content,
		body: styles.drawer_body,
		title: styles.drawer_title,
	},
})

export { Drawer, DrawerExtend }

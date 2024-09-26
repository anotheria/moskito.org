import 'primeicons/primeicons.css'
import type { App } from 'vue'
import PrimeVue from 'primevue/config'
import Theme from './presets/theme'
import Button from 'primevue/button'
import Menubar from 'primevue/menubar'
import Drawer from 'primevue/drawer'
import Menu from 'primevue/menu'
import Tooltip from 'primevue/tooltip'

const primeComponents = {
  Button,
  Menubar,
  Drawer,
  Menu,
}

export default (app: App) => {
  app.use(PrimeVue, {
    theme: {
      preset: Theme,
      options: {
        darkModeSelector: 'dark',
      },
    },
  })
  app.directive('tooltip', Tooltip)

  for (const [key, component] of Object.entries(primeComponents)) {
    app.component(key, component)
  }
}

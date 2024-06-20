import './app.css'
import './assets/styles/buttons.css'
import './assets/styles/colors.css'
import './assets/styles/icons.css'
import './assets/styles/layout.css'

// typography
import './assets/styles/typography.css'
import './assets/styles/typography/mini-regular.css'
import './assets/styles/typography/common-bold.css'
import './assets/styles/typography/description-bold.css'

import App from './App.svelte'

const app = new App({
  target: document.getElementById('app'),
})

export default app

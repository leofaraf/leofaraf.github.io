import './components/home'
import './components/about'
import './components/works'
import './components/get-in-touch'

import './style.css'
import './css/buttons.css'
import './css/colors.css'
import './css/icons.css'
import './css/layout.css'
import './css/typography.css'

document.querySelector('#app').innerHTML = /* html */ `
  <div>
    <home-section></home-section>
    <about-section></about-section>
    <works-section></works-section>
    <get-in-touch-section></get-in-touch-section>
  </div>
`

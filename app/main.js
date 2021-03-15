import JSEnabled from './js-enabled'
import HomeGreeting from './home-greeting'
import DarkLightMode from './dark-light-mode'
import StickyHeader from './sticky-header'
import MobileMenu from './mobile-menu'
import Poetry from './poetry'

(() => {
  document.addEventListener('DOMContentLoaded', () => {
    JSEnabled.init()
    HomeGreeting.init()
    DarkLightMode.init()
    StickyHeader.init()
    MobileMenu.init()
    Poetry.init()
  })
})()

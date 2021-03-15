export default {
  init() {
    const mobileMenuBtn = document.querySelector('#mobile-menu-btn')
    const mobileMenu = document.querySelector('#mobile-menu')

    if (mobileMenu && mobileMenuBtn)
      mobileMenuBtn.addEventListener('click', e => {
        mobileMenuBtn.classList.toggle('open')
        mobileMenu.classList.toggle('open')
      })
  }
}

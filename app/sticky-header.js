export default {
  init() {
    if (document.getElementById('home')) {
      const header = document.querySelector('header')
      const main = document.querySelector('main')

      const topBar = document.querySelector('#top-bar')
      const img = document.querySelector('img')

      const tracker = {
        previousScroll: window.pageYOffset,

        isScrollingDown() {
          return window.pageYOffset > this.previousScroll
        },

        setPreviousScroll() {
          this.previousScroll = window.pageYOffset
        },
      }

      const originalImgDistanceFromTop = img.getBoundingClientRect().top
      const originalTopBarHeight = topBar.offsetHeight

      const IMG_DIM_SMALL = 50
      const IMG_DIM_LARGE = 200

      const ghostElement = document.createElement('div')
      ghostElement.style.height = `${originalTopBarHeight}px`

      if (window.pageYOffset > 0 && mainDistanceRatioIsPastLimit())
        setFixedTopBar()

      window.onscroll = e => {
        if (tracker.isScrollingDown() && mainDistanceRatioIsPastLimit()) {
          setFixedTopBar()
        } else {
          tracker.setPreviousScroll()
          setRelativeTopBar()
        }
      }

      function mainDistanceRatioIsPastLimit() {
        const mainDistanceFromTop = main.getBoundingClientRect().top
        const mainDistanceRatio = mainDistanceFromTop / originalTopBarHeight
        return mainDistanceRatio < 0.75
      }

      function setFixedTopBar() {
        img.height = IMG_DIM_SMALL
        img.width = IMG_DIM_SMALL
        topBar.classList.add('fixedTop')
        header.appendChild(ghostElement)
      }

      function setRelativeTopBar() {
        img.height = IMG_DIM_LARGE
        img.width = IMG_DIM_LARGE
        topBar.classList.remove('fixedTop')
        ghostElement.remove()
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {

  /* Клик по бургеру */
  const burger = document.querySelector('.humburger')
  const menu = [...document.querySelectorAll('.menu')]
  burger.addEventListener('click', e => {
    const isActive = e.currentTarget.classList.value.indexOf('active') === -1 ? false : true
    if (!isActive) {
      burger.classList.add('active')
      menu.map(el => {
        el.classList.add('active')
      })
    } else {
      burger.classList.remove('active')
      menu.map(el => {
        el.classList.remove('active')
      })
    }
  })
  
  /* Клик по аккордиону */
  const headers = [...document.querySelectorAll('.accordion-item__header')]

  headers.map(i => {
    i.addEventListener('click', function(e) {
      const item = this.closest('.accordion-item')
      const hasActive = item.classList.contains('active')
      const allItems = [...this.closest('.accordion-items').querySelectorAll('.accordion-item')]
      allItems.map(i => {
        i.classList.remove('active')
      })

      if (hasActive) {
        item.classList.remove('active')
      } else {
        item.classList.add('active')
      }
    })
  })
});

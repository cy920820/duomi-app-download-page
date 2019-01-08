;(function() {
  // 获取元素并绑定点击事件
  let copyEl = document.getElementById('copy-btn')
  copyEl.addEventListener('click', () => {
    let fixedEl = document.getElementById('fixed')
    if (fixedEl.style.display === '') return
    // 创建input元素
    const inputEl = document.createElement('input')
    // 获取邀请码
    let code = document.getElementById('code').innerHTML
    inputEl.setAttribute('readonly', 'readonly')
    inputEl.setAttribute('value', code)
    document.body.appendChild(inputEl)
    // inputEl.select()
    inputEl.setSelectionRange(0, inputEl.value.length) // 兼容iOS
    if (document.execCommand('copy')) {
      document.execCommand('copy')
      fixedEl.style.display = ''
    }
    document.body.removeChild(inputEl)

    setTimeout(() => {
      fixedEl.style.display = 'none'
    }, 1500)
  })
})()

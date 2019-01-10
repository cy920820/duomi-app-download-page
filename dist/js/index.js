;(function($) {
  // 获取用户id
  let accountId = getAccountId('accountId')
  // 从后端获取邀请码
  $.ajax({
    url: 'https://shiziquan.com/shiziquan/learn?accountId=1000036&action=simpleaccountinfo',
    type: 'POST',
    data: {
      accountId
    },
    dataType: 'json',
    success(res) {
      let data = res.data
      if (Object.keys(data).length) {
        renderInviteCode(data.inviteNo)
      }
    },
    error() {
      alert('服务器繁忙！')
    }
  })

  // 渲染邀请码
  function renderInviteCode(data) {
    $('.code-wrap .code').html(data)
    $('.copy-btn').attr('data-clipboard-text', data)
  }

  // 获取元素并绑定点击事件
  function copy(el) {
    let fixedEl = document.getElementById('fixed')
    if (fixedEl.style.display === '') return

    // 复制口令、链接
    var clipboard = new ClipboardJS(el)
    clipboard.on('success', function(e) {
      // console.info('Text:', e.text)
      fixedEl.style.display = ''
      e.clearSelection()
      setTimeout(() => {
        fixedEl.style.display = 'none'
      }, 1500)
    })

    clipboard.on('error', function(e) {
      alert('请稍后重试!')
    })
  }

  // 通过url query获取用户id
  function getAccountId(name, url) {
    if (!url) url = window.location.href
    name = name.replace(/[\[\]]/g, '\\$&')
    let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
    let results = regex.exec(url)
    if (!results) return null
    if (!results[2]) return ''
    return decodeURIComponent(results[2].replace(/\+/g, ' '))
  }

  copy('.copy-btn')
})(Zepto)

//# sourceMappingURL=../maps/index.js.map

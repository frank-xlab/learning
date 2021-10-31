function bind1(mapProps) {
  const excute = params =>
    excute.state ? excute.invoke(params) : excute.invoke(params, true)
  excute.invoke = params => {
    excute.invoke = mapProps
    excute.state = true
    let result = excute(params)
    if (typeof result === 'function') {
      excute.invoke = result
      excute.state = false
      result = excute(params)
    }
    return result
  }
  return excute
}

function bind2(mapProps) {
  return function(params) {
    let result = mapProps(params)
    if (typeof result === 'function') {
      result = result(params)
    }
  }
}

// bind1 可以给excute添加属性 保留中间状态
// bind2 不能做状态保留

function mapProps(dispatch) {
  return function(dispatch) {
    return 'data'
  }
}

bind1(mapProps)()
bind2(mapProps)()

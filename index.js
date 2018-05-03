module.exports = fn => (next, i, t) =>
  fn && fn.then ? (fn.then(i.stop), next)
: fn && fn.each ? (fn.each(i.stop), next)
: (acc, v) => 
    typeof fn == 'number'   ? ((--fn <= 0 && t.stop()), (fn >= 0 ? next(acc,v) : acc))
  : typeof fn == 'function' ? (fn(v) ? (t.stop(), acc) : next(acc,v)) 
                            : 0
export const fnRaf = (fn, isStartMotion, rafId) => () => {
  if (!isStartMotion) return
  isStartMotion = false;
  rafId = requestAnimationFrame(function () {
    // code start
    fn();
    // code finish
    isStartMotion = true;
  }) // requestAnimationFrame
}

export const winScrEvent = (...fns) => {
  fns.forEach(fn => { fn() })
  $(window).scroll(function () {
    fns.forEach(fn => { fn() });
  }).resize(function () {
    fns.forEach(fn => { fn() });
  })
}

export const fnGetWinInfo = function () {
  window.scry = $(window).scrollTop()
  window.scrx = $(window).scrollLeft()
  window.winh = $(window).height()
  window.winw = $(window).width()
}//fnGetWinInfo

winScrEvent(fnGetWinInfo)

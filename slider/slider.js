function BScroll(el, options) {
    this.wrapper = typeof el === 'string' ? document.querySelector(el) : el;
    this.scroller = this.wrapper.children[0];
    this.scrollerStyle = this.scroller.style;

    this._init(el, options)
}
const DEFAULT_OPTIONS = {
    startX: 0,
    startY: 0,
    scrollX: false,
    scrollY: true,
    freeScroll: false,
    directionLockThreshold: 5,
    eventPassthrough: '',
    click: false,
    tap: false,
    bounce: true,
    bounceTime: 700,
    momentum: true,
    momentumLimitTime: 300,
    momentumLimitDistance: 15,
    swipeTime: 2500,
    swipeBounceTime: 500,
    deceleration: 0.001,
    flickLimitTime: 200,
    flickLimitDistance: 100,
    resizePolling: 60,
    probeType: 0,
    preventDefault: true,
    preventDefaultException: {
        tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
    },
    HWCompositing: true,
    useTransition: true,
    useTransform: true,
    bindToWrapper: false,
    disableMouse: hasTouch,
    disableTouch: !hasTouch,
    /**
     * for picker
     * wheel: {
   *   selectedIndex: 0,
   *   rotate: 25,
   *   adjustTime: 400
   *   wheelWrapperClass: 'wheel-scroll',
   *   wheelItemClass: 'wheel-item'
   * }
     */
    wheel: false,
    /**
     * for slide
     * snap: {
   *   loop: false,
   *   el: domEl,
   *   threshold: 0.1,
   *   stepX: 100,
   *   stepY: 100,
   *   listenFlick: true
   * }
     */
    snap: false,
    /**
     * for scrollbar
     * scrollbar: {
   *   fade: true
   * }
     */
    scrollbar: false,
    /**
     * for pull down and refresh
     * pullDownRefresh: {
   *   threshold: 50,
   *   stop: 20
   * }
     */
    pullDownRefresh: false,
    /**
     * for pull up and load
     * pullUpLoad: {
   *   threshold: 50
   * }
     */
    pullUpLoad: false
}
BScroll.prototype._init = function (el, options) {
    this._handleOptions(options);

    // init private custom events
    this._events = {};

    this.x = 0;
    this.y = 0;
    this.directionX = 0;
    this.directionY = 0;

    this._addDOMEvents();

    this._initExtFeatures();

    this._watchTransition();

    this.refresh();

    if (!this.options.snap) {
        this.scrollTo(this.options.startX, this.options.startY)
    }

    this.enable();
};
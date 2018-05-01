class Vue {
  constructor(opts) {
    this.data = opts.data
    new Observer(this.data)
  }
}
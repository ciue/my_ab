class Watcher {
  constructor(data, key, cb) {
    Dep.target = this
  }

  update() {
    console.log('更新试图');
  }
}
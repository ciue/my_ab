class Observer {
  constructor(data) {
    this.data = data
    Object.keys(this.data).forEach(key => {
      this.defineReactive(key, this.data[key])
    })
  }

  defineReactive(key, val) {
    let dep = new Dependency()
    Object.defineProperty(this.data, key, {
      enumerable: true,
      configurable: true,
      get: () => {
        console.log('被读取了');
        return val
      },
      set: (newVal) => {
        console.log('被设置了');
        if (newVal === val) return;
        val = newVal
      }
    })
  }
}

class Dependency {
  constructor() {
    this.deps = []
  }

  addSub(dep) {
    this.deps.push(dep)
  }

  depend() {
    Dep.target.addSub(this)
  }

  notify() {
    this.deps.forEach( dep => {
      dep.update()
    })
  }
}
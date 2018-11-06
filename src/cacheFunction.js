var store = {
  nextId: 1,
  cache: {},
  add: function(fn) {
    if (!fn.id) {  // does the current function have an id property?
      fn.id = this.nextId++;
      this.cache[fn.id] = fn;
      return true;
    }
  }
};


function ninja() {}
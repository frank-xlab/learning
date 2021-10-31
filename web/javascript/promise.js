
/*
pending: 初始状态, 既不是 fulfilled 也不是 rejected.
fulfilled: 成功的操作.
rejected: 失败的操作.
*/

class Promise {
  constructor(resolver) {
    this.status = 'pending';
    this.value;
    this.reason;

    this._resolves = [];
    this._rejects = [];

    if (typeof resolver === 'function') {
      resolver(this.resolve.bind(this), this.reject.bind(this));
    }

    return this;
  }
  // Returns a Promise that waits for all promises in the iterable to be fulfilled and is then fulfilled with an array of those resulting values (in the same order as the input).
  all(iterable) {

  }
  // Returns a promise that resolves or rejects as soon as any of the promises in iterable have been resolved or rejected (with the corresponding reason or value).
  race(iterable) {

  }
  // Returns a promise that is rejected with the given reason.
  reject(reason) {
    this.status = 'rejected';
    this.value = value;

    this._rejects.length && fireQ(this);
    return this;
  }
  // Returns a promise that is resolved with the given value.
  // If the value is a promise, then it is unwrapped so that the resulting promise adopts the state of the promise passed in as value. 
  // This is useful for converting promises created by other libraries.
  resolve(value) {
    this.status = 'resolved';
    this.value = value;

    this._resolves.length && fireQ(this);
    return this;
  }


  // Equivalent to calling Promise.prototype.then(undefined, onRejected)
  catch(onRejected) {
    return this.then(void 0, onRejected);
  }

  /*
  Calls onFulfilled or onRejected with the fulfillment value or rejection reason of the promise (as appropriate) and returns a new promise resolving to the return value of the called handler.

If the handler throws an error, the returned Promise will be rejected with that error.

If the onFulfilled handler is not a function, it defaults to the identify function (i.e. function (value) { return value; }).

If the onRejected handler is not a function, it defaults to a function that always throws (i.e. function (reason) { throw reason; }).
  */
  then(onFulfilled, onRejected) {
    var next = this._next || (this._next = Promise())
    var status = this.status;
    var x;
    if (status === 'pending') {
      this._resolves.push(onFulfilled);
      this._rejects.push(onRejected);
      return next;
    }
    if (status === 'resolved') {
      if (typeof onFulfilled !== 'function') {
        next.resolve(onFulfilled);
      } else {
        try {
          x = resolve(this.value);

        } catch (e) {

        }
      }
    }
    if (status === 'rejected') {
      if(typeof onRejected !== 'function'){
        next.reject(onRejected);
      } else {

      }
    }
  }
}
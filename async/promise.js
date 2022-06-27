class PromiseQ {
  onResolve = () => {};
  onReject = () => {};
  state = 'pending';
  result = undefined;

  constructor(func){
    this.func = func;
  }

  then(){
    return this;
  }

  catch(){
    return this;
  }

  finally(){
    return this;
  }
}

p = new PromiseQ(() =>{})
console.log(p);
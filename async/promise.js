class PromiseQ {
  constructor(func){
    this.state = 'pending';
    this.result = undefined;
  }
}
p = new PromiseQ(() =>{})
console.log(p);
"use strict";

export default class {
  constructor(arg) {
    this.init();
    if (typeof arg == "string" || typeof arg == "number") {
      // idの時はfetch
      this.fetch(arg);
    }
    if (typeof arg == "object") {
      // objectの時はassignするだけ
      Object.assign(this, arg);
      this.after_assign();
    }
  }

  init() {
    Object.assign(this, this.container_hash());
  }

  fetch(id){
    this.query().execute({id: id}).then(resp=>{
      Object.assign(this, resp.data);
      // console.log(resp.data);
      this.after_assign();
    }).catch(resp=>{
      console.log(resp);
    })
  }

  container_hash() {
    throw "This method must be overridden";
  }

  query(){
    throw "This method must be overridden";
  }

  after_assign(){
    console.log("after_assign hook is run");
  }
}
import { Person } from "./person.js";

class Hero extends Person{
    title = "default";
    static version = 101;
    firstname = "default";
    lastname = "default";
    #secret = "my secret";
    constructor(ht,hf,hl,hp){
        super(hp);
        this.title = ht;
        this.firstname = hf;
        this.lastname = hl;
    }
   fullname(){
    return this.firstname+" "+this.lastname;
   }
   get secret(){
    return this.#secret;
   }
   set secret(nsecret){
    this.#secret = nsecret;
   }

}


export { Hero };
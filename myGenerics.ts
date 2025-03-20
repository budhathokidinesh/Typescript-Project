const score: Array<number> = [];
const names: Array<string> = [];

function indentityOne(val: boolean | number): boolean | number {
  return val;
}
function indentityTwo(val: any): any {
  return val;
}
function indentityThree<Type>(val: Type): Type {
  return val;
}
// indentityThree(true);

function indentityFour<T>(val: T): T {
  return val;
}
interface Bootle {
  brand: string;
  type: number;
}
indentityFour<Bootle>({ brand: "naren", type: 4 });

function getSearchProducts<T>(products: T[]): T {
  //do database operations
  const myIndex = 3;
  return products[myIndex];
}
const getMoreSearchedProducts = <T>(products: T[]): T => {
  //do some dtabase operatons
  const myIndex = 4;
  return products[myIndex];
};
interface Database {
  connection: string;
  username: string;
  password: string;
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}
anotherFunction(3, { connection: "yes", username: "no", password: "jpt" });

interface Quize {
  type: string;
  name: string;
}
interface Course {
  name: string;
  author: string;
  subject: string;
}
class Sellable<T> {
  public cart: T[] = [];
  addToCart(products: T) {
    this.cart.push(products);
  }
}
export {};

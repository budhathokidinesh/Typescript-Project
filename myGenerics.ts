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

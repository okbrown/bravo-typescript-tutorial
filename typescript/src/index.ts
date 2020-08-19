// Types

// String
let firstname: string = 'Orlando';

type Name = string;
let lastname: Name = 'Brown';

// Number
let age: number = 40

type Age = number;
let age2: Age = 40;

interface Person {
    firstname: string,
    lastname: string,
    age: number,
}

// Generics
type arrNum = Array<number>
type arrStr = Array<string>

const last = <T>(arr: Array<T>):T => {
 return arr[arr.length - 1];
}

const lNum = last([1, 2, 3]);
const lStr = last<string>(["name", "stuff", "what"]);

const makeArr = <T>(x: T) => {
    return [x];
}

const a = makeArr(1);

const getFullName = <T extends { firstName:string, lastName: string }>(obj:T) => {
    return {
        ...obj,
        fullName: `${obj.firstName} ${obj.lastName}`,
    }
}

const p = getFullName({ firstName: 'orlando', lastName: 'brown', age: 40 });

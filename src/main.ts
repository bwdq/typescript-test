let hello: string = "world";

const getFullName = (name: string, surname: string): string => {
    return name + " " + surname;
};

console.log(getFullName("Monster", "Lessons"))

const user: UserInterface = {
    name: "Monster",
    age: 30,
    getMessage() {
        return "Hello" + name;
    }
};

const user2: UserInterface = {
    name: "Jack",
    age: 30,
    getMessage() {
        return "Hello" + name;
    }
};

interface UserInterface {
    name: string;
    age?: number;
    getMessage(): string,
}

console.log(user.name)

let username = "alex";

let pageName: string | number = "1";

let errorMessage: string | null = null;

let user3: UserInterface | null = null;

let someProp: string | number | null | undefined | string[] | object;
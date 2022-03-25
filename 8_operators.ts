interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person; // будут находится name age
const key: PersonKeys = "name";

type User = {
  _id: number;
  name: string;
  email: string;
  createdAt: Date;
};

type UserKeysNoMeta1 = Exclude<keyof User, "_id" | "createdAt">;
type UserKeysNoMeta2 = Pick<User, "name" | "email">;

const u1:UserKeysNoMeta1 = 'name'
//u1 = 'name'

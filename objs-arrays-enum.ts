// const person: {
//   name: string;
//   age: number;
// } = {

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

const role = {
  admin: 1,
  read_only: 2,
  author: 3
}

enum Role {ADMIN = 1, READ_ONLY, AUTHOR};

const person = {
  name: 'ryan',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
};

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin', 'user'];

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

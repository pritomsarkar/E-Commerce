import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin Mohit",
    email: "admin.mohit@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Rahul Roy",
    email: "roy.rahul@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Sumit Maji",
    email: "sumit.maji@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;

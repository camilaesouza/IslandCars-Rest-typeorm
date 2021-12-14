import { EntitySchema } from "typeorm";

const User = new EntitySchema({
  name: "User", // Entity name (your "Model")
  tableName: "users", // database table
  columns: {
    id: {
      primary: true, // primary key
      type: "int",
      generated: true, // auto-generated
    },
    username: {
      type: "varchar",
    },
    password: {
      type: "varchar",
    },
  },
});

export default User;
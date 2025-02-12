// class Database {
//   connect(){
//     console.log('connecting to the database')
//   }
// }

// class UserServices {
//   private  database:Database;

//   constructor()
// }

type ReturnTypeInfer<T> = T extends (...args: any[]) => infer R ? R : never;

function getName() {
  return 'mohamed';
}

type NameType = ReturnTypeInfer<typeof getName>;

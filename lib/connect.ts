import PocketBase from "pocketbase";
// initialise client
export const pbClient = new PocketBase("http://127.0.0.1:8090");

// we are using typescript for this tutorial as it considered an industry standard
// this code add a todo item to the database
export async function addUsers(user: any) {
  try {
    const record = await pbClient.collection("users").create(user);
    return record;
  } catch (error: any) {
    return { error: error.message };
  }
}
// this fetchs all the todos from database
export async function getUsers(){
    const records =await pbClient.collection('users').getFullList(200 /* batch size */, {
      sort: '-created',
    });
    return records;
};

export async function getcourses (){
  // you can also fetch all records at once via getFullList
const records = await pbClient .collection('ourcourses').getFullList({
  sort: '-created',
});
return records;
}
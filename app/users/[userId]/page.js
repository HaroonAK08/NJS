export default async function Page(props) {
  async function getUserData() {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    return data.json();
  }
  const users = await getUserData();
  const currentUserId = props.params.userId;
  const userData = users[currentUserId - 1];
  console.log("UserDarta>>>>>>>", userData);
  return (
    <>
      <div>
        <h2>{userData.name}</h2>
        <h2>{userData.username}</h2>
        <h2>{userData.email}</h2>
        <h2>{userData.address.street}</h2>

      </div>
    </>
  );
}

// export async function generateStaticParams(){
//     const data = await fetch("https://jsonplaceholder.typicode.com/users");
//     return data.json();
//     const paths 
// }

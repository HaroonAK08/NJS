import Link from "next/link";
import React from "react";


export default async function Page() {
  async function getUserData() {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    return data.json();
  }

  const users = await getUserData();
  console.log("users>>>>",users)

  return (
    <>
      <div>
        {users.map((user: any) => (
          <div key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </div>
        ))}
      </div>
    </>
  );
}

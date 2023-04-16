import type { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users",
};

export default async function UsersPage() {
  // Promise type since async-await returns a promise
  const usersData: Promise<User[]> = getAllUsers();

  const users = await usersData;

  // Check how it works in the server component
  console.log("Hello");

  const content = (
    <section>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
      <br />
      {/* Map users data */}
      {users.map((user) => {
        return (
          <>
            <p key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
            <br />
          </>
        );
      })}
    </section>
  );

  return <div>page</div>;
}

import React from "react";
import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";

type Params = {
  params: {
    userId: string;
  };
};

// Collects data in parallel
export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getUserPosts(userId);

  const [user, userPosts] = await Promise.all([userData, userPostsData]);

  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <UserPosts posts={userPosts} />
    </>
  );
}

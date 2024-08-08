"use server"

export async function getSensitiveData() {
    console.log(
    `Using multiple libraries,
     accessing environment variables,
     interacting with a database,
     processing confidential information`
  );
  const response = await fetch('http://localhost:8000/posts', {
    headers: {
      authorization: process.env.NEXT_PUBLIC_API_KEY,
    },
  })
  const data = await response.json();
  return data;

}
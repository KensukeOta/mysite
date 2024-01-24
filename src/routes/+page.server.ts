import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch }) => {
  const res = await fetch("https://dotinstall.github.io/setup/fetchapi/users.json")
  const data = await res.json()

  console.log(data)

  return {
    data
  }
};
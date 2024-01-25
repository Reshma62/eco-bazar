export const userData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();
  } catch (error) {
    console.log("error", error);
  }
};

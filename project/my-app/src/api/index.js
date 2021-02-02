export const getData = async (path) => {

   const data =  await fetch(`https://jsonplaceholder.typicode.com/${path}`)
      return await data.json();

}

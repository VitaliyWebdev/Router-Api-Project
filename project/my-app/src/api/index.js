export const getData = async (path) => {

    const data = await fetch(`https://jsonplaceholder.typicode.com/${path}`)
    return await data.json();

}

export const postData = (newPost) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

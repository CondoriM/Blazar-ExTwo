const url = "https://jsonplaceholder.typicode.com/posts";

fetch(url).then((res) => res.json().then((json) => console.log(json)))
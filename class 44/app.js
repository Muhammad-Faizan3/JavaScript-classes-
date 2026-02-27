fetch('https://jsonplaceholder.typicode.com/todos')
 .then(response => response.json())
      .then(json => console.log(json))


let response = fetch('https://jsonplaceholder.typicode.com/todos');

response.then((data) => data.json()).then((data) => console.log(data))
.catch((err) => console.log(err)
).finally(() => console.log('finally chala')
)

let baseUrl = 'https://jsonplaceholder.typicode.com';
let endPost = {
    posts: '/posts',
    todos: '/todos',
    comments : '/comments',
    photos : '/photos',
}
let test = async () => {
   let response = await fetch(`${baseUrl}${endPost.photos}`);
   let data = await response.json()
   console.log(data);
}
   test()

async function test1() {
    
}
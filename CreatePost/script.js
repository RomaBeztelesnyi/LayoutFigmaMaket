const getPosts = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    let post = await response.json();
    writePosts(post);
};

const getComments = async (postId, form) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
      const comments = await response.json();
      displayComments(comments, form);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
};

const writePosts = (posts) => {
    const postContainer = document.querySelector('.container');
    posts.forEach(item => {
        const form = document.createElement('form');
        form.classList.add('post')
        form.innerHTML = `
        <span class="post-number">${item.id}</span>
        <h2 class="post-title">${item.title}</h2>
        <p class="post-text">${item.body}</p>
        <input type="hidden" id="hiddenInput" value="${item.id}"/>
        <input type="submit" name="delete" value ="X" class = "btn"/>
        <button type="button" class="comment-btn"> Get comments </button>
        `
        postContainer.appendChild(form);


        form.addEventListener('submit', (element) => {
            element.preventDefault()

            const postId = parseInt(form.querySelector('#hiddenInput').value);
            const filteredArray = posts.filter(item => item.id !== Number(postId))

            postContainer.innerHTML = ''
            writePosts(filteredArray);
        })

        form.querySelector('.comment-btn').addEventListener('click', () => {
            const postId = item.id;
            getComments(postId, form)
        });
    });
}

const displayComments = (comments, form) => {
    const commentsContainer = document.createElement('section')
    comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.innerHTML = `
          <h4>${comment.name}</h4>
          <p>${comment.body}</p>
        `;
        commentsContainer.appendChild(commentElement);
        
    });
    form.appendChild(commentsContainer);
}
getPosts()

// const writePosts = (posts) => {
//     const postContainer = document.querySelector('.container');
//     posts.forEach(item => {
//         // Create elements
//         const post = document.createElement('section');
//         post.classList.add('post')
//         post.innerHTML = `
//         <span class="post-number">${item.id}</span>
//         <h2 class="post-title">${item.title}</h2>
//         <p class="post-text">${item.body}</p>
//         <input type="hidden" id="hiddenInput" value="${item.id}"/>
//         <button class="btn" id ="delete">X</button>
//         `
    
//         postContainer.appendChild(post);

//         post.querySelector('#delete').addEventListener('click', (event) => {
//             console.log(post)
//             const id = post.querySelector('#hiddenInput').value
//             const filteredArray = posts.filter(item => item.id !== Number(id))

//             postContainer.innerHTML = ''
//             writePosts(filteredArray)
//         })
//     });
// };

// getPosts()
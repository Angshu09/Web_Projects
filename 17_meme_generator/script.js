const link = 'https://meme-api.com/gimme/wholesomememes';
const btn = document.getElementById('btn');

async function generate() {
    try {
        const loadingGif = 'loading-thinking.gif';
        document.querySelector('.meme-image').setAttribute('src', loadingGif);
        const response = await fetch(link);
        const data = await response.json();
        document.querySelector('.description').innerHTML = `<h2>${data.title} | ${data.author}</h2>`;
        document.querySelector('.meme-image').setAttribute('src', data.url);
    }
    catch (error) {
        console.error('An error occurred:', error);
    }
}


document.getElementById('btn').addEventListener('click', () => {
    generate()
})

generate()


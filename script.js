const getDogBtn = document.getElementById('getDogBtn');
const dogImage = document.getElementById('dogImage');

getDogBtn.addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                dogImage.src = data.message;
            }
        })
        .catch(error => console.error('Erro ao buscar imagem de cachorro:', error));
});

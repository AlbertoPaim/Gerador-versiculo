document.getElementById('generate-btn').addEventListener('click', async () => {
    const verseDisplay = document.getElementById('verse-display');

    try {
        // Carregar o arquivo JSON com os versículos
        const response = await fetch('versiculos.json');
        if (!response.ok) throw new Error('Erro ao carregar os versículos.');

        const verses = await response.json();
        console.log(verses); // Verificar se os dados estão sendo carregados corretamente

        // Verificar se o JSON contém dados
        if (!verses || verses.length === 0) {
            throw new Error('Não há versículos disponíveis.');
        }

        // Selecionar um versículo aleatório
        const randomIndex = Math.floor(Math.random() * verses.length);
        const randomVerse = verses[randomIndex];
        console.log(randomVerse); // Verificar qual versículo está sendo selecionado

        // Exibir o versículo e a localização
        verseDisplay.textContent = `"${randomVerse.versiculo}" - ${randomVerse.localizacao}`;
    } catch (error) {
        console.error(error);
        verseDisplay.textContent = 'Ocorreu um erro ao carregar o versículo. Tente novamente.';
    }
});

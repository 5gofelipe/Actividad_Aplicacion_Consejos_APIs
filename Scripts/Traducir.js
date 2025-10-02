async function traducir(texto){
    const response =await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(texto)}&langpair=en|es`);
    const data = await response.json();
    return data.responseData.translatedText;
}
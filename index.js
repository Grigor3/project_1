

function countText() {
    let text = document.getElementById("text-input").value;

    let letterCount = text.length;
    let wordCount = text.split(/\S+/).length - 1;
    let sentenceCount = text.split(/[.|!|?]+/).length - 1;

    let stats = "Количество букв: " + letterCount + " " +
        "Количество слов: " + wordCount + " " +
        "Количество предложений: " + sentenceCount;
    document.getElementById("text-stats").innerHTML = stats;
    document.getElementById("text-input").value = "";
}



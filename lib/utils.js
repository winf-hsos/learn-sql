function log(text, outputId = "console") {
    var output = document.querySelector("#" + outputId);

    if (text instanceof Object) {
        text = JSON.stringify(text, null, 2);
    }

    if (text !== "") output.value += text + "\n";
}

function clearLog(outputId = "console") {
    var output = document.querySelector("#" + outputId);
    output.value = "";
}

function getInput(id) {
    var input = document.querySelector("#" + id);
    return input.value;
}


function setEditorContent(content) {
    editor.insert(content);
}
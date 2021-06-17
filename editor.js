var editor = ace.edit("editor");

//editor.setTheme("ace/theme/twilight");
editor.setTheme("ace/theme/dracula");
editor.setTheme("ace/theme/nord_dark");
editor.session.setMode("ace/mode/sql");
editor.setOption("highlightActiveLine", true);


editor.setOptions({
    fontSize: "16pt"
});


editor.resize();
// KiyanYang

// 代码语言标准形式
var code_language = {
    txt: "",
    md: "Markdown",
    markdwon: "Markdown",
    md_txt: "Markdown",

    yml: "YAML",
    yaml: "YAML",
    json: "JSON",

    xml: "XML",
    html: "HTML",
    css: "CSS",
    styl: "Stylus",
    stylus: "Stylus",

    js: "JavaScript",
    javascript: "JavaScript",
    ts: "TypeScript",
    typescript: "TypeScript",
    py: "Python",
    python: "Python",

    c: "C",
    "c++": "C++",
    cpp: "C++",
    cxx: "C++",
    "c#": "C#",
    cs: "C#",
    csharp: "C#",
    java: "Java",
};

// 代码语言格式化
function getLanguage(lang) {
    var lang_lower = lang.toLowerCase();
    return lang_lower in code_language ? code_language[lang_lower] : lang;
}

// 获取唯一 ID
function getUuiD() {
    return Math.random().toString(36).substring(2, 8) + Date.now().toString(36);
}

function addLanguage() {
    // 获取所有 .code-wrapper 元素
    var hs = $(".code-wrapper"); // 此处改动
    for (var i = 0; i < hs.length; i++) {
        // 获取代码语言
        var lang = hs[i].firstChild.firstChild.classList[1]; // 此处改动
        // 折叠块的 id
        var id = `kiyan-collapse-${getUuiD()}`;
        // 前面折叠按钮
        var btn = `<i class="fas fa-angle-down" type="button" data-toggle="collapse" data-target="#${id}"></i>`;
        // 代码语言
        var span = `<span>${getLanguage(lang)}</span>`;
        // 折叠块包裹原来的内容
        var div = `<div class="collapse show" id="${id}">${hs[i].innerHTML}</div>`;
        hs[i].innerHTML = btn + span + div;
    }
}

$(document).ready(addLanguage);
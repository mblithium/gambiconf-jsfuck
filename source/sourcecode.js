
document.body.innerHTML = `
<div class="container">
    <div class="hello">Olá,</div>
    <div class="gambiconf">
        <h1>Gambiconf!</h1>
    </div>
    <img src="./img/mambi.png">
    <div class="buttons">
        <button type="button" onClick="replaceURL_viewScript()">Ver código</button>
    </div>
</div>
`;

document.head.innerHTML = `
<title>Hello Gambiconf</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" rel="stylesheet">
<link rel="shortcut icon" href="./img/favicon.png" type="image/x-icon">
<style>
    * {
        box-sizing: border-box;
    }
    body {
        font-family: 'Noto Sans', sans-serif;
        background-color: white;
        margin: 0;
    }
    h1 {
        font-size: 2.5rem;
        color: #ED682F;
        margin: 0;
    }
    img {
        width: 200px;
        display: block;
        margin: 0 auto;
        padding: 10px 0
    }
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: calc(100vh - 10px);
        margin: auto 0;
    }
    .hello {
        text-align: center;
        font-size: 1.5rem;
    }
    .gambiconf {
        text-align: center;
        font-size: 2.5rem;
    }

    button {
        padding: 20px;
        min-width: 200px;
        margin: 20px;
        font-size: 2rem;
        text-transform: uppercase;
        background-color: #f34b21;
        border: transparent;
        border-radius: 4px;
        display: block;
        margin: 0 auto;
        color: white;
    }
</style>
`;

function replaceURL_viewScript () {
    if (window.location.href.includes('index.html')) {
        window.location.href = window.location.href.replace('index.html', 'scripts/scripts.js');
    } else {
        window.location.href += "scripts/scripts.js"
    }
    
}
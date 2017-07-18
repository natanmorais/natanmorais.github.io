function exibeBanner() {
    if (screen.width > 768) {
        document.write('<video id="video" poster="media/static_banner.png" id="bgvid" playsinline autoplay muted loop><source src="media/banner_keyboard2.mp4" type="video/mp4"></video>');
        return;
    } else {
        return;
    }
}

function showEmail() {
    var x = document.getElementById('email');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function goToDiv(titulo) {
    limpaBordas();
    var x = document.getElementById(titulo);
    x.style.borderStyle = 'dashed';
    x.style.borderColor = 'aqua';
    x.style.borderWidth = 'thin';
}

function limpaBordas() {
    var a = document.getElementById('sobre');
    var b = document.getElementById('asha');
    var c = document.getElementById('projetos');
    var d = document.getElementById('contribuicoes');
    var e = document.getElementById('contato');
    a.style.borderStyle = 'none';
    b.style.borderStyle = 'none';
    c.style.borderStyle = 'none';
    d.style.borderStyle = 'none';
    e.style.borderStyle = 'none';
}

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
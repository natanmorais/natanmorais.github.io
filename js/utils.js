function exibeBanner() {
    if (screen.width > 639) {
        document.write('<video id="video" poster="media/static_banner.png" id="bgvid" playsinline autoplay muted loop><source src="media/banner_keyboard2.mp4" type="video/mp4"></video>');
        return;
    } else {
        document.write('Tela pequena!');
        return;
    }
}
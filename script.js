$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var photoFrames = $('.photo-frames');
    var frames = $('.frame');
    var gifImage = $('#gifImage');
    var backgroundMusic = $('#backgroundMusic')[0]; // Selecciona el elemento de audio
    
    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });

    gifImage.click(function(event) {
        event.stopPropagation(); // Evita que el clic en el GIF propague otros eventos
        var src = $(this).attr('src');
        $(this).attr('src', '');
        $(this).attr('src', src);
    });

    function open() {
        envelope.addClass("open").removeClass("close");
        backgroundMusic.play(); // Reproducir la canción
        setTimeout(function() {
            photoFrames.css('opacity', '1'); // Mostrar el contenedor de las imágenes
            showPhotosOneByOne();
        }, 5000); // Esperar a que la carta se abra completamente (ajusta el tiempo si es necesario)
    }

    function close() {
        envelope.addClass("close").removeClass("open");
        backgroundMusic.pause(); // Pausar la canción
        backgroundMusic.currentTime = 0; // Reiniciar la canción
        photoFrames.css('opacity', '0'); // Ocultar las imágenes
        frames.css('transform', 'translateY(100px)'); // Mover las imágenes fuera de la vista
    }

    function showPhotosOneByOne() {
        frames.each(function(index) {
            var frame = $(this);
            setTimeout(function() {
                frame.css('transform', 'translateY(0)'); // Mover la imagen a su posición final
            }, index * 1000); // Ajusta el tiempo entre cada imagen (1000ms = 1 segundo)
        });
    }
});
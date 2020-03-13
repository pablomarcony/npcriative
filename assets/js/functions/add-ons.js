// Ativa a função toda vez que o usuário utilizar o scroll
// Usa o debounce da biblioteca lodash, para evitar excessivos disparos da função ao scroll. Assim a função só vai disparar a cada 200ms, o tempo é informado ao final da função.


    $(window).on('scroll', _.debounce(function () {

        var navbar = $('.icon-navbar').css('display');
        if (navbar != 'flex') {
            // Seleciona a navegação
            // Identifica o tamanho total do menu
            // Verifica a distância entre o scroll e o topo
            var $nav = $('.navbar');
                navHeight = $nav.height();
                windowTop = $(this).scrollTop();

            // Verifica quando a distância do scroll for maior que o tamanho total do menu
            if (windowTop > 0) {
                // Adiciona a classe small ao menu
                $nav.addClass('navbar-small');
            } else {
                // Remove a classe small do menu
                $nav.removeClass('navbar-small');
            }
        }
    }, 0));
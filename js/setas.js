var itemAtual = 1;
function next() {
    itemAtual++; // adicionamos +1 na variável sempre que a função é chamada (era 1, agora é 2)

    if (itemAtual > 3) {
        itemAtual = 1;
    }

    $('.bgs-estadio').removeClass('i1').removeClass('i2').removeClass('i3');
    $('.times').removeClass('t1').removeClass('t2').removeClass('t3');
    $('.jogadores').removeClass('j1').removeClass('j2').removeClass('j3');
    $('.textos').removeClass('tx01').removeClass('tx02').removeClass('tx03');

    $('.bgs-estadio').addClass('i' + itemAtual);
    $('.times').addClass('t' + itemAtual);
    $('.jogadores').addClass('j' + itemAtual);
    $('.textos').addClass('tx0' + itemAtual);

    $('.bg-gramado').css('background-position-x', itemAtual * -100 + 'px');
}

function prev() {
    itemAtual--; // adicionamos +1 na variável sempre que a função é chamada (era 1, agora é 2)

    if (itemAtual < 1) {
        itemAtual = 3;
    }

    $('.bgs-estadio').removeClass('i1').removeClass('i2').removeClass('i3');
    $('.times').removeClass('t1').removeClass('t2').removeClass('t3');
    $('.jogadores').removeClass('j1').removeClass('j2').removeClass('j3');
    $('.textos').removeClass('tx01').removeClass('tx02').removeClass('tx03');

    $('.bgs-estadio').addClass('i' + itemAtual);
    $('.times').addClass('t' + itemAtual);
    $('.jogadores').addClass('j' + itemAtual);
    $('.textos').addClass('tx0' + itemAtual);

    $('.bg-gramado').css('background-position-x', itemAtual * +100 + 'px');
}
let canvas;
let context;
let x;


let s, o, n, v, g, p, j, m, j1, j2, z, z1, n1, m1,
    tochka, p2, m2, m21, sk, tochka2, os, ov;
let tochka0;
let tochka01;
let rol;
let shk, wk;
let shkr, wkr;
let k;

function painting_init() {
    k = 3;
    canvas = document.querySelector('.painting');
    canvas.width = +document.querySelector('input[name="ОН"]').value * 10 * 2;
    if(hood.querySelector('input').checked){
        k +=0.9;
    }
    if(pocket.querySelector('input').checked){
        k+=0.8;
    }
    if(wings.querySelector('input').checked){
        k+=0.8;
    }
    canvas.height = +document.querySelector('input[name="ОВ"]').value * 10 * k + 100;
    context = canvas.getContext("2d");
    context.strokeStyle = "black";
    x = [50, 50];
}

function painting_draw() {
    getPoints();
    x[0] = z[0] - z1[0];
    context.strokeStyle = "red";
    //первый пункт
    context.moveTo(getPoint(o)[0], getPoint(o)[1]);
    context.lineTo(getPoint(n)[0], getPoint(n)[1]);
    context.moveTo(getPoint(o)[0], getPoint(o)[1]);
    context.lineTo(getPoint(v)[0], getPoint(v)[1]);
    context.stroke();

    //второй пункт
    context.moveTo(getPoint(o)[0], getPoint(o)[1]);
    context.lineTo(getPoint(s)[0], getPoint(s)[1]);
    context.lineTo(getPoint(v)[0] - os, getPoint(v)[1]);
    context.stroke();

    //третий пункт
    context.moveTo(getPoint(p)[0], getPoint(p)[1]);
    context.lineTo(getPoint(j)[0], getPoint(j)[1]);
    context.moveTo(getPoint(o)[0], getPoint(o)[1]);
    context.quadraticCurveTo(getPoint(o)[0] - 10, g[1] - 10, getPoint(g)[0], g[1]);
    context.stroke();

    //четвертый пункт
    context.moveTo(getPoint(m)[0], getPoint(m)[1]);
    context.lineTo(getPoint(j1)[0], getPoint(j1)[1]);
    context.lineTo(getPoint(j2)[0], getPoint(j2)[1]);
    context.lineTo(getPoint(j)[0], getPoint(j)[1]);
    context.lineTo(getPoint(g)[0], getPoint(j)[1]);
    context.stroke();

    //пятый пункт
    context.moveTo(getPoint(g)[0], g[1]);
    context.lineTo(getPoint(z1)[0], getPoint(z1)[1]);
    context.lineTo(getPoint(z)[0], getPoint(z)[1]);
    context.lineTo(getPoint(j)[0], getPoint(j)[1]);
    context.stroke();

    //шестой пункт
    context.moveTo(getPoint(n)[0], getPoint(o)[1]);
    context.lineTo(getPoint(n1)[0], getPoint(n1)[1]);
    context.moveTo(getPoint(m1)[0], getPoint(m1)[1]);
    context.lineTo(getPoint(tochka)[0], getPoint(tochka)[1]);
    context.moveTo(getPoint(m21)[0], getPoint(m21)[1]);
    context.lineTo(getPoint(j1)[0], getPoint(j1)[1]);
    context.stroke();

    //седьмой пункт
    context.moveTo(getPoint(j1)[0], getPoint(j1)[1]);
    context.lineTo(getPoint(p2)[0], getPoint(p2)[1]);
    context.lineTo(getPoint(p1)[0], getPoint(p1)[1]);
    context.moveTo(getPoint(j1)[0], getPoint(j1)[1]);
    context.quadraticCurveTo((getPoint(j1)[0] + getPoint(p2)[0]) / 2 + (getPoint(p2)[0] - getPoint(j1)[0]) / 3,
        (getPoint(j1)[1] + getPoint(p2)[1]) / 2, getPoint(p2)[0], getPoint(p2)[1]);
    context.stroke();

    //восьмой пункт
    context.moveTo(getPoint(p1)[0], getPoint(p1)[1]);
    context.lineTo(getPoint(sk)[0], getPoint(sk)[1]);
    context.lineTo(getPoint(tochka2)[0], getPoint(tochka2)[1]);
    context.stroke();

    //девятый пункт
    context.moveTo(getPoint(tochka2)[0], getPoint(tochka2)[1]);
    context.quadraticCurveTo((getPoint(tochka2)[0] + getPoint(m1)[0]) / 2 + (getPoint(tochka2)[0] - getPoint(m1)[0]) / 3,
        (getPoint(tochka2)[1] + getPoint(m1)[1]) / 2, getPoint(m1)[0], getPoint(m1)[1]);
    context.stroke();

    context.strokeStyle = "black";
    drawPoint(getPoint(s)[0], getPoint(s)[1], 'С');
    drawPoint(getPoint(o)[0], getPoint(o)[1], 'О');
    drawPoint(getPoint(n)[0], getPoint(n)[1], 'Н');
    drawPoint(getPoint(v)[0], getPoint(v)[1], 'В');
    drawPoint(getPoint(g)[0], g[1], 'Г');
    drawPoint(getPoint(p)[0], getPoint(p)[1], 'П');
    drawPoint(getPoint(j)[0], getPoint(j)[1], 'Ж');
    drawPoint(getPoint(m)[0], getPoint(m)[1], 'М');
    drawPoint(getPoint(j1)[0], getPoint(j1)[1], 'Ж1');
    drawPoint(getPoint(z)[0], getPoint(z)[1], 'З');
    drawPoint(getPoint(z1)[0], getPoint(z1)[1], 'З1');
    drawPoint(getPoint(n1)[0], getPoint(n1)[1], 'Н1');
    drawPoint(getPoint(m1)[0], getPoint(m1)[1], 'М1');
    drawPoint(getPoint(p1)[0], getPoint(p1)[1], 'П1');
    drawPoint(getPoint(p2)[0], getPoint(p2)[1], 'П2');
    drawPoint(getPoint(m2)[0], getPoint(m2)[1], 'М2');
    drawPoint(getPoint(sk)[0], getPoint(sk)[1], 'СК');
    context.stroke();
}

function drawDetail1() {
    context.lineWidth = 1;
    context.moveTo(getPoint(o)[0], getPoint(o)[1]);
    context.quadraticCurveTo(getPoint(o)[0] - 10, g[1] - 10, getPoint(g)[0], g[1]);
    context.lineTo(getPoint(z1)[0], getPoint(z1)[1]);
    context.lineTo(getPoint(z)[0], getPoint(z)[1]);
    context.lineTo(getPoint(j)[0], getPoint(j)[1]);
    context.lineTo(getPoint(j2)[0], getPoint(j2)[1]);
    context.lineTo(getPoint(j1)[0], getPoint(j1)[1]);
    context.quadraticCurveTo((getPoint(j1)[0] + getPoint(p2)[0]) / 2 + (getPoint(p2)[0] - getPoint(j1)[0]) / 3,
        (getPoint(j1)[1] + getPoint(p2)[1]) / 2, getPoint(p2)[0], getPoint(p2)[1]);
    context.lineTo(getPoint(p1)[0], getPoint(p1)[1]);
    context.lineTo(getPoint(sk)[0], getPoint(sk)[1]);
    context.lineTo(getPoint(tochka2)[0], getPoint(tochka2)[1]);
    context.quadraticCurveTo((getPoint(tochka2)[0] + getPoint(m1)[0]) / 2 + (getPoint(tochka2)[0] - getPoint(m1)[0]) / 3,
        (getPoint(tochka2)[1] + getPoint(m1)[1]) / 2, getPoint(m1)[0], getPoint(m1)[1]);
    context.lineTo(getPoint(tochka)[0], getPoint(tochka)[1]);
    context.lineTo(getPoint(o)[0], getPoint(o)[1]);
    context.stroke();

    context.moveTo(getPoint(o)[0] - 10, getPoint(o)[1] - 10);
    context.quadraticCurveTo(getPoint(o)[0] - 10 - 5, g[1] - 10 - 10,
        getPoint(g)[0] - 10, g[1] - 5);
    context.lineTo(getPoint(z1)[0] - 10, getPoint(z1)[1] + 10);
    context.lineTo(getPoint(z)[0] + 10, getPoint(z)[1] + 10);
    context.lineTo(getPoint(j)[0] + 10, getPoint(j)[1] + 10);
    context.lineTo(getPoint(j2)[0] + 10, getPoint(j2)[1] + 10);
    context.lineTo(getPoint(j1)[0] - 5, getPoint(j1)[1] + 15);
    context.quadraticCurveTo((getPoint(j1)[0] + getPoint(p2)[0]) / 2 + (getPoint(p2)[0] - getPoint(j1)[0]) / 3 - 10,
        (getPoint(j1)[1] + getPoint(p2)[1]) / 2 + 5, getPoint(p2)[0] - 10, getPoint(p2)[1] + 10);
    context.lineTo(getPoint(p1)[0] + 10, getPoint(p1)[1] + 10);
    context.lineTo(getPoint(sk)[0] + 10, getPoint(sk)[1]);
    context.lineTo(getPoint(tochka2)[0] + 10, getPoint(tochka2)[1]);
    context.quadraticCurveTo((getPoint(tochka2)[0] + getPoint(m1)[0]) / 2 + (getPoint(tochka2)[0] - getPoint(m1)[0]) / 3 + 10,
        (getPoint(tochka2)[1] + getPoint(m1)[1]) / 2 - 10, getPoint(m1)[0] + 5, getPoint(m1)[1] - 10);
    context.lineTo(getPoint(tochka)[0], getPoint(tochka)[1] - 10);
    context.lineTo(getPoint(o)[0] - 10, getPoint(o)[1] - 10);
    context.stroke();

    x[1] += ov * 4 / 5;
}

function drawDetail2() {
    context.lineWidth = 1;
    context.moveTo(getPoint(tochka0)[0], getPoint(tochka0)[1]);
    context.lineTo(getPoint(z1)[0], getPoint(z1)[1]);
    context.lineTo(getPoint(z)[0], getPoint(z)[1]);
    context.lineTo(getPoint(j)[0], getPoint(j)[1]);
    context.lineTo(getPoint(tochka0)[0], getPoint(tochka0)[1]);

    context.moveTo(getPoint(j1)[0], getPoint(j1)[1]);
    context.quadraticCurveTo((getPoint(j1)[0] + getPoint(p2)[0]) / 2 + (getPoint(p2)[0] - getPoint(j1)[0]) / 3,
        (getPoint(j1)[1] + getPoint(p2)[1]) / 2, getPoint(p2)[0], getPoint(p2)[1]);
    context.lineTo(getPoint(p1)[0], getPoint(p1)[1]);
    context.lineTo(getPoint(sk)[0], getPoint(sk)[1]);
    context.lineTo(getPoint(tochka2)[0], getPoint(tochka2)[1]);
    context.lineTo(getPoint(j1)[0], getPoint(j1)[1]);
    context.stroke();

    context.moveTo(getPoint(tochka0)[0] - 10, getPoint(tochka0)[1] - 10);
    context.lineTo(getPoint(z1)[0] - 10, getPoint(z1)[1] + 10);
    context.lineTo(getPoint(z)[0] + 10, getPoint(z)[1] + 10);
    context.lineTo(getPoint(j)[0] + 15, getPoint(j)[1] - 10);
    context.lineTo(getPoint(tochka0)[0] - 10, getPoint(tochka0)[1] - 10);


    context.moveTo(getPoint(j1)[0] - 15, getPoint(j1)[1] - 10);
    context.quadraticCurveTo((getPoint(j1)[0] + getPoint(p2)[0]) / 2 + (getPoint(p2)[0] - getPoint(j1)[0]) / 3 - 10,
        (getPoint(j1)[1] + getPoint(p2)[1]) / 2 + 5, getPoint(p2)[0] - 10, getPoint(p2)[1] + 10);
    context.lineTo(getPoint(p1)[0] + 10, getPoint(p1)[1] + 10);
    context.lineTo(getPoint(sk)[0] + 10, getPoint(sk)[1]);
    context.lineTo(getPoint(tochka2)[0] + 5, getPoint(tochka2)[1] - 10);
    context.lineTo(getPoint(j1)[0] - 15, getPoint(j1)[1] - 10);
    context.stroke();

    x[1] += ov;
}

function drawDetail3() {
    x[1] += 100;
    context.lineWidth = 1;
    context.moveTo(x[0], x[1]);
    context.quadraticCurveTo(x[0] + ov * 2 / 5, x[1] - 50,
        x[0] + ov, x[1])
    context.lineTo(getPoint(tochka01)[0] + ov, getPoint(tochka01)[1]);
    context.quadraticCurveTo(x[0] + ov * 2 / 5, getPoint(tochka01)[1] + 50,
        getPoint(tochka01)[0], getPoint(tochka01)[1])
    context.lineTo(x[0], x[1]);
    context.stroke();

    context.moveTo(x[0] - 10, x[1]-10);
    context.quadraticCurveTo(x[0] + ov * 2 / 5, x[1] - 50 -10,
        x[0] + ov + 10, x[1] - 10)
    context.lineTo(getPoint(tochka01)[0] + ov + 10, getPoint(tochka01)[1] + 10);
    context.quadraticCurveTo(x[0] + ov * 2 / 5, getPoint(tochka01)[1] + 50 + 10,
        getPoint(tochka01)[0] - 10, getPoint(tochka01)[1] + 10)
    context.lineTo(x[0] - 10, x[1]-10);
    context.stroke();

    x[1] += tochka01[1] + 100;
}

function drawDetail4(){

    context.lineWidth = 1;
    context.moveTo(x[0], x[1]);
    context.quadraticCurveTo(x[0] + rol * 3/ 5, x[1] - rol / 6,
        x[0] + rol / 3, x[1] + rol * 7/12);
    context.quadraticCurveTo(x[0] + rol / 4, x[1] + rol * 7/12,
        x[0] + rol / 5, x[1] + rol*7/11);
    context.quadraticCurveTo(x[0] + rol / 8, x[1] + rol*7/10,
        x[0] + rol / 20, x[1] + rol *2/3);
    context.lineTo(x[0], x[1]);
    context.stroke();

    context.moveTo(x[0] - 10, x[1] - 10);
    context.quadraticCurveTo(x[0] + rol * 3/ 5 + 20, x[1] - rol / 6 - 20,
        x[0] + rol / 3 + 10, x[1] + rol * 7/12 + 10);
    context.quadraticCurveTo(x[0] + rol / 4, x[1] + rol * 7/12 + 10,
        x[0] + rol / 5, x[1] + rol*7/11 + 15);
    context.quadraticCurveTo(x[0] + rol / 8, x[1] + rol*7/10 + 10,
        x[0] + rol / 20 - 10, x[1] + rol *2/3 + 10);
    context.lineTo(x[0] - 10, x[1] - 10);
    context.stroke();

    context.moveTo(x[0] + rol *2/ 3, x[1]);
    context.lineTo(x[0]+ rol *2/ 3 + rol, x[1]);
    context.lineTo(x[0]+ rol *2/ 3 + rol, x[1] + rol / 6);
    context.lineTo(x[0]+ rol *2/ 3, x[1] + rol / 6);
    context.lineTo(x[0]+ rol *2/ 3, x[1]);
    context.stroke();

    context.moveTo(x[0] + rol *2/ 3 - 10, x[1]-10);
    context.lineTo(x[0]+ rol *2/ 3 + rol+10, x[1]-10);
    context.lineTo(x[0]+ rol *2/ 3 + rol+10, x[1] + rol / 6+10);
    context.lineTo(x[0]+ rol *2/ 3-10, x[1] + rol / 6+10);
    context.lineTo(x[0]+ rol *2/ 3-10, x[1]-10);
    context.stroke();

    x[1] += rol *2/ 3 + 50;
}

function drawDetail5(){

    context.lineWidth = 1;
    let type = document.querySelector('.wings')
        .querySelector('.param-2')
        .querySelector('select');

    if (type
        .querySelector(`option[value="${type.value}"]`).textContent  === "Ангелок") {
        context.moveTo(x[0], x[1]+wkr / 5);
        context.quadraticCurveTo(x[0] + shkr / 5, x[1] - wkr / 4,
            x[0] + shkr, x[1] + wkr *5/6);
        context.quadraticCurveTo(x[0] + shkr * 4 /5, x[1] +wkr * 6 /5,
            x[0] + shkr /2, x[1] + wkr *4/5);
        context.moveTo(x[0] + shkr *2/3, x[1] + wkr *17/18);
        context.quadraticCurveTo(x[0] + shkr /2, x[1] +wkr * 6 /5,
            x[0] , x[1] + wkr*2/3);
        context.lineTo(x[0], x[1]+wkr / 5);
        context.stroke();

        context.moveTo(x[0] - 10, x[1]+wkr / 5 - 10);
        context.quadraticCurveTo(x[0] + shkr / 5, x[1] - wkr / 4 - 10,
            x[0] + shkr + 15, x[1] + wkr *5/6);
        context.quadraticCurveTo(x[0] + shkr * 4 /5, x[1] +wkr * 6 /5 + 15,
            x[0] + shkr /2, x[1] + wkr *4/5);
        context.moveTo(x[0] + shkr *2/3 + 15, x[1] + wkr *17/18 + 5);
        context.quadraticCurveTo(x[0] + shkr /2 - 10, x[1] +wkr * 6 /5 + 15,
            x[0] -10, x[1] + wkr*2/3 + 10);
        context.lineTo(x[0] - 10, x[1]+wkr / 5 - 10);
        context.stroke();
    }
    else {
        context.moveTo(x[0], x[1]+wkr / 5);
        context.quadraticCurveTo(x[0] + shkr / 5, x[1] + wkr / 5,
            x[0] + shkr / 4, x[1]);
        context.quadraticCurveTo(x[0] + shkr*3/4, x[1],
            x[0] + shkr , x[1] + wkr*2/3);
        context.quadraticCurveTo(x[0] + shkr/2, x[1] +wkr/2,
            x[0] + shkr / 2, x[1] + wkr);
        context.quadraticCurveTo(x[0] + shkr/4, x[1] +wkr/2,
            x[0], x[1] + wkr*2/3);
        context.lineTo(x[0], x[1] + wkr/5);
        context.stroke();

        context.moveTo(x[0] - 10, x[1]+wkr / 5 - 10);
        context.quadraticCurveTo(x[0] + shkr / 5 - 10, x[1] + wkr / 5 -10,
            x[0] + shkr / 4 - 10, x[1] -10);
        context.quadraticCurveTo(x[0] + shkr*3/4  + 10, x[1] - 15,
            x[0] + shkr + 15, x[1] + wkr*2/3 + 10);
        context.quadraticCurveTo(x[0] + shkr/2 + 10, x[1] +wkr/2 + 5,
            x[0] + shkr / 2 + 5, x[1] + wkr + 15);
        context.quadraticCurveTo(x[0] + shkr/4, x[1] +wkr/2 + 10,
            x[0] - 10, x[1] + wkr*2/3 + 10);
        context.lineTo(x[0] - 10, x[1] + wkr/5 - 10);
        context.stroke();
    }



    x[1] += wkr + wk/5 + 50;

}

function drawDetail6(){

    context.lineWidth = 1;
    context.moveTo(x[0], x[1]);
    context.lineTo(x[0], x[1] + wk);
    context.lineTo(x[0] + shk /2, x[1] + wk + wk/5);
    context.lineTo(x[0] + shk, x[1] + wk);
    context.lineTo(x[0] + shk, x[1]);
    context.lineTo(x[0], x[1]);
    context.stroke();

    context.moveTo(x[0] - 10, x[1] -10);
    context.lineTo(x[0] -10, x[1] + wk+10);
    context.lineTo(x[0] + shk /2, x[1] + wk + wk/5+10);
    context.lineTo(x[0] + shk+10, x[1] + wk+10);
    context.lineTo(x[0] + shk+10, x[1]-10);
    context.lineTo(x[0]-10, x[1]-10);
    context.stroke();

    context.lineWidth = 1;
    context.moveTo(x[0] + shk * 3, x[1]);
    context.lineTo(x[0]+shk * 3, x[1] + wk/4);
    context.lineTo(x[0] + shk /2+shk * 3, x[1] + wk/4 + wk/5);
    context.lineTo(x[0] + shk+shk * 3, x[1] + wk/4);
    context.lineTo(x[0] + shk+shk * 3, x[1]);
    context.lineTo(x[0]+shk * 3, x[1]);
    context.stroke();

    context.moveTo(x[0] - 10+shk * 3, x[1] -10);
    context.lineTo(x[0] -10+shk * 3, x[1] + wk/4+10);
    context.lineTo(x[0] + shk /2+shk * 3, x[1] + wk/4 + wk/5+10);
    context.lineTo(x[0] + shk+10+shk * 3, x[1] + wk/4+10);
    context.lineTo(x[0] + shk+10+shk * 3, x[1]-10);
    context.lineTo(x[0]-10+shk * 3, x[1]-10);
    context.stroke();

    x[1] = 50;
    context.lineWidth = 1;
    context.moveTo(x[0] + ov / 2, x[1]);
    context.lineTo(x[0] + ov / 2, x[1] + shk/2);
    context.lineTo(x[0] + ov / 2+wk/4, x[1] + shk/2);
    context.lineTo(x[0] + ov / 2+wk/4 + wk/5, x[1]);
    context.moveTo(x[0] + ov / 2+wk/4, x[1] + shk/2);
    context.lineTo(x[0] + ov / 2+wk*3/4, x[1] + shk/2);
    context.lineTo(x[0] + ov / 2+wk*3/4 + wk/5, x[1]);
    context.stroke();

}

function getPoint(y) {
    return [x[0] + y[0], x[1] + y[1]];
}

function getPoints() {
    let on = +document.querySelector('input[name="ОН"]').value * 10;
    ov = +document.querySelector('input[name="ОВ"]').value * 10;
    let gg = +document.querySelector('input[name="Г"]').value * 10;
    let shg = +document.querySelector('input[name="Шг"]').value * 10;
    let shpl = +document.querySelector('input[name="Шпл"]').value * 10;
    let og = +document.querySelector('input[name="Ог"]').value * 10;
    let po = +document.querySelector('input[name="ПО"]').value * 10;
    let ot = +document.querySelector('input[name="От"]').value * 10;
    let n1m1 = +document.querySelector('input[name="Н1М1"]').value * 10;
    let zz1 = +document.querySelector('input[name="ЗЗ1"]').value * 10;
    rol = +document.querySelector('input[name="РОЛ"]').value * 10;
    shk = +document.querySelector('input[name="ШК"]').value * 10;
    wk = +document.querySelector('input[name="ВК"]').value * 10;
    shkr = +document.querySelector('input[name="ШКР"]').value * 10;
    wkr = +document.querySelector('input[name="ВКР"]').value * 10;



    os = (shg - shpl) / 2;
    let pj = (og - shpl) / 2;
    let mj1 = (ot - shpl) / 2;
    let vz = zz1 / 3;
    let vz1 = zz1 / 3 * 2;
    x0 = zz1;

    s = [0, 0];
    o = [os, 0];
    n = [os + on, 0];
    v = [os, ov];
    g = [0, ov - gg];
    p = [po + os, 0];
    j = [po + os, pj];
    m = [(n[0] + p[0]) / 2, (n[1] + p[1]) / 2];
    j1 = [m[0], m[1] + mj1];
    j2 = [(j[0] + j1[0]) / 2, j[1]];
    z = [v[0] + vz, v[1]];
    z1 = [v[0] - vz1, v[1]];
    n1 = [n[0], n[1] + ov];
    m1 = [n1[0], ov - n1m1];
    tochka = [(n[0] + m[0]) / 2, (n[1] + m[1]) / 2];
    p1 = [n1[0] + zz1 / 3, n1[1]];
    p2 = [n1[0] - zz1 / 3 * 2, n1[1]];
    m2 = [n[0], j1[1]];
    m21 = [m2[0] + zz1 / 3 * 2, m2[1]];
    sk = [m21[0], j[1]];
    tochka2 = [p1[0], m21[1]];

    tochka0 = [(g[0] + z1[0]) / 2, j[1]];
    tochka01 = [0, shpl];

}

function drawPoint(x, y, label) {
    let color = '#000';
    let size = 2;

    let pointX = Math.round(x);
    let pointY = Math.round(y);

    context.beginPath();
    context.fillStyle = color;
    context.arc(pointX, pointY, size, 0, 2 * Math.PI);
    context.fill();


    if (label) {
        let textX = pointX;
        let textY = Math.round(pointY - size - 3);

        context.font = 'Italic 14px Arial';
        context.fillStyle = color;
        context.textAlign = 'center';
        context.fillText(label, textX, textY);
    }
}

function download() {
    let image = canvas.toDataURL();
    let tmpLink = document.createElement('a');
    tmpLink.download = 'designer.png';
    tmpLink.href = image;

    document.body.appendChild(tmpLink);
    tmpLink.click();
    document.body.removeChild(tmpLink);
}

const hood = document.querySelector('.hood');
const pocket = document.querySelector('.pocket');
const wings = document.querySelector('.wings');

painting_init();
document.querySelector('.button-pain')
    .addEventListener('click', function () {
        painting_init();
        painting_draw();
        drawDetail1();
        drawDetail2();
        drawDetail3();
        if(hood.querySelector('input').checked){
            drawDetail4();
        }
        if(wings.querySelector('input').checked){
            drawDetail5();
        }
        if(pocket.querySelector('input').checked){
            drawDetail6();
        }
    })
document.querySelector('.button-dow')
    .addEventListener('click', function () {
        download();
    })

const modalCloseBtn = document.getElementById('closeButton');
const modalOpenBtn = document.getElementById('openButton');
const modalWindow = document.getElementById('modalWindow');
modalCloseBtn.addEventListener('click', function () {
    modalWindow.style.display = 'none';
})
modalOpenBtn.addEventListener('click', function (event) {
    modalWindow.style.display = 'block';
    event.preventDefault();
})

pocket.addEventListener('input', function (){
    if(pocket.querySelector('input').checked){
        for (par of pocket.querySelectorAll('.param-2')){
            par.style.display = 'block';
        }
    }
    else {
        for (par of pocket.querySelectorAll('.param-2')){
            par.style.display = 'none';
        }    }
})

wings.addEventListener('input', function (){
    if(wings.querySelector('input').checked){
        for (par of wings.querySelectorAll('.param-2')){
            par.style.display = 'block';
        }
    }
    else {
        for (par of wings.querySelectorAll('.param-2')){
            par.style.display = 'none';
        }    }
})

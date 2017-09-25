var cnavas,
    ctx;
var animation,
    lastTime = 0,
    Timesub = 0,
    loop = true;
var ctx_font = "Consolas",
    ctx_fontsize = 10,
    ctx_backColor = "#EEE";

window.onload = function () {
    // addEvent
    document.addEventListener("mousedown", MouseDownHandler, false);
    document.addEventListener("mouseup", MouseUpHandler, false);
    document.addEventListener("mousemove", MouseMoveHandler, false);
    document.addEventListener("keydown", KeyDownHandler, false);
    document.addEventListener("keyup", KeyUpHandler, false);

    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    canvas.width = 800;
    canvas.height = 600;
    
    console.log("init complete");
    // Start
    main();
}

function mainLoop(timestamp) {
    Timesub = timestamp - lastTime;
    lastTime = timestamp;
    //Clear
    ctx.fillStyle = ctx_backColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    //--------Begin-----------

    update();
    draw();

    //--------End---------------
    ctx.restore();
    let str1 = "Fps:" + 1000 / Timesub,
        str2 = "Sleep: " + Timesub,
        str3 = canvas.width + " x " + canvas.height;
    drawString(ctx, str1 + "\n" + str2 + "\n" + str3,
        1, 0,
        "rgba(0,0,0,0.5)", 10, "consolas");
    if (loop) {
        animation = window.requestAnimationFrame(mainLoop);
    } else {
        // over
    }
}


//------------------------------------------------------------------
function MouseDownHandler(e) {
    let point = getMousePoint(canvas, e.clientX, e.clientY);
    //console.log(e);
}
function MouseUpHandler(e) {
    let point = getMousePoint(canvas, e.clientX, e.clientY);
    //console.log(e);
}
function MouseMoveHandler(e) {
    let point = getMousePoint(canvas, e.clientX, e.clientY);
    //console.log(e);
}
function KeyDownHandler(e) {

    //console.log(e);
}
function KeyUpHandler(e) {

    //console.log(e);
}
function getMousePoint(obj, X, Y) {
    return { x: X - obj.offsetLeft, y: Y - obj.offsetTop };
}
//-------------------------------------------------------------------
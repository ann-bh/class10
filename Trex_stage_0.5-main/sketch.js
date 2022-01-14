var trex, trex_running;
var edges;

function preload() {
trex_running = loadAnimation ("trex1.png","trex3.png","trex4.png");
}

function setup () {
createCanvas(800,500);

trex = createSprite(50,160,20,50);
trex.addAnimation("running",trex_running);

edges= createEdgeSprites();
trex.scale = 0.5;
trex.x=50;
}
function draw () {
background ("white");

if (keyDown("space")) {
trex.velocityY = -8;
trex.collide(edges[3]);
}

trex.velocityY = trex.velocityY + 0.5;
drawSprites();
}
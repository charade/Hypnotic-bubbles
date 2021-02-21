canvas = document.querySelector('canvas');

/***********************************/
/**
 *   radius = 20
 */
let ctx = canvas.getContext('2d');
let bubbleArr = [];
class CreateBubbles {
    constructor(x, y) {
        this.dx = Math.random()+ 0.1;
        this.dy = Math.random();
        this.x = x;
        this.y = y;
        this.isGrabed = false;
        bubbleArr.push(this);
        this.draw = function () {
            ctx.beginPath();
            ctx.arc(this.x, this.y, 40, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(10,200,255,.2)'
            ctx.fillStyle ='black';
            ctx.fill()
            ctx.stroke();
            
        };
    }
    move() {
        this.x+=this.dx;
        this.y+=this.dy;
        this.checkCollision()
        console.log(parseInt(this.x), this.y);

    }

    checkCollision(){
        if(this.x + 20> canvas.width || this.x - 20 < 0)
            this.dx *= -1;
        if(this.y + 20 > canvas.height || this.y - 20 < 0)
            this.dy *= -1;    
    }

}

function randomPosition(){
    for(i = 0; i < 150; i++)
    {   let randX = Math.random()*(canvas.width - 20*2) + 20;
        let randY = Math.random()*(canvas.height-20*2)+20;
        new CreateBubbles(randX,randY)
    }    
}
randomPosition()

function animate(){
    
    ctx.fillRect(0,0,canvas.width,canvas.height)
    for(el of bubbleArr){
        // grabBubbles();
        el.draw();
        el.move();
    }
    
    ctx.fillStyle = 'rgba(97, 126, 111,0.05)';
    requestAnimationFrame(animate)
}
requestAnimationFrame(animate)

///click and grab
let isGrabed = false;
canvas.addEventListener('click',(e)=>{
    isGrabed = true;
    console.log('tiens')
})

canvas.addEventistener('mousedown',(e)=>{
    if(isGrabed){
        canvas.style.left = e.clientX
        canvas.style.top = e.clientY
    }
})

canvas.addEventLister('mouseup',(e)=>{
    isGrabed = false;
})
canvas.addEventListener('mouseleave',(e)=>e.target.classList.remove('scale-on-hover'))
   


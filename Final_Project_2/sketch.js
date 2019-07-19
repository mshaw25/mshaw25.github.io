let img;
let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let plasticbottle;
let cancircle = false;
let chinacircle = false;
let hawcircle = false;
let japancircle = false;
let pcircle = false;
let carolinacircle = false;
let islandcircle = false;

function setup(){
createCanvas(1300,805);
let col = color("green");
img = loadImage('canary.jpg');
let button = createButton("Cancary");
button.style('background-color', col);
button.style('padding: 5px');
button.style('font-size: 15px');
button.style('color: white');
button.mousePressed(cancary);
button.position(17, 210);
img1= loadImage('china-map.gif');
let button1 = createButton("China");
button1.style('background-color', col);
button1.style('padding: 5px');
button1.style('font-size: 15px');
button1.style('color: white');
button1.mousePressed(china);
button1.position(17, 440);
img2= loadImage('hawaii.Map.gif');
let button2 = createButton("Hawaii");
button2.style('background-color', col);
button2.style('padding: 5px');
button2.style('font-size: 15px');
button2.style('color: white');
button2.mousePressed(hawaii);
button2.position(540, 210);
img3= loadImage('japan-map.jpg');
let button3 = createButton("Japan");
button3.style('background-color', col);
button3.style('padding: 5px');
button3.style('font-size: 15px');
button3.style('color: white');
button3.mousePressed(japan);
button3.position(540, 440);
img4= loadImage('palau-map-.jpg');
let button4 = createButton("Palau");
button4.style('background-color', col);
button4.style('padding: 5px');
button4.style('font-size: 15px');
button4.style('color: white');
button4.mousePressed(palau);
button4.position(1150, 608);
img5= loadImage('south.carolina.nwestern.atlantic.jpg');
let button5 = createButton("South Carolina");
button5.style('background-color', col);
button5.style('padding: 5px');
button5.style('font-size: 15px');
button5.style('color: white');
button5.mousePressed(scarolina);
button5.position(540, 695);
img6= loadImage('virgin-islands-map.jpg');
let button6 = createButton("Islands");
button6.style('background-color', col);
button6.style('padding: 5px');
button6.style('font-size: 15px');
button6.style('color: white');
button6.mousePressed(islands);
button6.position(17, 695);

imgbottle= loadImage('plasticbottle.png');
}

function draw(){
let r = random(0,30);
let t = random(4,7);
let c = color (255, 0, 0); //red
let w = color (255, 255, 255); //white
fill(c);
noStroke();

image(img, 6, height / 22, img.width / 2.1, img.height / 2); //Cancary
image(img1, 6, height / 3, img1.width / 1.9, img1.height / 3.9); //China
image(img2, 520, height / 22, img2.width / 1, img2.height / 1.5); //Hawaii
image(img3, 520, height / 3, img3.width / 2.9, img3.height / 6); //Japan
image(img4, 1000, height / 20, img4.width / 2.4, img4.height / 2.5); //Palau
image(img5, 520, height / 1.54, img5.width / 3, img5.height / 3); //SouthCarolina
image(img6, 6, height / 1.54, img6.width / 2.5, img6.height / 3.5); //Island


/*-------------------------------------------------------Legends-----------------------------------------------------------*/
fill(0, 0, 0);
rect(1020,  500, 250 , 200);
textSize(32);
fill(w);
text("Legends", 1090, 510, 80, 80);
fill(w);
textSize(18);
text("=", 1100, 610, 80, 80);
text("=", 1100, 570, 80, 80);
text("=", 1100, 655, 80, 80);
textSize(14)
text(" somewhat stable", 1124, 613, 90, 90);
text("extreme", 1124, 573, 90, 90);
text("plastic", 1124, 659, 90, 90);
fill(c)
ellipse(1080, 580, 30, 30);
fill(243, 255, 18);
ellipse(1080, 620, 30, 30);
image(imgbottle, 1045, 640, 50, 50);


/*-------------------------The amount of circles that enter the data + locations of x, x, size, size-------------------------*/
if (cancircle){
fill(c)
ellipse(400, 150, r, r); //Cancary Circle
fill(243, 255, 18);
ellipse(60, 150, t, t); 
ellipse(70, 140, t, t);
ellipse(55, 135, t, t);
ellipse(400, 170, t, t);
fill(c);
ellipse(405, 120, r, r);
}
else{image(img, 6, height / 22, img.width / 2.1, img.height / 2); //Cancary

}


if (chinacircle){
ellipse(400, 450, r, r); //China Circle
fill(243, 255, 18);
ellipse(400, 460, t, t);
ellipse(380, 455, t, t);
ellipse(375, 464, t, t);
ellipse(373, 448, t, t);
ellipse(375, 453, t, t);
ellipse(371, 450, t, t);
ellipse(375, 459, t, t);
ellipse(370, 459, t, t);
fill(c)
ellipse(390, 353, r, t); 
fill(243, 255, 18);
ellipse(412, 370, t, t);
ellipse(412, 375, t, t);
ellipse(414, 380, t, t);
ellipse(420, 373, t, t);

image(imgbottle, 440, 400, 35, 35); //China Plastic
image(imgbottle, 440, 410, 25, 25);
image(imgbottle, 445, 360, 25, 25);
image(imgbottle, 450, 370, 25, 25);
image(imgbottle, 440, 380, 35, 35);
image(imgbottle, 420, 380, 25, 25);
}
else{image(img1, 6, height / 3, img1.width / 1.9, img1.height / 3.9); //China
}

if (hawcircle){
fill(c);
ellipse(705, 65, r, t); //Hawaii Circle
fill(243, 255, 18);
ellipse(700, 52, t, t);
ellipse(700, 59, t, t);
ellipse(650, 75, t, t);
fill(c);
ellipse(600, 65, r, t); 
fill(243, 255, 18);
ellipse(760, 100, t, t);
ellipse(755, 95, t, t);
ellipse(755, 85, t, t);
ellipse(750, 99, t, t);
ellipse(745, 95, t, t);
ellipse(745, 90, t, t);
ellipse(760, 105, t ,t);
ellipse(765, 105, t, t);
}
else{image(img2, 520, height / 22, img2.width / 1, img2.height / 1.5); //Hawaii
}

if (japancircle){
fill(c);
ellipse(780, 380, r, r); //Japan Circle
fill(243, 255, 18);
ellipse(840, 380, t, t);
ellipse(845, 372, t, t);
ellipse(850, 365, t, t);
ellipse(858, 365, t, t);
ellipse(858, 355, t, t);
fill(c);
ellipse(730, 380, r, r);
fill(243, 255, 18); 
ellipse(720, 340, t, t);
}
else{image(img3, 520, height / 3, img3.width / 2.9, img3.height / 6); //Japan

}

if (pcircle){
ellipse(1100, 400, t, t); //Palau Circle
ellipse(1100, 410, t, t);
ellipse(1095, 405, t, t);
ellipse(1090, 400, t, t);
ellipse(1090, 380, t, t);
ellipse(1085, 400, t, t);
ellipse(1110, 405, t, t);
ellipse(1100, 415, t, t);
ellipse(1105, 407, t, t);
fill(c)
ellipse(1200, 273, r, r); 
ellipse(1150, 343, r, r); 
fill(243, 255, 18);
ellipse(1154, 300, t, t); 
ellipse(1260, 310, t, t);
ellipse(1254, 295, t, t);
ellipse(1250, 305, t, t);
ellipse(1250, 295, t, t);
ellipse(1258, 295, t, t);
}
else{image(img4, 1000, height / 20, img4.width / 2.4, img4.height / 2.5); //Palau

}

if (carolinacircle){
fill(c);
ellipse(780, 620, r, r); //South Carolina Circle
fill(243, 255, 18);
ellipse(780, 605, t, t); 
ellipse(600, 655, t, t); 
ellipse(605, 655, t, t);
ellipse(595, 657, t, t);
ellipse(605, 660, t, t);
ellipse(610, 655, t, t);
ellipse(610, 662, t, t);
ellipse(615, 650, t, t);
ellipse(618, 658, t, t);
ellipse(625, 650, t, t);
ellipse(640, 665, t, t);
ellipse(640, 660, t, t);
ellipse(638, 660, t, t);
ellipse(632, 670, t, t);
ellipse(645, 658, t, t);
ellipse(630, 656, t, t);
ellipse(630, 659, t, t);
ellipse(634, 653, t, t);
fill(c);
ellipse(656, 666, r, r);
fill(243, 255, 18);
ellipse(800, 650, t, t);
ellipse(800, 655, t, t);
ellipse(795, 645, t, t);
ellipse(780, 648, t, t);

image(imgbottle, 860, 640, 25, 25);//South Carolina Plastic
image(imgbottle, 860, 655, 35, 35);
image(imgbottle, 860, 660, 25, 25);
image(imgbottle, 867, 650, 25, 25);
image(imgbottle, 890, 635, 35, 35);
image(imgbottle, 890, 650, 25, 25);
image(imgbottle, 890, 665, 35, 35);
image(imgbottle, 910, 650, 25, 25);
image(imgbottle, 910, 640, 25, 25);
image(imgbottle, 910, 658, 35, 35);
image(imgbottle, 935, 660, 35, 35);
image(imgbottle, 930, 640, 35, 35);
image(imgbottle, 930, 625, 35, 35);
image(imgbottle, 925, 615, 35, 35);
image(imgbottle, 905, 610, 35, 35);
image(imgbottle, 880, 580, 35, 35);
image(imgbottle, 880, 610, 35, 35);
}
else{image(img5, 520, height / 1.54, img5.width / 3, img5.height / 3); //SouthCarolina
}


if (islandcircle){
fill(243, 255, 18);
ellipse(230, 625, t, t); //Island Circle
ellipse(235, 630, t, t); 
ellipse(240, 635, t, t);
ellipse(236, 640, t, t);
ellipse(130, 700, t, t);
ellipse(130, 705, t, t);
ellipse(130, 695, t, t);
ellipse(125, 695, t, t);
ellipse(127, 700, t, t);
ellipse(120, 700, t, t);
ellipse(120, 700, t, t);
ellipse(117, 695, t, t);
ellipse(300, 700, t, t);
ellipse(120, 680, t, t);
ellipse(117, 600, t, t);
ellipse(125, 555, t, t);
ellipse(135, 550, t, t);
ellipse(217, 567, t, t);
ellipse(230, 555, t, t);
ellipse(240, 570, t, t);
ellipse(217, 570, t, t);
ellipse(200, 700, t, t);
ellipse(130, 600, t, t);
ellipse(350, 600, t, t);
ellipse(350, 605, t, t);
ellipse(350, 595, t, t);
ellipse(360, 610, t, t);
ellipse(355, 600, t, t);
ellipse(370, 605, t, t);
ellipse(370, 600, t, t);
ellipse(375, 550, t, t);
ellipse(370, 625, t, t);
}
else{image(img6, 6, height / 1.54, img6.width / 2.5, img6.height / 3.5); //Island

}

/*----------------------------------Button clicking action when is pressed--------------------------------------*/

}

function cancary(){
cancircle = !cancircle;
}

function china(){
chinacircle = !chinacircle;
}

function hawaii(){
hawcircle = !hawcircle;
}

function japan(){
japancircle = !japancircle;
}

function palau(){
pcircle = !pcircle;
}

function scarolina(){
carolinacircle = !carolinacircle;
}

function islands(){
islandcircle = !islandcircle;
}
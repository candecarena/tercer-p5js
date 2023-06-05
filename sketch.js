function setup() {
    // crear el lienzo
    createCanvas(400, 400);
  }
  
  //declaro variables
  var r; 
  var despierto = false;
  var mouseIsPressed_antes = false; 
  var theta1 = 0;
  var mitadAncho, mitadAlto;
  var anchoPincel = 5;
  var radioMayor = 60;
  var x = 0;
  var velocidad = 3;
  var direccion = -1;
  var anguloRotacion = 287;
  
  
  function draw(){
    background(0);
    
    //x += velocidad * direccionDos; // Cambio de direccion
    x += velocidad; // Aumenta el valor de x
  
    
  {
    push(); //serie uno
    
  //transformaciones 
    translate(35 + x, 0);
    
    fill(230, 200, 240);
    ellipse(120, 120, 120, 120);
  
    fill(200, 120, 200);
    ellipse(120, 120, 90, 90);
  
    fill(60, 50, 80);
    ellipse(120, 120, 50, 50);
    
    noFill();
    strokeWeight(3);
    stroke(0);
    
    ellipse(
      120,
      120,
      120 + 5 * sin(((despierto + 1) * frameCount) / 6),
      120 + 5 * sin(((despierto + 1) * frameCount) / 6)
    );
    ellipse(
      120,
      120,
      50 + 5 * sin(((despierto + 1) * frameCount) / 6),
      50 + 5 * sin(((despierto + 1) * frameCount) / 6)
    );
  
    pop();
  
    
    push(); //serie dos
    translate(260 - x, 0);
    
    fill(60, 50, 80);
    ellipse(0, 120, 120, 120);
  
    fill(200, 120, 200);
    ellipse(0, 120, 90, 90);
  
    fill(230, 200, 240);
    ellipse(0, 120, 50, 50);
    
    noFill();
    strokeWeight(3);
    stroke(0);
    
    ellipse(
      0,
      120,
      120 + 5 * sin(((1) * frameCount) / 6),
      120 + 5 * sin(((1) * frameCount) / 6)
    );
    
    ellipse(
      0,
      120,
      50 + 5 * sin(frameCount / 6),
      50 + 5 * sin(frameCount / 6)
    );
  
    pop();
    
    push(); //serie tres
    
  //transformaciones 
    translate(35 + x, 0);
    
    
    fill(30, 60, 90);
    ellipse(120, 280, 120, 120);
  
    fill(50, 80, 200);
    ellipse(120, 280, 90, 90);
  
    fill(160, 200, 200);
    ellipse(120, 280, 50, 50);
    
    noFill();
    strokeWeight(3);
    stroke(0);
    
    ellipse(
      120,
      280,
      120 + 5 * sin(frameCount / 6),
      120 + 5 * sin(frameCount / 6)
    );
    
    ellipse(
      120,
      280,
      50+ 5 * sin(frameCount / 6),
      50+ 5 * sin(frameCount / 6)
    );
    
    pop();
    
    push(); //serie cuatro
    
    //transformaciones
    translate(2 - x, 0);
    
    fill(160, 200, 200);
    ellipse(280, 280, 120, 120);
  
    fill(50, 80, 200);
    ellipse(280, 280, 90, 90);
  
    fill(30, 60, 90);
    ellipse(280, 280, 50, 50);
  
    noFill();
    strokeWeight(3);
    stroke(0);
    
    ellipse(
      280,
      280,
      120 + 5 * sin(frameCount / 6),
      120 + 5 * sin(frameCount / 6)
    );
    ellipse(
      280,
      280,
      50 + 5 * sin(frameCount / 6),
      50 + 5 * sin(frameCount / 6)
    );
    pop();
    
    push();
    
    //bordes
    fill(160, 200, 200);
    rect(1, 20, 40, 400);
  
    fill(230, 200, 240);
    rect(1, 1, 400, 20);
  
    fill(60, 50, 80);
    rect(360, 1, 40, 400);
  
    fill(30, 60, 90);
    rect(42, 380, 400, 300);
    
    pop();
    
     if (x > width -280) {
      x = - radioMayor; // Mueve la figura al borde izquierdo
    }
    
  }
     //mouse presionado
    if (mouseIsPressed) {
      if (mouseButton == LEFT) {
        stroke(230, 200, 240);
      } else if (mouseButton == RIGHT) {
        stroke(160, 200, 200);
      }
      strokeWeight(anchoPincel);
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
    stroke(0);
    strokeWeight(2);
    
    //Circulos palpitantes
    noFill();
    strokeWeight(3);
    
     //PARA QUE AL APRETAR CLICK DERECHO NO SE ABRA EL MENU
    document.oncontextmenu = function () {
      return false;
    };
    
  }
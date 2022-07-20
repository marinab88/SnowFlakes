//Settings
const containerW = 1330;
const containerH = 600;


// let f1 = new Flake(1, randCoord(0, containerW), 0, 1);
// f1.render(scene);
// f1.fall(containerW, containerH);

let n = 1;

// initial wave
setInterval( () => {
  if (n < 100) {
    addAnotherFlake();
  }
}, 10);



function addAnotherFlake () {
  n++;
  let scale = randFloat(1.7);
  let f = new Flake(n, randCoord(0, containerW), 0, scale, scale);
  f.render(scene);
  f.fall(containerW, containerH, addAnotherFlake);
}

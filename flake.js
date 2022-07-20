// OOP: Classes -> Object / constructor

// ! Component Lifecycle
// ! Prototyping
// ! Detached (headless) Approach

/*    

   Flake {}                    div {} DOM
[INNER LOGIC   ----------->   PRESENTATION LOGIC]

*/

class Flake { //PascalCase, camelCase

  //properies: top, left, size, speed(x, y), color, ...
  //methods: fall(), move(), fade(), ...

  // *  APPEAR
  constructor(n, left, top, speed, size) {
    this.n = n;
    this.left = left;
    this.top = top;
    this.speed = speed;
    this.size = size;

    console.info(`Flake ${this.n}: APPEARD`);
    // HW1: make it work:
    // left, size (transform: scale())
   }

  // falling phase
  fall(cw, ch, cb) {
    this.timerId = setInterval(() => {
      this.top += this.speed;
      console.log(`Flake ${this.n}: FALL`, this);

      //update the rendered div
      this.update();

      if (this.top >= ch) {
        this.disappear(cb);
      }
    }, 20)
  }


  // Disappear
  disappear(cb) {
    clearInterval(this.timerId)
    console.log(`FLAKE ${this.n}: DISAPPEARD`, this);
    window[`flake__${this.n}`].style.display = "none";
    cb();
  }

  update() {
    // Search the div of the current
    window[`flake__${this.n}`].style.top = `${this.top}px`;
  }


  // Presentation
  render(root) {
    root.innerHTML +=`
      <div class="flake" id="flake__${this.n}"
           style="left: ${this.left}px;
                  top: ${this.top}px;
                  transform: scale(${this.size});"
                  >
        ${this.n}
      </div>`;
  }

}




// let p = new Person('John')
//          \
//           \-------> Object {} (VM)
//                         \
//                          \------> init basics
//                                       \
//                                        \-----> + label 'Person'
//                                                      \
//                                                       \------> (this) constructor()
//                                                                        v
//                                                                        v  <<< custom ini
//                                                                        v
//                           <----------------------------------------  Object


/*  
    Flake LIFECYCLE

     * APPEAR
     |
     |

     falling phase

     |
     |
     * DISAPPEAR  

*/
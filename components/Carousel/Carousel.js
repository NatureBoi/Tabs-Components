class Carousel {
  constructor(element) {
    this.element = element;
    this.images = [...this.element.querySelectorAll("img")];
    this.btn_next = this.element.querySelector("#next-btn");
    this.prev_next = this.element.querySelector("#prev-btn");

    this.counter = 0;

    this.btn_next.addEventListener("click", this.next.bind(this));
    this.prev_next.addEventListener("click", this.prev.bind(this));

    this.tabs_container = document.createElement("div");
    this.tabs_container.setAttribute("class", "image-position");
    for (let i = 0; i < this.images.length; i++) {
      this.tabs_container.innerHTML += `<h2 data-tab=${i}>__</h2>`;
    }
    this.element.prepend(this.tabs_container);

    this.tabs_index = [
      ...document.querySelector(".image-position").querySelectorAll("h2")
    ];

    this.tabs_index.map(tab => (tab = new TabClass(tab)));
    this.tabs_index.forEach(tab =>
      tab.addEventListener("click", this.test.bind(this))
    );
  }
  next() {
    this.counter++;
    if (this.counter > this.images.length - 1) {
      this.counter = 0;
    }
    this.select();
  }
  prev() {
    this.counter--;
    if (this.counter < 0) {
      this.counter = this.images.length - 1;
    }
    this.select();
  }
  select() {
    this.images.forEach(image => (image.style.display = "none"));
    this.images[this.counter].style.display = "block";
  }
  test() {
    this.images.forEach(image => (image.style.display = "none"));
    // this.images[this.counter].style.display = "block";
    this.select();
    this.tabs_index[this.counter].dataset.tab;
  }
}

class TabClass {
  constructor(element) {
    this.element = element;
    this.datavalue = this.element.dataset.tab;
  }
}

let carousel = document.querySelector(".carousel");
carousel = new Carousel(carousel);

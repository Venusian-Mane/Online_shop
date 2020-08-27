// This is the Javascript file that will be linked to the online-store.html file for functionality//


function loaded() {
	if (localStorage.getItem("hasCodeRunBefore") === null) {
        localStorage.setItem("hasCodeRunBefore", true);
    } else {
        shoppingCart = JSON.parse(localStorage.getItem("bill"));
        total = JSON.parse(localStorage.getItem("total"));
        console.log(total);
        console.log(shoppingCart);
    };
}
// above is a funnction that checks if the page has been open before and parses necessary data if it has.

function Device(name, id, image, price) {
    this.name = name;
    this.id = id;
    this.image = image;
    this.price = price;
}
// above is the class i created for the devices

let Samsung = new Device("Samsung Note 10 plus", "p1", "images/phones/samsung-galaxy-note10-plus-.jpg", 14000);
let Apple = new Device("iPhone 11", "p2", "images/phones/apple-iphone-11.jpg", 18500);
let Huawei = new Device("Huawei P30 Pro", "p3", "images/phones/huawei-p30-pro.jpg", 13500);
let Hp = new Device("Hp Spectre X360", "l1", "images/laptops/hp-spectre-x360.jpg", 30000);
let Macbook = new Device("Apple Macbook Pro", "l2", "images/laptops/Macbook.jpg", 34000);
let SamsungTab = new Device("Samsung Galaxy Tab 8 LTE", "t1", "images/tablets/samsung-tab8.jpg", 3800);
let IPad = new Device("Apple iPad Pro 11", "t2", "images/tablets/ipad-pro11.jpg", 17500);
let Watch = new Device("Apple Watch Series 3", "a1", "images/accessories/apple-watch.jpg", 8500);
let Headphones = new Device("Beats Studio3", "a2", "images/accessories/beats-headphones.jpg", 7000);
let Earphones = new Device("Huawei Freebuds", "a3", "images/accessories/freebuds.jpg", 3000);
// above ive created all the objects being sold with their prices and other information
let shoppingCart = [];
total = 0;
// i used a list to hold all my objects so i could later stingify them. the total price is also defined here for all the prices
function bought1() {
    shoppingCart.push(Samsung);
    total = total+Samsung.price;
    alert("This item has been added to the bill. Your total is now "+total);
}
function bought2() {
    shoppingCart.push(Apple);
    total = total+Apple.price;
    alert("This item has been added to the bill. Your total is now "+total);
}

function bought3() {
    shoppingCart.push(Huawei);
    total = total+Apple.price;
    alert("This item has been added to the bill. Your total is now "+total);
}

function bought4() {
    shoppingCart.push(Hp);
    total = total+Apple.price;
    alert("This item has been added to the bill. Your total is now "+total);
}

function bought5() {
    shoppingCart.push(Macbook);
    total = total+Macbook.price;
    alert("This item has been added to the bill. Your total is now "+total);
}

function bought6() {
    shoppingCart.push(SamsungTab);
    total = total+SamsungTab.price;
    alert("This item has been added to the bill. Your total is now "+total);
}

function bought7() {
    shoppingCart.push(IPad);
    total = total+IPad.price;
    alert("This item has been added to the bill. Your total is now "+total);
}

function bought8() {
    shoppingCart.push(Watch);
    total = total+Watch.price;
    alert("This item has been added to the bill. Your total is now "+total);
}

function bought9() {
    shoppingCart.push(Headphones);
    total = total+Headphones.price;
    alert("This item has been added to the bill. Your total is now "+total);
}

function bought10() {
    shoppingCart.push(Earphones);
    total = total+Earphones.price;
    alert("This item has been added to the bill. Your total is now "+total);
}
// all of the functions above are inefficiently made functions to add a particular object into the shopping cart.
// I really couldnt find a way to make these any more efficient.

function saveData() {
	console.log(total);
    localStorage.setItem("bill", JSON.stringify(shoppingCart));
    localStorage.setItem("total",JSON.stringify(total));
    console.log(localStorage);
    console.log(shoppingCart);
}
// the function saveData is used to stringify shopping cart objects and store them inn local storage.
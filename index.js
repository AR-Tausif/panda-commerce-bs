// যতগুলা ইলিমেন্টে h2 ট্যাগ আছে সেগুলাকে সিলেক্ট করে তার লেখাগুলার কালার lightblue করেদিতে পারো কিনা। 
function headingH2Selection() {
    let heading2 = document.getElementsByTagName('h2');
    for (const heading of heading2) {
        heading.style.color = 'blue';
    }
}
headingH2Selection();

// ওই ওয়েবসাইট এ backpack আইডি দিয়ে একটা সেকশন আছে। সেই সেকশনের ব্যাকগ্রাউন্ড কালার tomato করে দিতে পারো কিনা। 
function backPack() {
    const backpack = document.getElementById('backpack');
    return backpack.style.backgroundColor = 'tomato';
};
backPack();

// card ক্লাস যতগুলা জায়গায় ইউজ করা হয়েছে সবগুলা কার্ড এর বর্ডার রেডিয়াস ৩০px করে দিতে পারো কিনা 
function card() {
    let card = document.querySelectorAll(".card");
    for (const cards of card) {
        cards.style.borderRadius = '32px';
    }
}
card();

// কোন একটা ফাংশন লিখো। সেটার ভিতরে কনসোল লগ হবে। এবং সেই ফাংশন টা ক্লিক হ্যান্ডলার হিসেবে কোন একটা বাটনে যোগ করো
function loggings() {
    const button = document.getElementById('formBtn').addEventListener('click', loging)

    function loging(e) {
        e.preventDefault();
        console.log("hello world");
    }
}
loggings()

// এইবার নতুন করে সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা buy now বাটনে চাপ দিলে card টা ওয়েবসাইট থেকে রিমুভ হয়ে যায়। একটু চিন্তা করে করার চেষ্টা করো। 
function pandaBuyNowBtn() {
    const buyNowBtn = document.querySelectorAll('.buy-now-btn-func');
    for (const buyNow of buyNowBtn) {
        buyNow.addEventListener('click', function() {
                let parrentDelete = buyNow.parentElement.parentElement.parentElement;
                parrentDelete.remove();
            })
            // console.log(buyNow.parentElement.parentElement.parentElement);
    }
}
pandaBuyNowBtn()

// একদম নিচে একটা LET'S STAY IN TOUCH নামে একটা জিনিস আছে। সেখানে তুমি submit বাটনটা disable করে ফেলবে। তারপর কেউ যদি উপরে input ফিল্ডে যদি একজাক্টলি email শব্দটা লিখে। তাহলে বাটন একটিভ হবে। আর যদি অন্য কিছু লিখে তাহলে বাটনটা একটিভ হবে না। 
function stayInTouch() {
    let formBtn = document.getElementById('formBtn')
    let inputField = document.getElementById('exampleInputEmail1').addEventListener('keyup', function enabling(event) {
        let valueText = event.target.value;
        if (valueText === '') {
            formBtn.setAttribute('disabled');
        } else {
            formBtn.removeAttribute('disabled');
        }
    });
}
stayInTouch();


// (অপশনাল) একটা মজার চ্যালেঞ্জ। কোন একটা ইমেজ এর উপরে mouseenter করলে সেই ইমেজটা চেইঞ্জ হয়ে যাবে। একটু গুগলে সার্চ দিয়ে দেখো। জিনিসটা কিভাবে করা যেতে পারে। 


// (অপশনাল) নিচের যে LET'S STAY IN TOUCH আছে সেখানে কোন খালি জায়গায় ডাবল ক্লিক করলে ঐটার পিছনের কালার চেইঞ্জ হয়ে যাবে।
let subscribe = document.getElementById('subscribe').addEventListener('click', function() {
    let rgbColor = generateRGBColor();
    this.style.backgroundColor = rgbColor;
});
// Default function for work
function generateRGBColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `#${red}${green}${blue}`;
}


// we can fixing a bug of tis
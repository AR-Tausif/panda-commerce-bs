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
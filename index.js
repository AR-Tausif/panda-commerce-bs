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
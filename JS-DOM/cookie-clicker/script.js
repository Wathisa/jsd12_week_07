// ตัวแปรเก็บสถานะเกม
let score = 0;
let clickPower = 1;
let autoRate = 0;

// ตั้งราคาเริ่มต้นทั้ง 5 ไอเทม
let cost1 = 20;
let cost2 = 65;
let cost3 = 200;
let cost4 = 800;
let cost5 = 2500;

const scoreDisplay = document.getElementById("scoreDisplay");
const rateDisplay = document.getElementById("rateDisplay");
const clickPowerDisplay = document.getElementById("clickPowerDisplay");
const clickButton = document.getElementById("clickButton");

// อัปเดตหน้าจอทั้งหมด
function updateUI() {
  scoreDisplay.innerText = score;
  rateDisplay.innerText = autoRate;
  clickPowerDisplay.innerText = `${clickPower} หน่วย / คลิก`;

  // อัปเดตราคาบนปุ่ม
  document.getElementById("cost1").innerText = cost1;
  document.getElementById("cost2").innerText = cost2;
  document.getElementById("cost3").innerText = cost3;
  document.getElementById("cost4").innerText = cost4;
  document.getElementById("cost5").innerText = cost5;

  // เช็คเงื่อนไขล็อคปุ่ม
  document.getElementById("buyUpgrade1").disabled = score < cost1;
  document.getElementById("buyUpgrade2").disabled = score < cost2;
  document.getElementById("buyUpgrade3").disabled = score < cost3;
  document.getElementById("buyUpgrade4").disabled = score < cost4;
  document.getElementById("buyUpgrade5").disabled = score < cost5;
}

// ระบบคลิกคทาเซเลอร์มูนนน
clickButton.addEventListener("click", () => {
  score += clickPower;
  updateUI();
});

// อัปเกรด1 สารเคมี X
document.getElementById("buyUpgrade1").addEventListener("click", () => {
  if (score >= cost1) {
    score -= cost1;
    clickPower += 1;
    cost1 = Math.floor(cost1 * 2.5);
    updateUI();
  }
});

// อัปเกรด2: คฑาแห่งดวงดาว
document.getElementById("buyUpgrade2").addEventListener("click", () => {
  if (score >= cost2) {
    score -= cost2;
    autoRate += 1;
    cost2 = Math.floor(cost2 * 1.5);
    updateUI();
  }
});

// อัปเกรด3 แมวเหมียวลูน่า
document.getElementById("buyUpgrade3").addEventListener("click", () => {
  if (score >= cost3) {
    score -= cost3;
    autoRate += 5;
    cost3 = Math.floor(cost3 * 1.5);
    updateUI();
  }
});

// อัปเกรด4 โคลว์การ์ด
document.getElementById("buyUpgrade4").addEventListener("click", () => {
  if (score >= cost4) {
    score -= cost4;
    autoRate += 20;
    cost4 = Math.floor(cost4 * 1.5);
    updateUI();
  }
});

// อัปเกรด5 พลังมิตรภาพทะลุมิติ
document.getElementById("buyUpgrade5").addEventListener("click", () => {
  if (score >= cost5) {
    score -= cost5;
    autoRate += 100;
    cost5 = Math.floor(cost5 * 1.5);
    updateUI();
  }
});

// ระบบอัตโนมัติ ทำงานทุก 1 วินาที
setInterval(() => {
  if (autoRate > 0) {
    score += autoRate;
    updateUI();
  }
}, 1000);

// เรียกใช้ฟังก์ชันครั้งแรกตอนเริ่มเกม
updateUI();

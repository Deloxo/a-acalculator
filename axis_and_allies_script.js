var values = [24, 42, 30, 30, 52];
var incomes = [24, 42, 30, 30, 52];
var purchases = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var prices = [3, 4, 5, 10, 15, 5, 15, 24, 16, 12, 8, 8];
var turnInfo = [0, 0];

document.getElementsByTagName("BUTTON")[0].onclick = function() {purchases[0] += 1;values[turnInfo[1]] -= prices[0];unit()};
document.getElementsByTagName("BUTTON")[1].onclick = function() {purchases[0] -= 1;values[turnInfo[1]] += prices[0];unit()};
document.getElementsByTagName("BUTTON")[2].onclick = function() {purchases[1] += 1;values[turnInfo[1]] -= prices[1];unit()};
document.getElementsByTagName("BUTTON")[3].onclick = function() {purchases[1] -= 1;values[turnInfo[1]] += prices[1];unit()};
document.getElementsByTagName("BUTTON")[4].onclick = function() {purchases[2] += 1;values[turnInfo[1]] -= prices[2];unit()};
document.getElementsByTagName("BUTTON")[5].onclick = function() {purchases[2] -= 1;values[turnInfo[1]] += prices[2];unit()};
document.getElementsByTagName("BUTTON")[6].onclick = function() {purchases[3] += 1;values[turnInfo[1]] -= prices[3];unit()};
document.getElementsByTagName("BUTTON")[7].onclick = function() {purchases[3] -= 1;values[turnInfo[1]] += prices[3];unit()};
document.getElementsByTagName("BUTTON")[8].onclick = function() {purchases[4] += 1;values[turnInfo[1]] -= prices[4];unit()};
document.getElementsByTagName("BUTTON")[9].onclick = function() {purchases[4] -= 1;values[turnInfo[1]] += prices[4];unit()};
document.getElementsByTagName("BUTTON")[10].onclick = function() {purchases[5] += 1;values[turnInfo[1]] -= prices[5];unit()};
document.getElementsByTagName("BUTTON")[11].onclick = function() {purchases[5] -= 1;values[turnInfo[1]] += prices[5];unit()};
document.getElementsByTagName("BUTTON")[12].onclick = function() {purchases[6] += 1;values[turnInfo[1]] -= prices[6];unit()};
document.getElementsByTagName("BUTTON")[13].onclick = function() {purchases[6] -= 1;values[turnInfo[1]] += prices[6];unit()};
document.getElementsByTagName("BUTTON")[14].onclick = function() {purchases[7] += 1;values[turnInfo[1]] -= prices[7];unit()};
document.getElementsByTagName("BUTTON")[15].onclick = function() {purchases[7] -= 1;values[turnInfo[1]] += prices[7];unit()};
document.getElementsByTagName("BUTTON")[16].onclick = function() {purchases[8] += 1;values[turnInfo[1]] -= prices[8];unit()};
document.getElementsByTagName("BUTTON")[17].onclick = function() {purchases[8] -= 1;values[turnInfo[1]] += prices[8];unit()};
document.getElementsByTagName("BUTTON")[18].onclick = function() {purchases[9] += 1;values[turnInfo[1]] -= prices[9];unit()};
document.getElementsByTagName("BUTTON")[19].onclick = function() {purchases[9] -= 1;values[turnInfo[1]] += prices[9];unit()};
document.getElementsByTagName("BUTTON")[20].onclick = function() {purchases[10] += 1;values[turnInfo[1]] -= prices[10];unit()};
document.getElementsByTagName("BUTTON")[21].onclick = function() {purchases[10] -= 1;values[turnInfo[1]] += prices[10];unit()};
document.getElementsByTagName("BUTTON")[22].onclick = function() {purchases[11] += 1;values[turnInfo[1]] -= prices[11];unit()};
document.getElementsByTagName("BUTTON")[23].onclick = function() {purchases[11] -= 1;values[turnInfo[1]] += prices[11];unit()};

document.getElementsByTagName("BUTTON")[25].onclick = function() {incomes[0]+=1;updateIncomes()};
document.getElementsByTagName("BUTTON")[26].onclick = function() {incomes[0]-=1;updateIncomes()};
document.getElementsByTagName("BUTTON")[27].onclick = function() {incomes[1]+=1;updateIncomes()};
document.getElementsByTagName("BUTTON")[28].onclick = function() {incomes[1]-=1;updateIncomes()};
document.getElementsByTagName("BUTTON")[29].onclick = function() {incomes[2]+=1;updateIncomes()};
document.getElementsByTagName("BUTTON")[30].onclick = function() {incomes[2]-=1;updateIncomes()};
document.getElementsByTagName("BUTTON")[31].onclick = function() {incomes[3]+=1;updateIncomes()};
document.getElementsByTagName("BUTTON")[32].onclick = function() {incomes[3]-=1;updateIncomes()};
document.getElementsByTagName("BUTTON")[33].onclick = function() {incomes[4]+=1;updateIncomes()};
document.getElementsByTagName("BUTTON")[34].onclick = function() {incomes[4]-=1;updateIncomes()};

function updateMoney () {
if (turnInfo[1] == 0) {
document.getElementById("scores").innerHTML = "Soviet Russia: " + values[0];
};
if (turnInfo[1] == 1) {
document.getElementById("scores").innerHTML = "Germany: " + values[1];
};
if (turnInfo[1] == 2) {
document.getElementById("scores").innerHTML = "United Kingdom: " + values[2];
};
if (turnInfo[1] == 3) {
document.getElementById("scores").innerHTML = "Japan: " + values[3];
};
if (turnInfo[1] == 4) {
document.getElementById("scores").innerHTML = "America: " + values[4];
};
};

function updateIncomes() {
document.getElementById("sovietIncome").innerHTML = "Soviets (" + incomes[0] + " IPCs/t)";
document.getElementById("naziIncome").innerHTML = "Germans (" + incomes[1] + " IPCs/t)";
document.getElementById("britishIncome").innerHTML = "British (" + incomes[2] + " IPCs/t)";
document.getElementById("japanIncome").innerHTML = "Japanese (" + incomes[3] + " IPCs/t)";
document.getElementById("americanIncome").innerHTML = "Americans (" + incomes[4] + " IPCs/t)";
}
updateIncomes();

function unit() {
  document.getElementById("u1quantity").innerHTML = purchases[0];
  document.getElementById("u2quantity").innerHTML = purchases[1];
  document.getElementById("u3quantity").innerHTML = purchases[2];
  document.getElementById("u4quantity").innerHTML = purchases[3];
  document.getElementById("u5quantity").innerHTML = purchases[4];
  document.getElementById("u6quantity").innerHTML = purchases[5];
  document.getElementById("u7quantity").innerHTML = purchases[6];
  document.getElementById("u8quantity").innerHTML = purchases[7];
  document.getElementById("u9quantity").innerHTML = purchases[8];
  document.getElementById("u10quantity").innerHTML = purchases[9];
  document.getElementById("u11quantity").innerHTML = purchases[10];
  document.getElementById("u12quantity").innerHTML = purchases[11];
  updateMoney();
}
updateMoney();
function nextPlayer() {
  values[turnInfo[1]] += incomes[turnInfo[1]];
  turnInfo[1] += 1;
  if (turnInfo[1] > 4) {
    turnInfo[1] = 0;
  }
  purchases = [0,0,0,0,0,0,0,0,0,0,0,0];
  updateMoney();
  unit();
}

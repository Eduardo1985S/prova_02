let hp = 500;
let ataques = [130, 50, 20, 70, 60, 240];

for (let i = 0; i < ataques.length; i++) {
    hp -= ataques[i];
    if (hp <= 0) {
        hp = 0;
        break;
    }
}

console.log("Exercício 10");
if (hp > 0) {
    console.log(`O castelo resistiu com ${hp} pontos!`);
} else {
    console.log("O castelo foi destruido!");
}
console.log("-----------------------------------");
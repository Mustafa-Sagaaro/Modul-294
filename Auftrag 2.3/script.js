const lebenslauf = { Name: "Mustafa Sagaaro", alter: "16", job: "Informatiker (Applikationsentwickler)" };

const Arbeit = lebenslauf.job;

const Lebensstatus = { status: "Ledig" }; 
lebenslauf.status = Lebensstatus.status;

console.log(lebenslauf);
console.log(`Ich heiße ${lebenslauf.Name} und bin ${lebenslauf.alter}. Momentan bin ich im ersten Lehrjahr als ${lebenslauf.job}.`);


let clients = [
    {
        firstName: "Александр",
        lastName: "Иванчук",
        date: "11-29-1990",
        phone: "8 (929) 988-90-09",
        amounts: [2546, 2098, 764, 7266]
    },
    {
        firstName: "Анатолий",
        lastName: "Стаценко",
        date: "02-12-1987",
        phone: null,
        amounts: [563, 8287, 889]
    },
    {
        firstName: "Марина",
        lastName: "Петрова",
        date: "07-26-1997",
        phone: "8 (899) 546-09-08",
        amounts: [6525, 837, 1283, 392]
    },
    {
        firstName: "Иван",
        lastName: "Караванов",
        date: "09-12-1999",
        phone: null,
        amounts: [7634, 283, 9823, 3902]
    },
    {
        firstName: "Оксана",
        lastName: "Абрамова",
        date: "01-24-2002",
        phone: "8 (952) 746-99-22",
        amounts: [342, 766, 362]
    }
];
let newClient = {};


newClient.firstName = prompt("Введите имя клиента:");
newClient.lastName = prompt("Введите фамилию клиента:");
newClient.date = prompt("Введите дату рождения клиента в формате мм-дд-гггг (месяц-день-год):");
newClient.phone = prompt("Введите телефон клиента:");

newClient.amounts = [];



// while (confirm('Добавить покупку для клиента'  + newClient.firstName + '?')) {
// newClient.amounts.push(+prompt("Введите сумму или нажмите Отмена для завершения"));
// }
while (true) {
    if (!confirm(`Добавить покупку для клиента ${newClient.firstName}?`)) {
        break;
    }
    let amount = prompt("Введите сумму или нажмите Отмена для завершения");
    if (amount === null || amount === '') {
        break;
    }
    newClient.amounts.push(+amount);
}

clients.push(newClient);

// console.log(clients);

function fullName(client) {
    return client.firstName + " " + client.lastName;
}
// console.log(fullName(clients[0]));

function getBirthday(date) {
    let today = new Date();
    let birthday = new Date(date);
    let formattedDate = birthday.toLocaleString('default', { month: 'long', day: 'numeric' });
    if (today.getMonth() === birthday.getMonth() && today.getDate() === birthday.getDate()) {
        return formattedDate + " (сегодня)";
    } else {
        return formattedDate;
    }
}
// console.log(getBirthday(clients[2].date));


// function getAllAmount(amounts) {
//     let totalAmount = 0;
//     for (let amount of amounts) {
//         totalAmount += amounts;
//     }
//     return totalAmount;
//
// }

function getAllAmount(amounts) {
    return amounts.reduce((total, amount) => total + amount, 0);
}

// console.log(getAllAmount(clients[0].amounts));
function getAverageAmount(amounts) {
    const sum = getAllAmount(amounts);
    const average = sum / amounts.length;
    return average.toFixed(1);
}

// console.log(getAverageAmount(clients[0].amounts));





function showClients(clientsArray) {
    clientsArray.forEach(client => {
        console.log(`Клиент ${fullName(client)} имеет среднюю сумму чека ${getAverageAmount(client.amounts)}. День рождения клиента: ${getBirthday(client.date)}`);
    });
}
showClients(clients);
try {
    showClients();
} catch (error) {
    console.error("Вызвана функция без параметров");
    console.error("Ошибка:", error.message);
}

let bestClients = [
    {
        firstName: "Олеся",
        lastName: "Иванова",
        date: "05-15-1985",
        phone: "8 (066) 925-31-27",
        amounts: [800, 9000, 6000]
    },
    {
        firstName: "Михаил",
        lastName: "Скворцов",
        date: null,
        phone: "8 (096) 835-36-08",
        amounts: [6000, 4400, 900]
    }
];

setTimeout(() => {
    showClients(bestClients);
}, 3000);

function whoSpentMore(clientsArray) {
    let maxSpentClient = null;
    let maxSpentAmount = 0;

    for (const client of clientsArray) {
        let totalAmount = 0;
        for (const amount of client.amounts) {
            totalAmount += amount;
        }

        if (totalAmount > maxSpentAmount) {
            maxSpentAmount = totalAmount;
            maxSpentClient = client;
        }
    }

    if (maxSpentClient) {
        console.log(`Больше всех потратил ${fullName(maxSpentClient)}. Сумма покупок: ${maxSpentAmount}.`);
    } else {
        console.log("Нет данных о клиентах.");
    }
}



whoSpentMore(clients);
whoSpentMore(bestClients);

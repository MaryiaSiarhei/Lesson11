// Написать функцию, которая отправляет запрос и выводит результат в консоль, в случае ошибки возвратить null
// Нужны только данные с completed === true
// Добавить логи по этапам
// Добавить искусственную задержку в две секунду
// https://jsonplaceholder.typicode.com/todos

type Data = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}[];

function delay(time: number) {
  const promiseTimer = new Promise((res) => {
    setTimeout(() => res(null), time);
  });
  return promiseTimer;
}

async function request() {
  console.log("Start request");
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  console.log("Start timer");
  await delay(2000);
  console.log("End timer");
  if (response.ok) {
    console.log("Get data");
    const fetchedData: Data = await response.json();
    const filteredData = fetchedData.filter((v) => v.completed);
    return filteredData;
  }
  return null;
}
request().then(console.log);

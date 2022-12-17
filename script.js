const student = "Полищук Антон Александрович"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;

// Отсюда и ниже идет ваш код решения домашнего задания
// ...

 try {
 function throwRandomError(chance) {

  if (Math.random() < chance) {
  
    throw new Error();

  } else {
 
    console.log('Всё в порядке, приложение работает в штатном режиме');
  
  }}
  throwRandomError(0.2);

}catch(e) {
  console.log('Ой, что-то сломалось', 'Произошла ошибка, пожалуйста перезагрузите страницу')
}
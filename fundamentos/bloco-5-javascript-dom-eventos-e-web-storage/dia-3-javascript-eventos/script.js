function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;

function createDaysOfTheMonth() {
  const ulDays= document.getElementById('days');
  for(let index in dezDaysList){
    let dias= document.createElement('li')
    dias.innerText= dezDaysList[index];
    
  ulDays.appendChild(dias);  
  

    if (dezDaysList[index] === 24 || dezDaysList[index] === 31){
      dias.className= 'day holiday';
    }

    else if(dezDaysList[index] === 4 ||dezDaysList[index] === 11 ||dezDaysList[index] === 18){
      dias.className= 'day friday';
    }
    else if (dezDaysList[index] === 25){
      dias.className= 'day friday holiday';
    }
    else{
      dias.className= 'day';
    }
  }
}
createDaysOfTheMonth();

function holidayButton (){
  const button= document.querySelector("buttons-container");
  const newButton= document.createElement("button")
  newButton.id= "btn-holiday";
  button.appendChild(newButton);
}



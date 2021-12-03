const header = document.getElementById('header-container');
header.style.backgroundColor = 'green';

const emergencyTasks= document.getElementsByClassName('emergency-tasks');
  for (let index = 0; index < emergencyTasks.length; index +=1){
    emergencyTasks[index].style.backgroundColor= 'purple';
  }

const noEmergencyTasks= document.getElementsByClassName('no-emergency-tasks');
  for (let index = 0; index < noEmergencyTasks.length; index +=1){
    noEmergencyTasks[index].style.backgroundColor= 'grey';
  }

const footer= document.getElementById ("footer-container");
footer.style.backgroundColor = 'brown'  

const headersEmerncy= document.querySelectorAll('.emergency-tasks h3');
  for (let index = 0; index < headersEmerncy.length; index += 1){
    headersEmerncy[index].style.backgroundColor = "blue";
  }

const noHeadersEmerncy= document.querySelectorAll('.no-emergency-tasks h3');
  for (let index = 0; index < noHeadersEmerncy.length; index += 1){
    noHeadersEmerncy[index].style.backgroundColor = "yellow";

  }  





const endDate = "6 September 2022 10:00 PM";

document.getElementById('end-date').innerText = endDate;

const inputs = document.querySelectorAll('input');


let myArray = [10, 5, 15, 50];
    
myArray.forEach(item, index){
    inputs[index].value = item;
})


function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;
    
    if(diff < 0) return;
    
    // conversion
    
    const days = Math.floor(diff / 3600 / 24);
    
    const hours = Math.floor(diff / 3600 % 24);
    
    const mins = Math.floor(diff / 60 % 60);
    
    const secs = Math.floor(diff % 60);
    
    
  

    
    inputs[0].value = days;
    inputs[1].value = hours;
    inputs[2].value = mins;
    inputs[3].value = secs;
    
    
}

clock();

setInterval(
    () => {
        clock()
    },
    1000
)

const accomplished = document.querySelector('.title3');

//text-shadow: 1px 1px 10px  #ffd700;

const randomNum = (min, max) =>{
    return Math.floor(Math.random() * (max - min)+ min)
}

const titleFlare = () => {
    var xOffset = randomNum(-5, 5);
    var yOffest = '40px'//randomNum(-5, 5);
    var blur = '40px'//randomNum(0, 10);
    var color = '#ffd700';

    accomplished.style.textShadow = `${xOffset}px ${yOffest} ${blur} ${color}`; 

    setTimeout(titleFlare(), 1000);

};








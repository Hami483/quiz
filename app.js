const correctAnswers=["B","B","B","B"];
const form=document.querySelector(".quiz-form");
const resultDiv= document.querySelector(".result");
// const span=document.querySelector(".lead span");

form.addEventListener("submit",e => {
    e.preventDefault();

    let score=0;

    const usersAnswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value];

    //check answerr

    usersAnswers.forEach((answer,index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
    })
    // console.log(score);
    // span.innerText=score;
    // resultDiv.classList.remove('d-none');
    
    window.scrollTo(0,0);
    // resultDiv.querySelector('span').textContent=`${score}%`;
    resultDiv.classList.remove('d-none');

    let output=0;

    const timer=setInterval(()=> {
        resultDiv.querySelector('span').textContent=`${output}%`;

        if(output ===  score){
            clearInterval(timer);
        }else{
            output++;
        }
    },15)
  
})
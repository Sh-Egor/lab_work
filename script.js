document.addEventListener('DOMContentLoaded',start);

function start(){
    const regexpElem = document.querySelector('#regexp');
    console.log(regexpElem.value);
    // Запрос к серваку через fetch
    // асинхронный js 
    // отвечает только послеответа сервера
    fetch('./sample.json').then(response => {
        console.log('One');
        if(response.ok) {
            return response.json();
        }else{
            throw new Error('Nop');
        }
    }).then(json => {
        regexpElem.value = json[0].rightAnswer;
    }).catch(console.error);
    console.log('Two');
}

function matchChange (input){
    var str = input.value;
    var regular = document.getElementById('regexp').value;
    const answer = input.nextElementSibling;
    (str.match(regular) != null) ? (answer.innerHTML = "Match") : (answer.innerHTML = "No match");
}
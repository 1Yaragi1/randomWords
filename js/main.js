let title = document.querySelector('h2');
let btnAdd = document.getElementById('btn');
let getSym = document.getElementById('enter');


// btnAdd.addEventListener('click',function(){
//     let txt = document.getElementById('enter').value;
//     console.log(txt)
// })





function randomWords(){
    let txt = 'a an abandon ability able about above abroad absolute absolutely academic accept acceptable access accommodation accompany according account accurate accuse achieve achievement acknowledge acquire across act action active activity actor actress actual actually ad adapt add addition additional address administration admire admit adopt adult advance advanced advantage adventure advertise advertisement advertising advice affair affect afford afraid after afternoon afterwards again against age aged agencyagenda agent aggressive ago agree agreement ah ahead aid aim air aircraft airline airport alarm album alcohol alcoholic alive all allow almost alone along already also alter alternative although always amazed amazing ambition ambitious among amount analyse analysis ancient and anger angle angry animal ankle anniversary announce announcement annoy annoyed annoying annual another answer anxious any anybody any-more anyone anything anyway anywhere apart apartment apologize app apparent apparently appeal appear appearance apple application apply appointment appreciate approach appropriate approval approve approximately April architect architecture area argue argument arise arm armed arms army around arrange arrangement arrest arrival arrive art article artificial artist artistic as ashamed ask asleep aspect assess assessment assignment assist assistant associate associated association assume at athlete atmosphere attach attack attempt attend attention attitude attract attraction attractive audience August aunt author authority autumn available average avoid award aware away awful baby back background backwards bacteria bad badly bag bake balance ball ban banana band bank(money) bank(river) bar barrier base baseball based basic basically basis basketballbath bathroom battery battle be beach bean bear(deal with) bear(animal) beat beautiful beauty because become bed bedroom bee beef beer';
    let list2 = txt.split(' ');

    let listWords = [...list2];
    let list = "";
    let listSort = [];
    let x = 0;
    let sym = document.getElementById('enter').value;

    
    for(let i = 0; i < listWords.length; i++){
        list = listWords[i];
        if(list[0] === sym){
            listSort[x] = list;
            x++;
        }
    }
    

    if(sym){
        let getRamWor = Math.floor(Math.random() * listSort.length);
        title.innerHTML = listSort[getRamWor];
        document.getElementById('enter').value = sym;
    }else{
        let getRamWor2 = Math.floor(Math.random() * listWords.length);
        title.innerHTML = listWords[getRamWor2];
    }
}












// let arrayList = [10,6,1,8,2,4,5,7,9,3];

// function sortArray(list){

//     for(let i = 0; i < list.length; i++){
//         for(let j = 0; j < list.length; j++){
//             if(list[i] < list[j]){
//                 [list[i], list[j]] = [list[j],list[i]]
//             }
//             console.log(list)
//         }
//         console.log(list)
//     }

//     return list;
// }

// console.log(sortArray(arrayList))





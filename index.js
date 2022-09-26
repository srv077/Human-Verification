(function () {
    let imagelist=[
        'img1',  
        'img2',  
        'img3',
        'img4',
        'img5'
    ]
    function randomvalue(max){
        return Math.floor(Math.random()*max);
    }
    function shuffleArray(arr){
        let newarr=[];
        for(let i=arr.length-1;i>=0;i--){
            let indexToRemove=randomvalue(i+1);
            newarr.push(arr[indexToRemove]);
            arr=arr.filter((item, index) => index!=indexToRemove);
        }
        return newarr;
    }
    let cardcontainer=document.getElementById("card-container");
    
    function getcard(imageName){
        let wrapper = document.createElement('div');
        if(imageName=="img1"){
             wrapper.innerHTML = `<div class="img-container"><img class="img" src="https://images.unsplash.com/photo-1658855216762-1dac75de591c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" data-ns-test="img1"></img></div>`
        }else if(imageName=="img2"){
             wrapper.innerHTML = `<div class="img-container"><img class="img"  src="https://images.unsplash.com/photo-1663568661764-841a03f728cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80" data-ns-test="img2"></img></div>`
        }else if(imageName=="img3"){
             wrapper.innerHTML = `<div class="img-container"><img class="img"  src="https://images.unsplash.com/photo-1663210253953-4e647b573003?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80" data-ns-test="img3"></img></div>`
        }else if(imageName=="img4"){    
             wrapper.innerHTML = `<div class="img-container"><img class="img"  src="https://images.unsplash.com/photo-1662966732481-7dff95adde69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80" data-ns-test="img4"></img></div>`
        }else{     
             wrapper.innerHTML =`<div class="img-container"><img class="img"  src="https://images.unsplash.com/photo-1662988564960-e7937ade2c99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=407&q=80"  data-ns-test="img5"></img></div>`
        }
        return wrapper.firstChild;
    }
    
    function getcardinside(){
        let shuffleimage = shuffleArray([...imagelist,imagelist[randomvalue(imagelist.length)]]);
        shuffleimage.forEach(imageName=>{
            let card=getcard(imageName);
            cardcontainer.appendChild(card);
        })
        cardEventlistner();
    }
    getcardinside();
    let selectedImages=[];
    let maincontainer=document.getElementById('main');
    let verifybutton = document.createElement('button');
    verifybutton.setAttribute('id','btn');
    let resetbutton = document.createElement('button');
    resetbutton.setAttribute('id','reset')
    verifybutton.innerHTML = 'Verify';
    
    resetbutton.innerHTML = 'Reset';
    function oncardclick(){
        document.getElementById('head').style.display = 'none';
        if(!maincontainer.contains(resetbutton)){
            maincontainer.appendChild(resetbutton);
        }
        if(selectedImages.length==2 && this.classList.contains('img') ){
            return;
        }
        if(this.classList.contains('img') ){ 
            this.classList.remove('img');
            this.classList.add('selected');
            selectedImages.push(this); 
        }else{
            this.classList.remove('selected');
            this.classList.add('img');
            selectedImages.pop();
            if(maincontainer.contains(verifybutton)){
                maincontainer.removeChild(verifybutton);
            }
            if(selectedImages.length==0){
                maincontainer.removeChild(resetbutton);
    
            }
        }
        if(selectedImages.length==2){
            maincontainer.appendChild(verifybutton)
        }
    }
    
    function cardEventlistner(){
        let card=document.querySelectorAll('.img');
        card.forEach(card=>{
            card.addEventListener('click',oncardclick);
        })
    }
    let para=document.createElement("p");
    para.setAttribute('id','para');
    function verifybuttonclick(){
        maincontainer.removeChild(verifybutton);
        if(selectedImages[0].getAttribute("data-ns-test")==selectedImages[1].getAttribute("data-ns-test")){
            para.innerHTML="You are a human. Congratulations!";
            maincontainer.appendChild(para);
        }else{
            para.innerHTML=" We can't verify you as a human. You selected the non-identical tiles.";
            maincontainer.appendChild(para);
        }
    }
    function resetbuttonclick(){
        document.getElementById('head').style.display='block';
        selectedImages=[];
        let toreset=document.querySelectorAll('.selected');
        toreset.forEach(resetname=>{
            resetname.classList.remove('selected');
            resetname.classList.add('img');
        })
        maincontainer.removeChild(resetbutton);
        if(maincontainer.contains(verifybutton)){
            maincontainer.removeChild(verifybutton);
        }
        if(maincontainer.contains(para)){
            maincontainer.removeChild(para);
        }
        while (cardcontainer.firstChild) {
            cardcontainer.removeChild(cardcontainer.lastChild);
        }
        getcardinside();
    }
    function changeclass(resetname){
        resetname.classList.remove('selected');
        resetname.classList.add('img');
    }
    verifybutton.addEventListener('click',verifybuttonclick);
    resetbutton.addEventListener('click',resetbuttonclick);   
  })();
    


// let imagelist=[
//     'img1',  
//     'img2',  
//     'img3',
//     'img4',
//     'img5'
// ]
// function randomvalue(max){
//     return Math.floor(Math.random()*max);
// }
// function shuffleArray(arr){
//     let newarr=[];
//     for(let i=arr.length-1;i>=0;i--){
//         let indexToRemove=randomvalue(i+1);
//         newarr.push(arr[indexToRemove]);
//         arr=arr.filter((item, index) => index!=indexToRemove);
//     }
//     return newarr;
// }
// let cardcontainer=document.getElementById("card-container");

// function getcard(imageName){
//     let wrapper = document.createElement('div');
//     if(imageName=="img1"){
//          wrapper.innerHTML = `<div class="img-container"><img class="img" src="https://images.unsplash.com/photo-1658855216762-1dac75de591c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" data-ns-test="img1"></img></div>`
//     }else if(imageName=="img2"){
//          wrapper.innerHTML = `<div class="img-container"><img class="img"  src="https://images.unsplash.com/photo-1663568661764-841a03f728cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80" data-ns-test="img2"></img></div>`
//     }else if(imageName=="img3"){
//          wrapper.innerHTML = `<div class="img-container"><img class="img"  src="https://images.unsplash.com/photo-1663210253953-4e647b573003?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80" data-ns-test="img3"></img></div>`
//     }else if(imageName=="img4"){    
//          wrapper.innerHTML = `<div class="img-container"><img class="img"  src="https://images.unsplash.com/photo-1662966732481-7dff95adde69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80" data-ns-test="img4"></img></div>`
//     }else{     
//          wrapper.innerHTML =`<div class="img-container"><img class="img"  src="https://images.unsplash.com/photo-1662988564960-e7937ade2c99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=407&q=80"  data-ns-test="img5"></img></div>`
//     }
//     return wrapper.firstChild;
// }

// function getcardinside(){
//     let shuffleimage = shuffleArray([...imagelist,imagelist[randomvalue(imagelist.length)]]);
//     shuffleimage.forEach(imageName=>{
//         let card=getcard(imageName);
//         cardcontainer.appendChild(card);
//     })
//     cardEventlistner();
// }
// getcardinside();
// let selectedImages=[];
// let maincontainer=document.getElementById('main');
// let verifybutton = document.createElement('button');
// verifybutton.setAttribute('id','btn');
// let resetbutton = document.createElement('button');
// resetbutton.setAttribute('id','reset')
// verifybutton.innerHTML = 'Verify';

// resetbutton.innerHTML = 'Reset';
// function oncardclick(){
//     document.getElementById('head').style.display = 'none';
//     if(!maincontainer.contains(resetbutton)){
//         maincontainer.appendChild(resetbutton);
//     }
//     if(selectedImages.length==2 && this.classList.contains('img') ){
//         return;
//     }
//     if(this.classList.contains('img') ){ 
//         this.classList.remove('img');
//         this.classList.add('selected');
//         selectedImages.push(this); 
//     }else{
//         this.classList.remove('selected');
//         this.classList.add('img');
//         selectedImages.pop();
//         if(maincontainer.contains(verifybutton)){
//             maincontainer.removeChild(verifybutton);
//         }
//         if(selectedImages.length==0){
//             maincontainer.removeChild(resetbutton);

//         }
//     }
//     if(selectedImages.length==2){
//         maincontainer.appendChild(verifybutton)
//     }
// }

// function cardEventlistner(){
//     let card=document.querySelectorAll('.img');
//     card.forEach(card=>{
//         card.addEventListener('click',oncardclick);
//     })
// }
// let para=document.createElement("p");
// para.setAttribute('id','para');
// function verifybuttonclick(){
//     maincontainer.removeChild(verifybutton);
//     if(selectedImages[0].getAttribute("data-ns-test")==selectedImages[1].getAttribute("data-ns-test")){
//         para.innerHTML="You are a human. Congratulations!";
//         maincontainer.appendChild(para);
//     }else{
//         para.innerHTML=" We can't verify you as a human. You selected the non-identical tiles.";
//         maincontainer.appendChild(para);
//     }
// }
// function resetbuttonclick(){
//     document.getElementById('head').style.display='block';
//     selectedImages=[];
//     let toreset=document.querySelectorAll('.selected');
//     toreset.forEach(resetname=>{
//         resetname.classList.remove('selected');
//         resetname.classList.add('img');
//     })
//     maincontainer.removeChild(resetbutton);
//     if(maincontainer.contains(verifybutton)){
//         maincontainer.removeChild(verifybutton);
//     }
//     if(maincontainer.contains(para)){
//         maincontainer.removeChild(para);
//     }
// }
// function changeclass(resetname){
//     resetname.classList.remove('selected');
//     resetname.classList.add('img');
// }
// verifybutton.addEventListener('click',verifybuttonclick);
// resetbutton.addEventListener('click',resetbuttonclick);




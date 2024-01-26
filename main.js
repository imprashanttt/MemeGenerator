let memeGeneratorBtn=document.querySelector(".generate-meme-btn");
let memeImage=document.querySelector(".meme-generator img");
let memeTitle=document.querySelector(".meme-title");
let memeAuthor=document.querySelector(".meme-author");

const updateDetails=(url,title,author)=>{
    memeImage.setAttribute("src",url)
    memeTitle.innerHTML=title;
    memeAuthor.innerHTML=`Meme by ${author}`;

}
let generateMeme=()=>{
    fetch("https://meme-api.com/gimme/wholesomememes").then((response)=>response.json()).then(data=>{
        updateDetails(data.url,data.title,data.author)
    });
}
let generateMeme1=async ()=>{
    let response=await fetch("https://meme-api.com/gimme/wholesomememes");
    data=await response.json();
   memeImage.setAttribute("src",data.url)
   memeTitle.innerHTML=data.title;
   memeAuthor.innerHTML=data.author;

   
}
generateMeme1()

memeGeneratorBtn.addEventListener("click",generateMeme1);
let gamestrtd=false
function start(){
     gamestrtd=true
     render()

}
function sum(arr){
   let k=0
   for(let i=0;i<arr.length;i++)
   {
     k+=arr[i]
   }
   return k
}
let cards_array=[]
let x=0
let y=0
let sm=0
function render(){
     if(cards_array.length!=0)
     {
          cards_array=[]
          document.getElementById("cards").innerText=null
          document.getElementById("sum").innerText=null
          document.getElementById("message").innerText="Invalid Command Press Exit Game"
          return null

     }
      x=Math.floor(Math.random()*13)+1
      y=Math.floor(Math.random()*13)+1
     if(x>10){
          x=10
     }
     if(y>10){
          y=10
     }
     if(x===1){
          x+=10
     }
     if(y===1){
          y+=10
     }
     cards_array.push(x)
     cards_array.push(y)
     sm=0
     document.getElementById("cards").innerText="Cards: "+cards_array
    sm=sum(cards_array)
     document.getElementById("sum").innerText="Sum: " +sm
     cont()
     
    
}
function newCard(){
   if(gamestrtd)
   {
     let z=Math.floor(Math.random()*13)+1
   if(z>10){
     z=10
}
if(z===1){
     z+=10
}
cards_array.push(z)
document.getElementById("cards").innerText="Cards: "+cards_array
 sm=sum(cards_array)
 document.getElementById("sum").innerText="Sum: " +sm
 gamestrtd=false
 cont()
   }
   else{
     document.getElementById("message").innerText="Please Press Start Game to Start"
   }
}
function cont()
{
     if(sm<21)
     {
          document.getElementById("message").innerText="Please pick new card"
          

     }
     else if(sm==21)
     {
          document.getElementById("message").innerText="Hurrah! You Won" 
          sm=0
     cards_array=[]
     }
     else{
          document.getElementById("message").innerText="You lost Press Exit Game"
          sm=0
     cards_array=[]
     }
}
function home(){
     sm=0
     cards_array=[]
     document.getElementById("message").innerText="Press Start Game to play"
     document.getElementById("cards").innerText=null
     document.getElementById("sum").innerText=null
}
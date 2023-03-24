const emojis = ["😭","🤣","🤬","🥱","🤮","💀","🤑","🙈","🙉","🙊","🐵","😃","😜","😝","👽","😱"];
function getRandomEmoji(){
  let emoji = emojis[Math.floor(Math.random()*emojis.length)];
  document.getElementById("emoji-container").textContent=emoji;
}
getRandomEmoji();
let gameseq=[];
let userseq=[];
let started=false;
let level=0;
let h3=document.querySelector("h3");
document.addEventListener("keypress", function()
{
    if(started==false)
    {
        alert("Game has started");
        started=true;
        levelup();
    }
})
function levelup()
{
    userseq=[];
    level++;
    h3.innerText=`Level ${level}`;
    let randidx=Math.floor(Math.random()*4);
    let randbox=`box${randidx}`;
    let randbtn=document.querySelector(`.box${randidx}`);
    gameseq.push(randbox);
    flash(randbtn);
}
function flash(randbtn)
{
    randbtn.classList.add("flash");
    setTimeout(() =>
    {
        randbtn.classList.remove("flash");
    }, 250);
}
let boxes=document.querySelectorAll(".box");
for(box of boxes)
{
    box.addEventListener("click", btnpress);
}
function btnpress()
{
    let btn=this;
    userflash(btn)
    let id=btn.getAttribute("id");
    userseq.push(id);
    checkans(userseq.length-1);
}
function userflash(randbtn)
{
    randbtn.classList.add("userflash");
    setTimeout(() =>
    {
        randbtn.classList.remove("userflash");
    }, 250);
}
function checkans(idx)
{
    if(userseq[idx]===gameseq[idx])
    {
        if (userseq.length==gameseq.length)
        {
            setTimeout(levelup, 1000);
        }
    }
    else
    {
        h3.innerText=`Game Over! Your Score was ${level}. Press any key to restart.`;
        reset();
    }
}
function reset()
{
    gameseq=[];
    started=false;
    level=0;
}
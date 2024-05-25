var i = 2;
document.querySelectorAll("button")[0].addEventListener("click", fun);
function fun() {
  if (i % 2 == 0) {
    i++;

    var randimg1 = "color:black";
    document.querySelector("h1").setAttribute("style", randimg1);

    var randimg2 = "background-color:#C4DFDF";
    document.querySelector("body").setAttribute("style", randimg2);

    var randimg3 = "background-color:#031b28";
    document.querySelector(".circle").setAttribute("style", randimg3);

    var randimg4 = "background-color:black;color:white; border-radius: 15%;";
    document.querySelector(".but").setAttribute("style", randimg4);

    var randimg5 =
      "M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z";
    document.querySelector("path").setAttribute("d", randimg5);
  } else if (i % 2 != 0) {
    var randimg1 = "color:#8294C4";
    document.querySelector("h1").setAttribute("style", randimg1);

    var randimg2 = "background-color:#031b28";
    document.querySelector("body").setAttribute("style", randimg2);

    var randimg3 = "background-color:#ACB1D6";
    document.querySelector(".circle").setAttribute("style", randimg3);

    var randimg4 = "background-color:white;color:black;border-radius: 15%;";
    document.querySelector(".but").setAttribute("style", randimg4);

    var randimg5 =
      "M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z";
    document.querySelector("path").setAttribute("d", randimg5);
    i++;
  }
}

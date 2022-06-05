function add(e)
{
    
    e.preventDefault();
    var fnum = parseInt(document.getElementById("firstnum").value);
    var snum = parseInt(document.getElementById("secondnum").value);
    document.getElementById("result").innerHTML= fnum + snum;

}
function sub(e)
{
    e.preventDefault();
    var fnum = parseInt(document.getElementById("firstnum").value);
    var snum = parseInt(document.getElementById("secondnum").value);
    document.getElementById("result").innerHTML = fnum - snum;
}
function mul(e)
{
    e.preventDefault();
    var fnum = parseInt(document.getElementById("firstnum").value);
    var snum = parseInt(document.getElementById("secondnum").value);
    document.getElementById("result").innerHTML= fnum * snum;
}
function div(e)
{
    e.preventDefault();
    var fnum = parseInt(document.getElementById("firstnum").value);
    var snum = parseInt(document.getElementById("secondnum").value);
    document.getElementById("result").innerHTML = fnum / snum;
}
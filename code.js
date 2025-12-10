function strings()
{
    var string1 = document.getElementById("str1").value;
    var string2 = document.getElementById("str2").value;
    var both = string1+ string2; // this appends strign 2 to the end of string 1
    var backwards = string2+ string2;
    // this is called concatenation

    document.getElementById("results").innerHTML = "The concatenated string =" + both;
}
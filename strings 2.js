function strings()
{
    var string1 = document.getElementById("str1").value;
    var string2 = document.getElementById("str2").value;
    var both = string1+ string2; // this appends strign 2 to the end of string 1
    var backwards = string2+ string1;

    // this is called concatenation

    document.getElementById("results").innerHTML = "The concatenated string =" + both + " backwards = " + backwards;

    document.getElementById("results").innerHTML = "st1 + str2 with spaces:" + string1 + " " + string2;

    var len = string2.length;
    //alert("length of sting2 =" + len);

    if (string2.length > 10)
    {
         document.getElementById("results").innerHTML = "Invalid";

    }
    else if (len <2)// = to else if (string2.len <2)
    {
         document.getElementById("results").innerHTML = "Len < 2";

    }
    else
    {
         document.getElementById("results").innerHTML = "Correct Length";
    }


    // reverse string 1

    var splitString = string1.split("");
    //alert(splitString + " orig string " + string1);

    var reverseString = splitString.reverse("");
    //alert("reversed splitstring = " + reverseString );

    var joinString = reverseString.join("");
    //alert("joined string = " + joinString);

    var newString = "";
    var i;
    for (i = string1.length-1; i>=0;i--)
    {
        newString += string1[i];
    }
    alert("reversed using for loop = " + newString);


}
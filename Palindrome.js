function strings()
{
    string1 = document.getElementById("str1").value;
    // reverse string 1

    var splitString = string1.split("");
    //alert(splitString + " orig string " + string1);

    var reverseString = splitString.reverse("");
    //alert("reversed splitstring = " + reverseString );

    var joinString = reverseString.join("");
    //alert("joined string = " + joinString);

    if (string1 == joinString)
    {
        document.getElementById("result").innerHTML = "This is a Palindrome!!!";

    }
    else
    {
        document.getElementById("result").innerHTML = "You Did Not Enter a Palindrome"
    }



}
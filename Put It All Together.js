function Test()
{
    //gave definitions to the terms in the HTML
    var Input1 = document.getElementById("inp1").value;
    var Input2 = document.getElementById("inp2").value;
    //puts Input 1 and 2 together
    var both = Input1 + Input2;

    if (Input1.length > 5)
    {
         document.getElementById("results").innerHTML = "Invalid";

    }
    else if (Input2.len <2)
    {
         document.getElementById("results").innerHTML = "Len < 2";

    }
    else
    {
         document.getElementById("results").innerHTML = "Correct Length";
    }

    for (i = string1.length-1; i>=0;i--)
    {
        newString += string1[i];
    }
    alert("reversed using for loop = " + newString);

}
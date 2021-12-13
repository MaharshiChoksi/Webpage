function validation()
{
    var reg=/^[a-zA-Z ]+$/;
    var user = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var addr = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    if ((user==null) || (user==" ") || (!user.match(reg)))
    {
        alert("Only characters allowed!");
        return false;
    }
    if (!((email.includes('@gmail.com')) || (email.includes('@yahoo.com')) || (email.includes('@outlook.com')) || (email.includes('@myseneca.ca')) || (email.includes('@email.com'))))
    {
        alert("only '@gmail.com','@yahoo.com','@outlook.com', '@myseneca.ca', '@email.com' are allowed");
        return false;
    }
    if ((!city.match(reg)) || (city==" ") || (city==null))
    {
        alert("enter valid name of city!");
        return false;
    }
    if ((addr==null) || (addr==" "))
    {
        alert("Enter valid address");
        return false;
    }
    sending();
    return false;
}

function ccount()
{
    const txt = document.getElementById('content');
    const remainingtext = document.getElementById('textremain')
    const max=390;
    txt.addEventListener('input',()=>{
        const remain = max-txt.value.length;
        remainingtext.textContent=`${remain}`
        if(txt.value.length>max)
        {
            txt.value=txt.value.substring(0,max);
        }
    })
}

function sending()
{
    var user = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var addr = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var postal = document.getElementById('pstcode').value;
    var content = document.getElementById('content').value;
    var myname = document.getElementById('myname').value;
    var number = document.getElementById('studentid').value;
    const toSend = {
        'name': user,
        'email': email,
        'address': addr,
        'City': city,
        'Postal_code': postal,
        'Content': content
    }
    const jsonString = JSON.stringify(toSend);
    const request = new XMLHttpRequest();
    request.open("POST", "https://httpbin.org/post", true);
    request.setRequestHeader('Content-Type', "application/json");
    request.send(jsonString);
    request.onreadystatechange = process;
    function process(e)
    {
        if (request.readyState == 4 && request.status ==200)
        {
            var responsetxt = JSON.parse(request.responseText);
            document.getElementById('response').innerHTML += "The retrived data from https://httpbin.org/post website is:" + JSON.stringify(responsetxt);
        }
    }
}

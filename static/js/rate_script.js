//var slider=document.getElementById("customRange1");
var output=document.getElementsByClassName("range_display");
var last_button=document.getElementById('last_button');
const ratings=[];
var arr=document.getElementsByClassName('r');
n=arr.length;

for(var i=0;i<n;i++)
    ratings[i]=3;

for(let i=0;i<n;i++)
{
    arr[i].addEventListener('input', function () {
        ratings[i] = arr[i].value; // Update the array with the current slider value
        output[i]=arr[i].value;
        output[i].innerHTML = this.value;

        //document.getElementById('range_display' + (i + 1)).innerHTML = 'Value: ' + arr[i].value; // Update display
    });
}

function fun()
{
    fetch('/send_array', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: ratings }), // Sending as JSON
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
       // alert(JSON.stringify(data, null, 2));
        // alert(data["array"]);
        last_button.textContent=data["array"];
        last_button.disabled="true";
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
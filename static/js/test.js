button=document.getElementById('b1');

button.addEventListener("click",next_question);
var cnt=0;

function getData()
{
    var q1=document.getElementsByName('q1');
    var q2=document.getElementsByName('q2');
    var q3=document.getElementsByName('q3');
    var q4=document.getElementsByName('q4');
    var q5=document.getElementsByName('q5');
    
    var total=0;

    for(i=0;i<5;i++)
    {
        if (q1[i].checked)
        {
            total+=Number(q1[i].value); 
        }

        if (q2[i].checked)
        {
            total+=Number(q2[i].value); 
        }
        
        if(q3[i].checked)
        {
            total+=Number(q3[i].value); 
        }

        if (q4[i].checked)
        {
            total+=Number(q4[i].value); 
        }

        if (q5[i].checked)
        {
            total+=Number(q5[i].value); 
        }

    }

    return total;
    
}
function next_question()
{
    var total=getData();
    renderQuestion(cnt+1);

}


function renderQuestion(count)
{
    p1=document.getElementById('p1');
    p2=document.getElementById('p2');
    p3=document.getElementById('p3');
    p4=document.getElementById('p4');

    switch(count)
    {
        case 1:
            p1.textContent="This is Question 1 of first page";
            p2.textContent="This is Question 2 of first page";
            p3.textContent="This is Question 3 of first page";
            p4.textContent="This  is Question 4 of first page";
            p4.textContent="This  is Question 5 of first page";
            break;
        
        case 2:
            p1.textContent="This is Question 1 of second page";
            p2.textContent="This is Question 2 of second page";
            p3.textContent="This is Question 3 of second page";
            p4.textContent="This  is Question 4 of second page";
            p4.textContent="This  is Question 5 of second page";
            break;
        
        case 3:
            p1.textContent="This is Question 1 of  ";
            p2.textContent="This is Question 2 of second page";
            p3.textContent="This is Question 3 of second page";
            p4.textContent="This  is Question 4 of second page";
            p4.textContent="This  is Question 5 of second page";
            break;

        default:
            alert("Sample");
    }



}
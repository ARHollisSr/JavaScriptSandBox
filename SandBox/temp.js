var items = document.querySelectorAll('li');
for (var i =0; i < 5; i++)
{
    var li = items[i];
    li.addEventListener('click', fuction(){
        alert(li.text + ':' + i);
    });
};
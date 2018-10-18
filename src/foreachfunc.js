function forEach(list, callback)
{
    for(var n=0; n < list.length; n++)
    {
        callback.call(list[n], n);
    }
}

var weapons = [{type: 'shuriken' },
               {type: 'katana'},
               {type: 'nunchucks'}];
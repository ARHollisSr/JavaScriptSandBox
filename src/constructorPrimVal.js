function Ninja() {
    this.skulk = function() {
        return true;
    };
    return 1;
}

var ninja = new Ninja(); 

/*
If we invoke the Ninja function as a function, it returns a 1 as expected. If
we call it with the new keyword a new ninja object is constructed and returned.
*/
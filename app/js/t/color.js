define(['./dog'], function(dog){
    
    console.log('color init');

    dog();

    return function(){
        console.log('color excute');
    }
});
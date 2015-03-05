
define(['t/color'], function(color){
    console.log('dog.js-' + color.color);
    return {
        color: color.color,
        height: '100'
    }
});
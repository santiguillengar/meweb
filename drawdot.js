// This script draws a black dot on the screen wherever the mouse is clicked.
$(document).ready(function(){
    $(document).on('click', 'body', function(e) {
      mouseX = e.pageX;
      mouseY = e.pageY
      console.log('Mouse Position:\t' + mouseX + '|' + mouseY);
      var color = '#000000',
        size = '5px';
      $(this).append(
        $('<div />')
          .css({
            backgroundColor: color,
            height: size,
            left: mouseX + 'px',
            position: 'absolute',
            top: mouseY + 'px',
            width: size
          })
      );
    })
});
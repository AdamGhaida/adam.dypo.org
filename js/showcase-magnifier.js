// $(function() {
//     $(window).scroll(function() {
//       var scrollTop = $(document).scrollTop() + ($(window).height() / 3);
//       var positions = [];
  
//       $('.showcase-slide').each(function() {
//         //console.log($(this).position().top);
//         $(this).removeClass("highlight-showcase");
//         positions.push({
//           position: $(this).position().top,
//           element: $(this)
//         });
//       });
  
//       var getClosest = closest(positions, scrollTop);
//       console.log(getClosest);
//       getClosest.addClass("highlight-showcase");
//     });
  
//     function closest(array, number) {
//       var num = 0;
//       for (var i = array.length - 1; i >= 0; i--) {
//         if (Math.abs(number - array[i].position) < Math.abs(number - array[num].position)) {
//           num = i;
//         }
//       }
//       return array[num].element;
//     }
  
//   });
  
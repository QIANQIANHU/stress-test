$(document).ready(function() {
  $("form#stressTest").submit(function(event){
    event.preventDefault();
    var scoresTotal = [];
    $("input:checkbox[name=stressor-one]:checked").each(function(){
      var notStressedMode = $(this).val();
      // alert (typeof(notStressedMode));
      // notStressedMode.parseInt();
      scoresTotal.push(parseInt(notStressedMode));
      // alert(typeof(parseInt(notStressedMode)));
    });
    $("input:checkbox[name=stressor-two]:checked").each(function(){
      var moderateStressedMode = $(this).val();
      scoresTotal.push(parseInt(moderateStressedMode));
    });
    $("input:checkbox[name=stress-reduce]:checked").each(function(){
      var veryStressedMode = $(this).val();
      console.log(veryStressedMode);
      scoresTotal.push(parseInt(veryStressedMode));
    });
      var totalAdd = 0
      scoresTotal.forEach(function(score){
        totalAdd += score;
      });

      if (totalAdd < 0) {
        $("#notStressed").show();
      } else if ((totalAdd >=0) && (totalAdd <=15)) {
        $("#moderateStressed").show();
      } else {
        $("#veryStressed").show();
      }

      // var reset = function() {
      //   flavorsArray = [];
      //   $("#notStressed").empty();
      // };
  });
});

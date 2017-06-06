// Your jQuery goes here

var userData = {
  name:"asd",
  email:"fdssdf"
};

$("#name").change(function(event)
{
  if(("#name").val()){
    userData.name = ("#name").val();
    console.log("It has matched");
  }
});

$("#startButton").click(function(event)
{
  $("#welcome").hide();
  $("#q1").show();
});

$("#question2ButtonNext").click(function(event)
{
  if(name=="" && email=="")
  {

        $("#question2Button").hide();
  }
  else{
      $("#q2").show();
      $("#q1").hide();
    }


});

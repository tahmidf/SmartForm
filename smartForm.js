// Your jQuery goes here

var userData = {
  name:"",
  email:"",
  html:{likes:[],dislikes:[]},
  css:{likes:[],dislikes:[]},
  js:{likes:[],dislikes:[]},
  skills:{html:"",css:"",js:""},
  surveyState:0
};
var form_checker=[false,false,false];

$("#startButton").click(function(){
  //$("#welcome").animate({left: '250px'});
  $("#welcome").hide();
  $("#q1").show();
});


function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validateName(name)
{
				var re = /^[A-z ]+$/;
				return re.test(name);
}

$("#question2ButtonNext").click(function()
{
  var name = $("#name").val();
  var email = $("#exampleInputEmail1").val();
  if(name.length==0 )
  {
    alert("Sorry have to give user name");
    $('#name').focus();
  }
  else if(name.length==0)
  {
    alert("Sorry have to give user name");
    $('#name').focus();
  }
  else if(email.length==0)
  {
    alert("Sorry have to give email");
    $('#exampleInputEmail1').focus();
  }
  else if(!validateEmail(email)){
    alert("Sorry have to give a valid email");
    $('#exampleInputEmail1').focus();
  }
  else if(validateEmail(email) && validateName(name)){
    userData.name= $("#name").val();
    userData.email= $("#exampleInputEmail1").val();
    window.localStorage.userData = JSON.stringify(userData);
    $("#q1").hide();
    $("#q2").show();
  }
});


$("#Htmlbutton").click(function(){
  $("#q2").hide();
  $("#q2a").show();
});
$("#Cssbutton").click(function(){
  $("#q2").hide();
  $("#q2b").show();
});
$("#Jsbutton").click(function(){
  $("#q2").hide();
  $("#q2c").show();
});

		$(':checkbox[name=likesHTML]').click(function() {
			if (this.checked) {
				userData.html.likes.push(this.value);
			}
    });
    $(':checkbox[name=DlikesHTML]').click(function() {
			if (this.checked) {
				userData.html.dislikes.push(this.value);
			}
    });


    $("#Htmlnext").click(function(){
      if(form_checker[0]==true && form_checker[1]==true &&form_checker[2]==true)
      {
        $("#q2a").hide();
        $("#q3").show();
      }
      else {
        window.localStorage.userData = JSON.stringify(userData);
        $("#q2a").hide();
        $("#q2b").show();
        form_checker[0]=true;
      }
    });


		$(':checkbox[name=likesCSS]').click(function() {
			if (this.checked) {
				userData.css.likes.push(this.value);
			}
    });
    $(':checkbox[name=DlikesCSS]').click(function() {
			if (this.checked) {
				userData.css.dislikes.push(this.value);
			}
    });


    $("#Cssnext").click(function(){
      if(form_checker[0]==true && form_checker[1]==true &&form_checker[2]==true)
      {
        $("#q2b").hide();
        $("#q3").show();
      }
      else{
        window.localStorage.userData = JSON.stringify(userData);
        $("#q2b").hide();
        $("#q2c").show();
        form_checker[1]=true;
      }
    });



		$(':checkbox[name=likesJS]').click(function() {
			if (this.checked) {
				userData.js.likes.push(this.value);
			}
    });

    $(':checkbox[name=DlikesJS]').click(function() {
			if (this.checked) {
				userData.js.dislikes.push(this.value);
			}
    });

    $("#Jsnext").click(function(){
      form_checker[2]=true;
      if(form_checker[0]==false)
      {
        window.localStorage.userData = JSON.stringify(userData);
        $("#q2c").hide();
        $("#q2a").show();
      }

      else if(form_checker[0]==true && form_checker[1]==true &&form_checker[2]==true)
      {
        $("#q2c").hide();
        $("#q3").show();
        console.log(userData);
      }

      });


$("#Htmlprev").click(function(){
  $("#q2a").hide();
  $("#q2").show();
});
$("#Cssprev").click(function(){
  $("#q2b").hide();
  $("#q2a").show();
});
$("#Jsprev").click(function(){
  $("#q2c").hide();
  $("#q2b").show();
});

$("#q3next").click(function(){
  $("#q3").hide();
  $("#thanks").show();
});

$("#q3prev").click(function(){
  $("#q3").hide();
  $("#q2").show();
});

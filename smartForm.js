// Your jQuery goes here

var userData = {
  name:"",
  email:"",
  html:{likes:[],dislikes:[]},
  css:{likes:[],dislikes:[]},
  js:{likes:[],dislikes:[]},
  skills:{html:"",css:"",js:""},
  surveyState:[false,false,false,false,false]
};
var form_checker=[false,false,false];

$(document).ready(function()
{
  if(userData.surveyState[0]==true)
  {
    $("#name").val()=userData.name;
    $("#exampleInputEmail1").val()=userData.email;
  }
  if(userData.surveyState[1]==true)
  {
    $("#likesHTML")==userData.html.likes;
    $("#DlikesHTML")==userData.html.dislikes;
  }
  if(userData.surveyState[2]==true){
    $("#likesCSS")==userData.css.likes;
    $("#DlikesCSS")==userData.css.dislikes;
  }
  if(userData.surveyState[3]==true)
  {
    $("#likesJS")==userData.js.likes;
    $("#DlikesJS")==userData.js.dislikes;
  }
  else{
    console.log("Its not done");
  }
});
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
    userData.surveyState[0]=true;
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

var htmlclick=0;
		$(':checkbox[name=likesHTML]').click(function() {
			if (this.checked) {
        htmlclick+=1;
				userData.html.likes.push(this.value);
			}
    });
    $(':checkbox[name=DlikesHTML]').click(function() {
			if (this.checked) {
        htmlclick+=1;
				userData.html.dislikes.push(this.value);
			}
    });


    $("#Htmlnext").click(function(){
      form_checker[0]=true;
      if(form_checker[0]==true && form_checker[1]==true &&form_checker[2]==true)
      {
        userData.surveyState[1]=true;
        $("#q2a").hide();
        $("#q3").show();
      }
      else {
        if(htmlclick<2)
        {
          alert("You have to fill all the questions");
        }
        else {
          userData.surveyState[1]=true;
          window.localStorage.userData = JSON.stringify(userData);
          $("#q2a").hide();
          $("#q2b").show();
        }
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
      form_checker[1]=true;
      if(form_checker[0]==true && form_checker[1]==true &&form_checker[2]==true)
      {
        userData.surveyState[2]=true;
        $("#q2b").hide();
        $("#q3").show();
      }
      else{
        userData.surveyState[2]=true;
        window.localStorage.userData = JSON.stringify(userData);
        $("#q2b").hide();
        $("#q2c").show();

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
        userData.surveyState[3]=true;
        window.localStorage.userData = JSON.stringify(userData);
        $("#q2c").hide();
        $("#q2a").show();
      }

      else if(form_checker[0]==true && form_checker[1]==true &&form_checker[2]==true)
      {
        userData.surveyState[3]=true;
        $("#q2c").hide();
        $("#q3").show();
      }
      });

      $(':radio[name=hinlineRadioOptions]').click(function() {
  			if (this.checked) {
  				userData.skills.html=this.value;
  			}
      });
      $(':radio[name=cinlineRadioOptions]').click(function() {
  			if (this.checked) {
  				userData.skills.css=this.value;
  			}
      });
      $(':radio[name=jinlineRadioOptions]').click(function() {
  			if (this.checked) {
  				userData.skills.js=this.value;
  			}
      });

      $("#q3next").click(function(){
        userData.surveyState[4]=true;
        window.localStorage.userData = JSON.stringify(userData);
        $("#q3").hide();
        $("#thanks").show();
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

$("#q3prev").click(function(){
  $("#q3").hide();
  $("#q2").show();
});

$("#answer").click(function(){
			$("#show").show();
			$("#show").html(JSON.stringify(userData, null, 2));

});

$("#delete").click(function(){
			window.localStorage.clear();
      userData={
      name:"",
      email:"",
      html:{likes:[],dislikes:[]},
      css:{likes:[],dislikes:[]},
      js:{likes:[],dislikes:[]},
      skills:{html:"",css:"",js:""},
      surveyState:[false,false,false,false,false]
    };
			$("#show").hide();
});

$("#initial").click(function(){
			$("#show").hide();
			$("#thanks").hide();
      $("#welcome").show();
});

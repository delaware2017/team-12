var usn = "<p>Enter username</p>" 
var pass =  "<p>Enter password</p>"
var info = "<p> Applicant Info </p>" // hardcode this part if Django doesn't work -  or use this as the application portal if we don't have time to make an actual one



$(document).ready(function(){

    $('.element').typeIt({
       strings: ['Welcome'],
       speed:150,
       lifeLike: true,
       callback: function(){
       	setTimeout(function(){$("#arrow").append("<p id='init'>initializing...</p>")},300)
       	setTimeout(function(){
       		$("#arrow").hide()
       		$(".element").remove();
       		$("#init").hide();
       		$("#content").show();
       	}, 2100)
       }

      });
    
	$("#pointer").click(function(){
    $("#psuedo-input").focus()
    $("#psuedo-input").val("")
    $("#command").empty()
		$(".typed-cursor").show()
	})

	$("#psuedo-input").on("input",function(){
		$("#command").text($("#psuedo-input").val())
	})

$("#psuedo-input").change(function(){
    if($("#psuedo-input").val() == "cd Who" || $("#psuedo-input").val() == "cd who" || $("#psuedo-input").val() == "cd cat Who" || $("#psuedo-input").val() == "cd cat who"){
      $("#error").empty()
      $("#psuedo-input").val("")
      $("#command").empty()
      $("#text").empty().append(Who).show()
      $("html, body").scrollTop( $(document).height() );
    } 

    else if($("#psuedo-input").val() == "cd What" || $("#psuedo-input").val() == "cd what" || $("#psuedo-input").val() == "cd cat What" || $("#psuedo-input").val() == "cd cat what" ){
      $("#error").empty()
      $("#psuedo-input").val("")
      $("#command").empty()
      $("#text").empty().append(What).show()
      $("html, body").scrollTop( $(document).height() );
    } 

    else if($("#psuedo-input").val() == "cd How" || $("#psuedo-input").val() == "cd how" || $("#psuedo-input").val() == "cd cat How" || $("#psuedo-input").val() == "cd cat how" ){
        $("#error").empty()
        $("#psuedo-input").val("")
        $("#command").empty()
        $("#text").empty().append(How).show()
        $("html, body").scrollTop( $(document).height() );
    } 

    else if($("#psuedo-input").val() == "cd Contact " || $("#psuedo-input").val() == "cd contact " || $("#psuedo-input").val() == "cd cat Contact" || $("#psuedo-input").val() == "cd cat contact" ){
        $("#error").empty()
        $("#psuedo-input").val("")
        $("#command").empty()
        $("#text").empty().append(Contact).show()
        $("html, body").scrollTop( $(document).height() );
    }

    else if($("#psuedo-input").val() == "cd Portfolio" || $("#psuedo-input").val() == "cd portfolio" ){
      $("#error").empty()
      $("#psuedo-input").val("")
      $("#command").empty()
      $("#text").empty().append(Portfolio).show()
      $("html, body").scrollTop( $(document).height() );
    } 

    else if($("#psuedo-input").val() == "cd github" || $("#psuedo-input").val() == "cd GitHub" || $("#psuedo-input").val() == "cd Github" ){
      $("#error").empty()
      $("#psuedo-input").val("")
      $("#command").empty()
      window.open("https://github.com/rgangu/Xuntos-Helps", "_blank");
      $("html, body").scrollTop( $(document).height() );
    }
     else if($("#psuedo-input").val() == "cd Devpost" || $("#psuedo-input").val() == "cd DevPost" || $("#psuedo-input").val() == "cd devpost" ){
      $("#error").empty()
      $("#psuedo-input").val("")
      $("#command").empty()
      window.open("http://devpost.com/software/abcaroh", "_blank");
      $("html, body").scrollTop( $(document).height() );
    } 
    else if($("#psuedo-input").val() == "help" || $("#psuedo-input").val() == "ls"){
      $("#error").empty()
      $("#psuedo-input").val("")
      $("#command").empty()
      $("#text").empty().append(Help).show()
      $("html, body").scrollTop( $(document).height() );
    } 

    else{
      
      $("#error").text("bash error: command " + "\"" + $("#psuedo-input").val() + "\"" + " does not exist. try again lol!")
      $("#psuedo-input").val("")
      $("#command").empty()
      $("html, body").scrollTop( $(document).height() );
    }


  })

	
})

function who(){
  $("#error").empty()
  $(".typed-cursor").hide()
  $("html, body").scrollTop( $(document).height() );
  $('#command').empty().typeIt({
    strings: ['cd Who'],
    speed:150,
    lifeLike: true,
    callback: function(){
      setTimeout(function(){
      $("#psuedo-input").val("")
      $("#command").empty()
      $("#text").empty().append(Who).show()
      $("html, body").scrollTop( $(document).height() );
    }, 1200)
    }
  })
  
}

function what(){
  $("#error").empty()
  $(".typed-cursor").hide()
  $("html, body").scrollTop( $(document).height() );
  $('#command').empty().typeIt({
    strings: ['cd What'],
    speed:150,
    lifeLike: true,
    callback: function(){
      setTimeout(function(){
      $("#psuedo-input").val("")
      $("#command").empty()
      $("#text").empty().append(What).show()
      $("html, body").scrollTop( $(document).height() );
    }, 1200)
  }
  })
}

function how(){
  $("#error").empty()
  $('.typed-cursor').hide()
  $("html, body").scrollTop( $(document).height() );
  $('#command').empty().typeIt({
    strings: ['cd How'],
    speed:150,
    lifeLike: true,
    callback: function(){
      setTimeout(function(){
      $("#psuedo-input").val("")
      $("#command").empty()
      $("#text").empty().append(How).show()
      $("html, body").scrollTop( $(document).height() );
    }, 1200)
    }
  })
}

function contact(){
  $("#error").empty()
  $('.typed-cursor').hide()
  $("html, body").scrollTop( $(document).height() );
  $('#command').empty().typeIt({
    strings: ['cd Contact'],
    speed:150,
    lifeLike: true,
    callback: function(){
      setTimeout(function(){
      $("#psuedo-input").val("")
      $("#command").empty()
      $("#text").empty().append(Contact).show()
      $("html, body").scrollTop( $(document).height() );
    }, 1200)
    }

  })
}

function portfolio(){
  $("#error").empty()
  $('.typed-cursor').hide()
  $("html, body").scrollTop( $(document).height() );
  $('#command').empty().typeIt({
    strings: ['cd Portfolio'],
    speed:150,
    lifeLike: true,
    callback: function(){
      setTimeout(function(){
      $("#psuedo-input").val("")
      $("#command").empty()
      $("#text").empty().append(Portfolio).show()
      $("html, body").scrollTop( $(document).height() );
    }, 1200)
    }
  })
}

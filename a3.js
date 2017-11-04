    // **************************************************************** 
     // ** Function Name : formValidationExample()
     // ****************************************************************
    

function formValidationExample()
{  
  var correctinput = true;
  correctinput = vEmail();
  correctinput = vPasswd();
  correctinput = vFname();
  correctinput = vLname();
  correctinput = vPhone();
  correctinput = vRadio();
  var repawd = document.getElementById("retypepassword").value.trim();
  if (repawd != "")
		correctinput = vrPasswd();
		
  if (correctinput != true)
		return false;

  return correctinput;
		
}


function vPasswd()
{	
  clearShowErrors();
  var flagg = true;
  var textf = document.getElementById("password").value.trim();
  var error = checkPasswd(textf);
  
  if (error != "")
	 { 
	   document.getElementById('erpass').innerHTML = error;
	   document.getElementById("password").focus();
	   document.getElementById("password").select();
	   flagg = false;
	 }
	 
  if (flagg)
     {
       var textf = document.getElementById("retypepassword").value.trim();
       if (textf != "")
		     flagg = vrPasswd();
	 }
		
  return flagg;
}


function vrPasswd()
{
  clearShowErrors();
  var flagg = true;
  var textf = document.getElementById("retypepassword").value.trim();
  var error = checkPasswd(textf);
  
  if (error != "")
     {
	   document.getElementById('errepass').innerHTML = error;
	   document.getElementById("retypepassword").focus();
	   document.getElementById("retypepassword").select();
	   flagg = false;
	 }
		
  if (flagg)
     {  
       var password = document.getElementById("password").value;
       if (textf != password)
	      {
	        document.getElementById('errepass').innerHTML = "Password and Repassword must be the same";
	        document.getElementById("password").focus();
	        document.getElementById("password").select();
	        flagg = false;
	      }
	 }
	 
  return flagg;
}

function checkPasswd(password)
{
  var error = "";
  var count=0;
  var lower=0;
  var upper=0;
  
  
  for (var i = 0; i < password.length; i++)
	  {
	    if(password.charCodeAt(i)>47 && password.charCodeAt(i)<58)
		count++;			
	  }
	for (var i = 0; i < password.length; i++)
	  {
	    if(password.charCodeAt(i)>96 && password.charCodeAt(i)<123)
		lower++;			
	  }
	  for (var i = 0; i < password.length; i++)
	  {
	    if(password.charCodeAt(i)>64 && password.charCodeAt(i)<91)
		upper++;			
	  }
	  
  if (lower==0)
		error = "Password must contain a lowercase character";
  else if (upper == 0)
		error = "Password must contain an uppercase character";
  else if (count==0)
		error = "Password must contain at least 1 number";
  else if (password.length < 8)
		error = "Password must be at least 8 characters long";
   
  return error;
}

function checkflName(name)
{
  var passAlpha = false;
  var error = "";
  var alphString = "-'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
 
  
 var length=name.length;
 if (length == 0)
	   error = "Name must be entered";
	 
  if (error == "")
  {
    for ( var i = 0; i <length; i++)
	    {
          if (alphString.indexOf(name.substr(i,1))>=0)
			 {
			 passAlpha = true;
			 }
		  else
		  {
			   error = "Name must contain letters, apostrophe, and hyphen only"
		      
			 }
			   		
	    }  
  }
   
   
  if (error == "")
  {		
    if (!passAlpha)
			error = "Name must contain at least one alphabetic character"
  }
	
	
  return error;
}

function vFname()
{  
  clearShowErrors();
  var flagg = true;
  var textf = document.getElementById("fname").value.trim();
  var error = checkflName(textf);
  
  if (error != "")
     {
	   document.getElementById('erfname').innerHTML = error;
	   document.getElementById("fname").focus();
	   document.getElementById("fname").select();
	   flagg = false;
	 }
	 
  return flagg;
}


function vLname()
{  
  clearShowErrors();
  var flagg = true;
  var textf = document.getElementById("lname").value.trim();
  var error = checkflName(textf);

  if (error != "")
     {
	   document.getElementById('erlname').innerHTML = error; 
	   document.getElementById("lname").focus();
	   document.getElementById("lname").select();
	   flagg = false;
	 }

  return flagg;	 
}




function vPhone()
{
  clearShowErrors();
  var flagg = true;
  var phone = document.getElementById("phone").value.trim();			
  var error = "";
  var numbers = "0123456789";

  if (phone.length != 12)
			error = "Phone number must be 12 digits and be 999-999-9999 format";
  
  var areaCode = phone.substr(0,3);
  var actNum = phone.substr(4,8);
  if (areaCode == "000" || actNum == "000-0000")
			error = "Area code or phone number cannot be all zeroes";	
		
  for (var i = 0; i < phone.length; i++)
	  {
	    if (i != 3 && i != 7)
		   {	 
		     if(!(numbers.indexOf(phone.substr(i,1))>=0))
		     error = "Phone number must be all digits in 999-999-9999 format";
           }
		else if (phone[i] != '-')
				  error = "Phone number must be all digits in 999-999-9999 format";
	  }
	 

  
  if (error != "")
     { 
       document.getElementById('erphone').innerHTML = error;
	   document.getElementById("phone").focus();
	   document.getElementById("phone").select();	  	   
	   flagg = false;
	 }
  
  return flagg;
}


function vRadio()
{
 clearShowErrors();
 var flagg = false;
 var len=document.form1.radio.length;
  
 for (var i = 0; i < len; i++)
      {
        if (document.form1.radio[i].checked == true)
				flagg = true;	
      }
  var error="Education status is required to fill out";
  if (flagg == false)
	     document.getElementById("erradio").innerHTML = error;   		
  
  return flagg;
}


function vEmail()
{
  clearShowErrors();
  var flagg = false;
  var textf = document.getElementById("email").value.trim();
  var count = textf.lastIndexOf(".");
  if (count  >= 0)
     {
	   count ++;
	   var domain = textf.substring(count, textf.length).toUpperCase();
 
	   for ( var j = 0; j < domain_list.length; j++)
	       {
		     if (domain == domain_list[j].domain_name)
					valid = true;
		   }
		for ( var i = 0; i < country_list.length; i++)
	       {
		     if (domain == country_list[i].country_code)
					valid = true;
		   }    
		   
		   
		 }
	 
  if (flagg == false)
     {
  	    document.getElementById('eremail').innerHTML = "Right part of the email field must be a dot (&#39;.&#39;) following by a valid top level domain name.";
	    document.getElementById("email").focus();
	    document.getElementById("email").select();
	 }
	 
  return flagg;
}


function bonuswork()
{
  var works = document.getElementById("workexp2");

  /* Create new workexperence as below */
   var place = document.createElement("p");
  place.setAttribute("class", "pp");
  place.innerHTML="Work Experience";
  works.appendChild(place);
  
  var para = document.createElement("p");
  para.setAttribute("class", "pp");
  para.appendChild(place);
  
  var texta = document.createElement("p"); 
   texta.setAttribute("class", "pp");
  
  var sec = document.createElement("div");
  sec.setAttribute("id", "div");
  sec.appendChild(para);
  sec.appendChild(texta);
  works.appendChild(sec);
  
  /* Create new Employer as below */
    var place = document.createElement("span");
  place.setAttribute("class", "span");
  place.innerHTML="Employer:";
  
  var lab = document.createElement("label");
  lab.setAttribute("class", "labell");
  lab.appendChild(place);
  
  var texta = document.createElement("input"); 
  texta.setAttribute("type", "text");
  texta.setAttribute("name", "employer");
  texta.setAttribute("class", "input");
  
  var sec = document.createElement("div");
  sec.setAttribute("id", "div");
  sec.appendChild(lab);
  sec.appendChild(texta);
  works.appendChild(sec);
  
  
  /* Create new Job Title as below */
  var place = document.createElement("span");
  place.setAttribute("class", "span");
  place.innerHTML="Job Title:";

  
  lab = document.createElement("label");
  lab.setAttribute("class", "labell");
  lab.appendChild(place);
  
  texta = document.createElement("input"); 
  texta.setAttribute("type", "text");
  texta.setAttribute("name", "jobtitle");
  texta.setAttribute("class", "input");

  var sec2 = document.createElement("div");
  sec2.appendChild(lab);
  sec2.appendChild(texta);
  works.appendChild(sec2);
  
  
  /* Create new Job Duty as below */
  var place = document.createElement("span");
  place.setAttribute("class", "span");
  place.innerHTML="Job Duty:";
  
  lab = document.createElement("label");
  lab.setAttribute("class", "labell");
  lab.appendChild(place);
  
  texta = document.createElement("textarea"); 
  texta.setAttribute("name", "jobduty");
  texta.setAttribute("class", "input");

  sec = document.createElement("div");
  sec.appendChild(lab);
  sec.appendChild(texta);

  var sec1 = document.createElement("section");
  sec1.setAttribute("id", "div");

  sec1.appendChild(sec);
  works.appendChild(sec1);


 /* Create new Years Worked as below */
  var place = document.createElement("span");
  place.setAttribute("class", "span");
  place.innerHTML="Worked Year:";
  
  lab = document.createElement("label");
  lab.setAttribute("class", "labell");
  lab.appendChild(place);
  
  texta = document.createElement("input"); 
  texta.setAttribute("type", "number");
  texta.setAttribute("name", "worked");
  texta.setAttribute("class", "input");
  texta.setAttribute("min", "1");
  texta.setAttribute("max", "20");

  sec  = document.createElement("div");
  sec.appendChild(lab);
  sec.appendChild(texta);
  works.appendChild(sec);
}

function clearShowErrors()
{  
  var errMessages = document.getElementsByClassName('error');
  for (var i = 0; i < errMessages.length; i++)
			errMessages[i].innerHTML = "";
}




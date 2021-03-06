// Js script to read Pet names from a JSON object and sort by owner's gender using ajax via url
// by: Cathy Forza
	$(document).ready(function() {   			      
                   $.ajax({
                     type: "GET",
                     url: "http://agl-developer-test.azurewebsites.net/people.json",
					 datatype: "jsonp",
                     success: function(data) {
                     ExtractJSONData(data);
                     },
                     error: ServiceFailed
                 }) ;
           
	});
		
		// Read through the json object(ownerPets) and create a list of all pets that are Cats sorted by the Pet owners
        // gender.		
		 function ExtractJSONData(ownerPets) {	 
		     var catDetails = "", gender = "" , genders = ["Male","Female"];
			 var maleCatOwners = [], femaleCatOwners = []; pets = ["Cat","Dog","Fish","Lizard"];
			 for (var k = 0; k < ownerPets.length; k++) {
				 var currentOwner = ownerPets[k];
				 var oOwnersGender = ownerPets[k].gender;
				 if (ownerPets[k].pets !== null) {
					for (var i = 0; i < currentOwner.pets.length; i++) {						
						var oPetName = "";
						// for the all Male Cat pet owners save their pet's name to an array 
						if (currentOwner.pets[i].type == pets[0] && oOwnersGender == genders[0] ) {
							var oPetName = ownerPets[k].pets[i] ;
							maleCatOwners.push(oPetName.name);
					    // Uncomment next line when testing
						//	console.log( "Pet Name: " + oPetName.name  + "  Owners Gender: "  + oOwnersGender );
						}
						// for the all Female Cat pet owners save their pet's name to an array 
						if (currentOwner.pets[i].type === pets[0] && oOwnersGender == genders[1] ) {
							var oPetName = ownerPets[k].pets[i] ;
							femaleCatOwners.push(oPetName.name);
							// Uncomment next line when testing
						//	console.log( "Pet Name: " + oPetName.name  + "  Owners Gender: "  + oOwnersGender );
						}					
					}		 
				 }				
			 }	
			 var returnData = "";			
			 $("div#myOutput").html(" ");
             if (maleCatOwners.length > 0) {
				 gender = "Male";			 
				 returnData = SortData(maleCatOwners,gender);
			 }else {
				 returnData = "No Male Cat Owners were found";
			 }
			 if (femaleCatOwners.length > 0) {
				 gender = "Female";
				 returnData = SortData(femaleCatOwners,gender);
			 }else {
				 returnData = "No Female Cat Owners were found";
			 }
			 // output the contents of both male and female arrays to id myOutput to display on the web page	
			 $("div#myOutput").html(returnData);
         }
		 
		 // sort both male and female arrays in alphabetical order if pet owners have Cats
		 function SortData(ownerPetData, gender) {  		
			 if (gender =="Male") {
				  var maleCatOwnersOutput = ownerPetData.sort();
				  returnData = "<table style='font-size:14pt;'><tr><th>Male</th></tr>";
				  for (var i = 0; i < maleCatOwnersOutput.length; i++) {
						returnData += "<tr><td>" + maleCatOwnersOutput[i] + "</td></tr>";
				  }
				  returnData = returnData + "</table>";
			 } 
			 if (gender == "Female") {
				  var femaleCatOwnersOutput = ownerPetData.sort();
				  returnData += "</br><table style='font-size:14pt;'><tr><th>Female</th></tr>";
				  for (var i = 0; i < femaleCatOwnersOutput.length; i++) {
					returnData += "<tr><td>" + femaleCatOwnersOutput[i] + "</td></tr>";
				  }
				  returnData = returnData + "</table>";
			 }
			return returnData;		 
		 }
		 		 
         function ServiceFailed(result) {
             alert("An error has occured. Error status: " + result.status + ' ' + result.statusText);
         } 		 
	
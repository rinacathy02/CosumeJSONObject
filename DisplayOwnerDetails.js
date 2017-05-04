// Javascript script to read Pet names from a JSON object and sort by owner's gender
// by: Cathy Forza

	   $(document).ready(function() {  
		  // JSON data of Owners and their pets 
		  var ownerPets = 	 [{"name":"Bob","gender":"Male","age":23,"pets":[{"name":"Garfield","type":"Cat"},{"name":"Fido","type":"Dog"}]},
                   {"name":"Jennifer","gender":"Female","age":18,"pets":[{"name":"Garfield","type":"Cat"}]},
				   {"name":"Steve","gender":"Male","age":45,"pets":null},
				   {"name":"Fred","gender":"Male","age":40,"pets":[{"name":"Tom","type":"Cat"},
				         {"name":"Max","type":"Cat"},{"name":"Sam","type":"Dog"},{"name":"Jim","type":"Cat"}]},
				   {"name":"Samantha","gender":"Female","age":40,"pets":[{"name":"Tabby","type":"Cat"}]},
				   {"name":"Alice","gender":"Female","age":64,"pets":[{"name":"Simba","type":"Cat"},{"name":"Nemo","type":"Fish"}]}]
		
		
		   // check that the json data is not empty before consuming it.
		   if (ownerPets.length > 0) {
				ExtractJSONData(ownerPets);
		   }		   	    
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
				 gender = genders[0];			 
				 returnData = SortData(maleCatOwners,gender);
			 }else {
				 returnData = "No Male Cat Owners were found";
			 }
			 if (femaleCatOwners.length > 0) {
				 gender = genders[1];
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
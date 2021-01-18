function load_programtype_dropdown(dropdown_name)
{

let dropdown = document.getElementById(dropdown_name);
set_dropdown_default(dropdown_name,"Select a program type");
set_dropdown_default("faculty","Select a faculty");
let program_types_set=new Set();


const json_url = gimme_json_url();
fetch(json_url)  
.then(  
	function(response)
	{  
	if (response.status !== 200)
	{  
		console.warn('Could not load JSON, status:' + 
		response.status);  
		return;  
	}

	response.json()
	.then(
	function(json_data)
	{  
		let option;
		//console.log(json_data);
		var num_programs=Object.keys(json_data["programs"]["program"]).length;
		for (let program_counter = 0; program_counter < num_programs; program_counter++)
		{
			var numtypes = Object.keys(json_data["programs"]["program"][program_counter]["program_type"]).length;
			for (let type_counter=0; type_counter < numtypes; type_counter++)
			{
				program_types_set.add(json_data["programs"]["program"][program_counter]["program_type"][type_counter]);
			}
		}   
				var num_program_types=program_types_set.size;
				//console.log(Array.from(program_types_set));
				//console.log(program_types_set.size);
				program_types_set.forEach(program_name => {
					option = document.createElement('option');
					option.text = program_name;
					option.value = program_name;
					dropdown.add(option);
				});


	}
	);  
		//console.log(program_types_set.size);
      
      }  
  )  
  .catch(function(err)
	{  
	console.error('Fetch Error -', err);  
	}
);
		//console.log(program_types_set.size);
}



function populate_faculty_dropdown(dropdown_name,program_type)
{

let dropdown = document.getElementById(dropdown_name);
set_dropdown_default(dropdown_name,"Select a faculty");
set_dropdown_default("program","Select a program");
let faculty_set=new Set();


const json_url = gimme_json_url();
fetch(json_url)  
.then(  
	function(response)
	{  
	if (response.status !== 200)
	{  
		console.warn('Could not load JSON, status:' + 
		response.status);  
		return;  
	}

	response.json()
	.then(
	function(json_data)
	{  
		let option;
		//console.log(json_data);
		var num_programs=Object.keys(json_data["programs"]["program"]).length;
		for (let program_counter = 0; program_counter < num_programs; program_counter++)
		{
			option = document.createElement('option');
			var numtypes = Object.keys(json_data["programs"]["program"][program_counter]["program_type"]).length;
			for (let type_counter=0; type_counter < numtypes; type_counter++)
			{
				var record_program_type=json_data["programs"]["program"][program_counter]["program_type"][type_counter];
				if (program_type === record_program_type)
				{
					faculty_set.add(json_data["programs"]["program"][program_counter]["faculty"]);
				}
			}
		}   
				var num_faculty=faculty_set.size;
				faculty_set.forEach(faculty_name => {
					option = document.createElement('option');
					option.text = faculty_name;
					option.value = faculty_name;
					dropdown.add(option);
				});


	}
	);  
		//console.log(program_types_set.size);
     //document.getElementById("faculty").setAttribute("disabled", "false");
      }  
  )  
  .catch(function(err)
	{  
	console.error('Fetch Error -', err);  
	}
);
		//console.log(program_types_set.size);
}





function populate_programs_dropdown(dropdown_name,program_type,faculty)
{

let dropdown = document.getElementById(dropdown_name);
let program_types_set=new Set();


const json_url = gimme_json_url();
fetch(json_url)  
.then(  
	function(response)
	{  
	if (response.status !== 200)
	{  
		console.warn('Could not load JSON, status:' + 
		response.status);  
		return;  
	}

	response.json()
	.then(
	function(json_data)
	{  
		let option;
		//console.log(json_data);
		var num_programs=Object.keys(json_data["programs"]["program"]).length;
		for (let program_counter = 0; program_counter < num_programs; program_counter++)
		{
			var record_faculty=json_data["programs"]["program"][program_counter]["faculty"];
			if (faculty === record_faculty)
			{
				var numtypes = Object.keys(json_data["programs"]["program"][program_counter]["program_type"]).length;
				for (let type_counter=0; type_counter < numtypes; type_counter++)
				{
					record_program_type=json_data["programs"]["program"][program_counter]["program_type"][type_counter];
					if (program_type === record_program_type)
					{
						option = document.createElement('option');
						option.text = json_data["programs"]["program"][program_counter]["title"];
						option.value = json_data["programs"]["program"][program_counter]["link"];
						dropdown.add(option);
					}
				}
			}
		}   
				/*var num_program_types=program_types_set.size;
				//console.log(Array.from(program_types_set));
				//console.log(program_types_set.size);
				program_types_set.forEach(program_name => {
					option = document.createElement('option');
					option.text = program_name;
					option.value = program_name;
					dropdown.add(option);
				});*/


	}
	);  
		//console.log(program_types_set.size);
      
      }  
  )  
  .catch(function(err)
	{  
	console.error('Fetch Error -', err);  
	}
);
		//console.log(program_types_set.size);
}

function load_dropdown(dropdown_name,default_text)
{

let dropdown = document.getElementById(dropdown_name);
dropdown.length = 0;

let default_option = document.createElement('option');
default_option.text = default_text;

dropdown.add(default_option);
dropdown.selectedIndex = 0;

const json_url = gimme_json_url();

fetch(json_url)  
  .then(  
    function(response) {  
      if (response.status !== 200) {  
        console.warn('Could not load JSON, status:' + 
          response.status);  
        return;  
      }

      // Examine the text in the response  
      response.json().then(function(json_data) 
      {  
	      let option;
	     //console.log(json_data);
	       //     var json_obj=response.json();
	var numprograms=Object.keys(json_data["programs"]["program"]).length;
//console.log(json_data["programs"]["program"][0]["title"]);
    	for (let i = 0; i < numprograms; i++)
	{
          option = document.createElement('option');
      	  option.text = json_data["programs"]["program"][i]["title"];
      	  option.value = json_data["programs"]["program"][i]["link"];
      	  dropdown.add(option);
    	}   
      });  
      
			
		 //var json_obj=response.json();

		//console.log(json_obj["programs"]);
      
      }  
  )  
  .catch(function(err)
	{  
	console.error('Fetch Error -', err);  
	}
);


}


function set_dropdown_default(dropdown_name,default_text)
{
	let dropdown = document.getElementById(dropdown_name);
	var i, L = dropdown.options.length - 1;
	for(i = L; i >= 0; i--)
	{
		dropdown.remove(i);
	}
	dropdown.length = 0;
	let default_option = document.createElement('option');
	default_option.text = default_text;
	dropdown.add(default_option);
	dropdown.selectedIndex = 0;
}

function degreeselected()
{
	var degreeselected=document.getElementById('degree');
	populate_faculty_dropdown("faculty",degreeselected.value);
	document.getElementById('gobutton').innerHTML="";

}

function facultyselected()
{
	var degreeselected=document.getElementById('degree');
	var facultyselected=document.getElementById('faculty');
	populate_programs_dropdown("program",degreeselected.value,facultyselected.value);
	document.getElementById('gobutton').innerHTML="";
}

function programselected()
{
	var programselected=document.getElementById('program');
	var linkurl="https://ontariotechu.ca/programs/"+programselected.value;
	document.getElementById('gobutton').innerHTML="";
	var a = document.createElement('a');
	a.setAttribute('href',linkurl);
	a.setAttribute('target',"");
	a.innerHTML = "View Program";
	document.getElementById('gobutton').appendChild(a);
	//console.log(linkurl);
}

function gimme_json_url()
{
	return 'http://localhost:8080/index.json';
}


const searchprograms = async searchstring => 
{
	const json_url = gimme_json_url();
	const res = await fetch(json_url);
	const uniprograms = await res.json();
	
	let fits = uniprograms.filter(programs =>
	{
		const regex = new RegExp(`^${searchstring}`, 'gi');
		return uniprograms.program.title.match(regex);
	});
  

	if (searchstring.length === 0)
	{
		fits = [];
		document.getElementById('resultsdiv').innerHTML = '';
	}

	result_html(fits);
};


const result_html = fits =>
{
  if (fits.length > 0) {
    const html = fits
      .map(
        fit => `
     <div class="row">
${fit.title}  ${fit.faculty} ${fit.summary} ${fit.link}

   </div>
     `
      )
      .join('');

    document.getElementById('resultsdiv').innerHTML = html;
  }
};


//control dropdowns
set_dropdown_default("degree","Select a program type");
load_programtype_dropdown("degree");
set_dropdown_default("faculty","Select a faculty");
//document.getElementById("faculty").setAttribute("disabled", "true");
set_dropdown_default("program","Select a program");
//document.getElementById("program").setAttribute("disabled", "true");

//search box

var search=document.getElementById('searchfield')
//document.addEventListener('input', () => searchprograms(search.value));
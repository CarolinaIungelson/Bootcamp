Handlebars.registerHelper('fullEducation', function(education) {
  return education.schoolName + "<br/>" + education.field+"<br/> ["+education.startYear+"-"+education.endYear+"]";
});
Handlebars.registerHelper('fullLanguages', function(language) {
  return language.name + ".<br> " + language.certificate+"<br/> ["+language.year+"]";
});
Handlebars.registerHelper('fullWorkExperience', function(work) {
  return work.place + "<br/> ["+work.date+"]";
});

var source = 
	'<h1 id="name">{{name}}</h1>'+
	'<div class="container">'+
		'<div id="general-information">'+
			'<table>'+
				'<tbody>'+
					'<tr>'+
						'<td class="title">Location</dt>'+
						'<td>{{location}}</dd>'+
					'</tr>'+
					'<tr>'+
						'<td class="title">Date of Birth</dt>'+
						'<td>{{dateBirth}}</dd>'+
					'</tr>'+
					'<tr>'+
						'<td class="title">E-mail</dt>'+
						'<td>{{email}}</dd>'+
					'</tr>'+
				'</tbdoy>'+
			'</table>'+
		'</div>'+
	'</div>'+
	'<div id="more-information" class="container apart">'+
		'<h2>Education</h2>'+
		'<ul>'+
		  '{{#each education}}'+
  			'<li>{{{fullEducation this}}}</li>'+
  		'{{/each}}'+
		'</ul>'+
		'<h2>Languages</h2>'+
		'<ul>'+
		  '{{#each languages}}'+
  			'<li>{{{fullLanguages this}}}</li>'+
  		'{{/each}}'+
		'</ul>'+
		'<h2>Work Experience</h2>'+
		'<ul>'+
		  '{{#each workExperience}}'+
		  	'<li>{{{fullWorkExperience this}}}</li>'+
		  '{{/each}}'+
		'</ul>'+
	'</div>';

var template = Handlebars.compile(source);

var htmlOut    = template(data);
$("#handlebars-container").html(htmlOut);
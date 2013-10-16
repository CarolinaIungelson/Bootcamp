var templateString= 
	'<h1 id="name">{name}</h1>'+
		'<div class="container">'+
			'<div id="general-information">'+
				'<table>'+
					'<tbody>'+
						'<tr>'+
							'<td class="title">Location</dt>'+
							'<td>{location}</dd>'+
						'</tr>'+
						'<tr>'+
							'<td class="title">Date of Birth</dt>'+
							'<td>{dateBirth}</dd>'+
						'</tr>'+
						'<tr>'+
							'<td class="title">E-mail</dt>'+
							'<td>{email}</dd>'+
						'</tr>'+
					'</tbdoy>'+
				'</table>'+
			'</div>'+
		'</div>'+
		'<div id="more-information" class="container apart">'+
			'<h2>Education</h2>'+
			'<ul>'+
			  '{#education}'+
	  			'<li>{schoolName}<br/>{field}<br/>[{startYear}-{endYear}]</li>'+
	  		'{/education}'+
			'</ul>'+
			'<h2>Languages</h2>'+
			'<ul>'+
			  '{#languages}'+
	  			'<li>{name}<br/>{certificate}<br/>[{year}]</li>'+
	  		'{/languages}'+
			'</ul>'+
			'<h2>Work Experience</h2>'+
			'<ul>'+
			  '{#workExperience}'+
			  	'<li>{place}<br/>[{date}]</li>'+
			  '{/workExperience}'+
			'</ul>'+
		'</div>';		


var compiled = dust.compile(templateString, "intro");
dust.loadSource(compiled);
dust.render("intro", data, function(err, out) {
    $('#dust-container').html(out);
});
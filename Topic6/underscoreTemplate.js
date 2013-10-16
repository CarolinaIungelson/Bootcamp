var templateString =
	'<h1 id="name"><%= name %></h1>'+
	'<div class="container">'+
		'<div id="general-information">'+
			'<table>'+
				'<tbody>'+
					'<tr>'+
						'<td class="title">Location</dt>'+
						'<td><%= location %></dd>'+
					'</tr>'+
					'<tr>'+
							'<td class="title">Date of Birth</dt>'+
							'<td><%= dateBirth %></dd>'+
						'</tr>'+
						'<tr>'+
							'<td class="title">E-mail</dt>'+
							'<td><%= email %></dd>'+
						'</tr>'+
				'</tbody>'+
			'</table>'+
		'</div>'+
	'</div>'+
	'<div id="more-information" class="container apart">'+
			'<h2>Education</h2>'+
			'<ul>'+
      '<% _.each( education, function( educationItem ) { %> '+
        '<li>'+
          '<%- educationItem.schoolName %><br/>'+
            '<%- educationItem.field %><br/>'+
            '[<%- educationItem.startYear %>-'+
            '<%- educationItem.endYear %>]'+
        '</li>'+
		  '<% }); %>'+
			'</ul>'+ 
			'<h2>Languages</h2>'+
			'<ul>'+
      '<% _.each( languages, function( languageItem ) { %> '+
        '<li>'+
          '<%- languageItem.name %><br/>'+
            '<%- languageItem.certificate %><br/>'+
            '[<%- languageItem.year %>]'+            
        '</li>'+
		  '<% }); %>'+
			'</ul>'+ 
			'<h2>Work Experience</h2>'+
			'<ul>'+
      '<% _.each( workExperience, function( workExperienceItem ) { %> '+
        '<li>'+
          '<%- workExperienceItem.place %><br/>'+            
            '[<%- workExperienceItem.date %>]'+            
        '</li>'+
		  '<% }); %>'+
			'</ul>'+ 
		'</div>';
		

var htmlOut = _.template(templateString, data);
$("#underscore-container").html(htmlOut);
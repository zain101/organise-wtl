$('#search').keyup(function () {
	$.getJSON('data.json', function (data) {
		//var info= a.resoponseText;
		//console.log(info);
		var searchFeild= $('#search').val();
		var myExp= new RegExp(searchFeild, 'i');
		
		var output = '<ul class= "searchResult">';
		$.each(data, function (key, value) {
			console.log(data);
			console.log(value.shortname);
			console.log(value.bio);
			if((value.name.search(myExp)!= -1) || (value.bio.search(myExp)!= -1)){
				output += '<li>';
				output += '<h1>' + value.name + '</h1>';
				output += '<img src="images/' + value.shortname + '.jpg"  height="100px" width="100px"  alt= "' + value.name + ' " />';
				output += '<p>' + value.bio + '</p>';
				output += '</li>';
			}
		});
		output += '</ul>';
		$('#update').html(output);
	});
});

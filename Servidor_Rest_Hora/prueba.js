function addOne(request, response){
	const n = parseInt(request.body.number);
	response.send({number : n+1});
}

module.exports = {
	addOne : addOne
}
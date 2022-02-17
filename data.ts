export const data = () => {
	const response = []
	for(let i = 1; i < 100; i++) {
		response.push({id: i, name: `test ${i}`, field1: Math.random()})
	}

	return response
}
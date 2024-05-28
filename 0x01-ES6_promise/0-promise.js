function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
	  resolve('Success!') or reject(new Error('Failed!'))
  });
}

export default getResponseFromAPI;

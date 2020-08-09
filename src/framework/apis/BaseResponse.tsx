const getResponse = (request: any) => {
	return request.then((res: { status: number; data: { [x: string]: any; messageCode: any; data: any } }) => {
		if (res.status === 200) {
			const { messageCode, data, ...restData } = res.data;
			const result = Object.assign({}, { messageCode: messageCode }, data, restData);
			if (messageCode === 'COMM-OK') return Promise.resolve(result);
			else if (messageCode === 'USER-004') window.location.href = '/sign-in';
			else return Promise.reject(res.data.message);
		} else {
			return Promise.reject(res.status);
		}
	});
};

export default getResponse;

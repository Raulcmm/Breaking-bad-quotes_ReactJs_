import { useState, useEffect } from 'react';
const useFetch = (initialState) => {
	const [ data, setData ] = useState(initialState);
	const [reload, setReload] = useState(1)

		useEffect(() => {
			let endPoint = `https://breaking-bad-quotes.herokuapp.com/v1/quotes`;
			fetch(endPoint).then((res) => res.json()).then((info) => {
				setData(info[0]);
			});
		}, [setData,reload]);
	return {
		data,
		setReload
	};
};

export default useFetch;

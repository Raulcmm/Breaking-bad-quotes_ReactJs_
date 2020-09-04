import React from 'react';

import styled from '@emotion/styled';
import Quote from './components/Quote';
import useFetch from './hooks/useFetch';
import logo from './assets/img/logo.svg';
const Container = styled.div`
	max-width: 80%;
	margin: 0 auto;
	height: 90vh;
	display: grid;
	place-items: center;
`;

const Button = styled.button`
	text-transform: uppercase;
	font-weight: 700;
	color: #ffffff;
	padding: .7rem 5rem;
	background-color: rgb(38, 146, 21);
	border: 1px solid rgb(38, 146, 21);
	border-radius: .7rem;
	&:hover {
		cursor: pointer;
		background-color: rgb(29, 99, 18);
	}
`;

const App = () => {
	const { data, setReload } = useFetch({});

	return (
		<Container>
			<figure>
				<img src={logo} alt="hol" />
			</figure>
			<Quote data={data} />
			<Button onClick={() => setReload((reload) => !reload)}>New quote</Button>
		</Container>
	);
};

export default App;

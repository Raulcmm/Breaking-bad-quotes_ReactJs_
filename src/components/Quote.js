import React from 'react';
import styled from '@emotion/styled';

const Card = styled.div`
	background-color: #ffffff;
	color: #000000;
	border-radius: .5rem;
	width: 70%;
	& p {
		display: flex;
        flex-direction: column;
        font-size:30px
	}
`;

const Cite = styled.cite`
	font-weight: 700;
    align-self: flex-end;
    font-size:18px;
`;
const Quote = ({ data }) => {
	if (Object.keys(data).length0) return null;
	const { quote, author } = data;
	return (
		<Card>
			<blockquote>
				<p>
                        "{quote }"
					<br />
					<Cite>-{author}</Cite>
				</p>
			</blockquote>
		</Card>
	);
};

export default Quote;

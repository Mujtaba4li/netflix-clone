import React from 'react'
import { Container } from './styled'
import { IPos } from '@styles/util'
import { T20, T20Bold } from '@styles/typo'

interface ICardRow extends IPos {
	title?: string
}

const CardRow = (p: ICardRow) => {
const {title}=p;

	return (
		<Container {...p}>
			<T20Bold>{title}</T20Bold>
		</Container>
	)
}

export default CardRow

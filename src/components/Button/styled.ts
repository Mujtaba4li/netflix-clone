import styled from '@emotion/styled'
import { T14BoldSpaced } from '@styles/typo'
import { withPos } from '@styles/util'
import Button from '@components/Button'
import { darkRed } from '@styles/colors'

interface IButton {
	background?: string
	color?: string
	opacity?: boolean
	width?: string
}

export const Container = withPos(styled.button<IButton>`
	display: flex;
	align-items: center;
	justify-content: center;

	width: ${p => (p.width ? p.width : '100')};

	padding: 20px 30px;

	border-radius: 8px;
	border: none;

	gap: 5rem;

	background-color: ${p => (p.background ? `${p.background}` : 'black')};
	${p => p.opacity && `background-color: rgba(0, 0, 0, 0.5);`}

	cursor: pointer;

	outline: 2px solid transparent;
	transition: all 0.2s ease-in-out;

	:focus-visible {
		outline: 2px solid 'orange' 88; // 0x88 = 50% opacity
	}

	color: ${p => (p.color ? p.color : 'white')};
`)

export const Icon = styled.img`
	height: 25rem;
`
export const Text = styled(T14BoldSpaced)<IButton>`
	color: ${p => (p.color ? p.color : 'white')};
`

export const SignButton = styled.div`
	display: flex;
	background-color: ${darkRed};

	padding: 15rem;

	justify-content: center;
	align-content: center;

	border-radius: 5rem;

	cursor: pointer;
	:active {
		opacity: 0.7;
	}
`

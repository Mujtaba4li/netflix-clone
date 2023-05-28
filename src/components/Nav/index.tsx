import { T14,  } from '@styles/typo'
import React, { useEffect, useState } from 'react'
import { Container, Logo } from './styled'
import { NetflixSVG, ProfileIMG } from '@assets/components/Nav'
import { IPos } from '@styles/util'
import { useNavigate } from 'react-router-dom'
import { SignButton } from '@components/Button/styled'

interface INav extends IPos {}

const Nav = (p: INav) => {
	const [scrolled, setScrolled] = useState(false)
	const Navigate = useNavigate()

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 0
			setScrolled(isScrolled)
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const handleLogo = () => {
		Navigate('/home')
	}

	const handleProfileButton = () => {
		Navigate('/editprofile')
	}

	const handleSigin=()=>{
		Navigate('/signin')
	}

	return (
		<Container {...p} scrolled={scrolled}>
			<Logo src={NetflixSVG} onClick={handleLogo} />


			<Logo src={ProfileIMG} onClick={handleProfileButton} />
			<SignButton onClick={handleSigin}>
				<T14 white>Sign in</T14>
			</SignButton>
		</Container>
	)
}

export default Nav

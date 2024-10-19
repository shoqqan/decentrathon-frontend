import Lottie from 'react-lottie'
import animationData from '@/../public/images/money.json'

export function MoneyLottie() {

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData,}
	return (
		<Lottie options={defaultOptions}
						height={200}
						width={200}/>
	)
}


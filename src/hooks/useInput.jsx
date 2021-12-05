import { useState } from 'react'

const useInput = (initial, required) => {
	const [value, setValue] = useState(initial)
	const [error, setError] = useState(null)


	return {
		value,
		error,
		setError: (error) => setError(error),
		reset: (value) => setValue(value),
		onChange: (e) => setValue(e.target.value),
		onBlur: (e) => {
			if (!e.target.value && required) return setError('Required field')
			else setError(null)
		},
	}
}

export default useInput

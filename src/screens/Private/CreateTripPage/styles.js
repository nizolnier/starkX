import styled from 'styled-components'

export const CreationForm = styled.form`
	padding: 1em;
	margin: auto;
	margin-bottom: 3em;
	display: flex;
	flex-direction: column;
	gap: 1.2em;
  width: 30vw;
  background-color: white;
  border-radius: 5px;
  @media screen and (min-device-width : 320px) and (max-device-width : 420px) {
    width: 90vw;
    
  }
`
export const CreateContainer = styled.div`
  background-color: black;
  width: auto;
  height: 100vh;
`
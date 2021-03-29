import styled from 'styled-components'

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 3em;
  padding: 1em;
  padding-bottom: 0;
`
export const Line = styled.div`
  width: 60px;
  height: 2px;
  background-color: white;
  margin-bottom: 1em;
`

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const BlackContainer = styled.div`
  background-color: black;
  color: white;
  width: auto;
  height: 120vh;
`
import styled from 'styled-components'

const DropZone = styled.div`
  background-color: white;
  border: 1px solid black;
  min-height: 100px;
  width: 100%;

  &:hover {
    background-color: graylight;
    border: 1px solid blue;
  }
`

export { DropZone }

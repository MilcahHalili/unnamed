import styled from 'styled-components'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const Div = styled.div`
  max-width: 800px;
  width: 60%;
`

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  border: 1px solid #707070;
  padding: 20px;
  resize: none;
`

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const UploadBtn = styled.button`
  width: 40px;
  height: 30px;
  margin: 20px 20px 0 0;
`

const PostBtn = styled.button`
  width: 150px;
  height: 30px;
  border-radius: 50px;
  background-color: #AEC1F6;
  margin: 20px 0 0 0;
`

const Username = styled.h2`
  color: #AEC1F6;
  text-transform: uppercase;
`

const Img = styled.img`
  width: 100%;
  max-height: 400px;
`

const P = styled.p`
  width: 100%;
  font-size: 16px;
`

export {
    Main,
    Div,
    TextArea,
    BtnContainer,
    UploadBtn,
    PostBtn,
    Username,
    Img,
    P
}
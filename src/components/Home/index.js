import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  Main,
  Body,
  Div1,
  Div2,
  MainHeading,
  Image,
  MiniDiv,
  Div3,
  Button,
  TextArea,
} from './styled'

class Home extends Component {
  state = {
    bold: false,
    italic: false,
    underline: false,
    text: '',
  }

  onClickBold = () => {
    this.setState(prev => ({bold: !prev.bold}))
  }

  onClickItalic = () => {
    this.setState(prev => ({italic: !prev.italic}))
  }

  onClickUnderline = () => {
    this.setState(prev => ({underline: !prev.underline}))
  }

  onChangeText = event => {
    this.setState({text: event.target.value})
  }

  render() {
    const {bold, italic, underline, text} = this.state
    return (
      <Main>
        <Body>
          <Div1>
            <MainHeading>Text Editor</MainHeading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </Div1>
          <Div2>
            <MiniDiv>
              <Div3>
                <Button
                  data-testid="bold"
                  show={bold}
                  onClick={this.onClickBold}
                  type="button"
                >
                  <VscBold size={25} />
                </Button>
                <Button
                  data-testid="italic"
                  show={italic}
                  onClick={this.onClickItalic}
                  type="button"
                >
                  <GoItalic size={25} />
                </Button>
                <Button
                  data-testid="underline"
                  show={underline}
                  onClick={this.onClickUnderline}
                  type="button"
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </Div3>
              <hr />
              <TextArea
                onChange={this.onChangeText}
                value={text}
                showBold={bold}
                showItalic={italic}
                showUnderline={underline}
              />
            </MiniDiv>
          </Div2>
        </Body>
      </Main>
    )
  }
}

export default Home

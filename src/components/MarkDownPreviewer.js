import React from "react";
import { Container, Row, Col, Input, Label } from "reactstrap";
import "../styles/MarkDownPreviewer.css";
import marked from "marked";

class MarkDownPreviewer extends React.Component {
  componentDidMount() {
    marked.setOptions({
      breaks: true,
      gfm: true,
      xhtml: true
    });
  }

  getMarkdown(text) {
    let raw = marked(text);
    return { __html: raw };
  }

  handleMarkdownPreviewerChange = (e) => {
    this.props.handleMarkdownPreviewerChangeInApp(e);
  };

  render() {
    const { editorText } = this.props;

    return (
      <Container id="markdown-previewer">
        <Row className="ContainerRow">
          <Col xs="auto" className="Editor">
            <Label for="editor" id="editorLabel">
              Editor
            </Label>
            <Input
              type="textarea"
              name="editor"
              id="editor"
              onChange={(e) => this.handleMarkdownPreviewerChange(e)}
              value={editorText}
            />
            <Label for="preview" id="previewerLabel">
              Previewer
            </Label>
            <Col xd="auto" className="Previewer">
              <div
                id="preview"
                name="preview"
                dangerouslySetInnerHTML={this.getMarkdown(editorText)}
              />
            </Col>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MarkDownPreviewer;

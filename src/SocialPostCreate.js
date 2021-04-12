import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Alert, Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'

class SocialPostCreate extends Component {
    emptyItem = {
        userId: '',
        postTitle: '',
        postContent: '',
    }

    constructor(props) {
        super(props)
        this.state = {
            item: this.emptyItem,
            errorMessage: null,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const target = event.target
        const value = target.value
        const name = target.name
        let item = {...this.state.item}
        item[name] = value
        this.setState({item})
    }

    async handleSubmit(event) {
        event.preventDefault()
        const {item} = this.state

        let result = await this.props.api.create(item)

        if (!result.ok) {
            this.setState({errorMessage: `Some error message or another ${result.statusText}`})
        }
        else {
            this.setState({errorMessage: null})
            // this.props.history.push('/posts')
        }
    }

    render(){
        const {item} = this.state
        return (
            <div>
                {this.props.navbar}
                <Container style={{textAlign: 'left'}}>
                    <h2>Post your own Post</h2>
                    <Form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <FormGroup>
                                <Label for="userId">UserId</Label>
                                <Input type="text" name="userId" id="userId" value={item.userId || ' '} onChange={this.handleChange} autoComplete="userId"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="postTitle">Post Title</Label>
                                <Input type="text" name="postTitle" id="postTitle" value={item.postTitle || ''} onChange={this.handleChange} autoComplete="postTitle"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="postContent">Post Content</Label>
                                <Input type="text" name="postContent" id="postContent" value={item.postContent || ''} onChange={this.handleChange} autoComplete="postContent"/>
                            </FormGroup>
                        </div>
                        <FormGroup>
                            <Button color="primary" type="submit">Save</Button>
                            <Button color="secondary" tag={Link} to="/">Cancel</Button>
                        </FormGroup>
                    </Form>
                </Container>
            </div>
        )
    }


}

export default withRouter(SocialPostCreate)
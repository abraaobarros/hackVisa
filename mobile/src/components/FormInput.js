import React from "react";


export default class FormInput extends React.Component {
    constructor(props) {
        super(props)
    }

    onChange = async (value) => {
        await this.setState({value});
        await this.props.onChange(value, this.validate())
    }

    validate = () => {
        throw new Error('You have to implement the method doSomething!');
    }
}

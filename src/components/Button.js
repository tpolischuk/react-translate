import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {

    //MUST be called contextType
    static contextType = LanguageContext;

    render() {
        const text = this.context === 'english' ? 'Submit' : 'Voorlegen';
        return <button className="ui button primary">{text}</button>;
    }
}

export default Button;
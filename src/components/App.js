import React from 'react';

class App extends React.Component {

    state = { language: 'english' };

    onLanguageChange = (language) => {
        this.setState({ language });
    }

    render() {
        return (
            <div className="ui container">
                <div>
                    <i onClick={() => this.onLanguageChange('english')} className="flag us" />
                    <i onClick={() => this.onLanguageChange('dutch')} className="flag nl" />
                </div>
                {this.state.language}
            </div>
        );
    }
}

export default App;
import React from 'react'

const Login = () => {


    return (

        <div>
            <div className='form-page__wrapper'>
                <div className='form-page__form-wrapper'>
                    <div className='form-page__form-header'>
                        <h2 className='form-page__form-heading'>Login</h2>
                    </div>
                    <Form data={formState} dispatch={dispatch} history={this.props.history} onSubmit={this._login} btnText={'Login'} error={error} currentlySending={currentlySending} />
                </div>
            </div>
        </div>
    )
}
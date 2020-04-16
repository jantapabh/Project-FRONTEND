import React, {Component} from 'react'
import ErrorMessage from './ErrorMessage'
import LoadingButton from './LoadingButton'



class Form extends Component {

  render () {
    const {error} = this.props

    return (
      <form className='form' onSubmit={this._onSubmit}>
        {error ? <ErrorMessage error={error} /> : null}
        <div className='form__field-wrapper'>
          <input
            className='form__field-input'
            type='text'
            id='username'
            value={this.props.data.username}
            placeholder='frank.underwood'
            onChange={this._changeUsername}
            autoCorrect='off'
            autoCapitalize='off'
            spellCheck='false' />
          <label className='form__field-label' htmlFor='username'>
            Username
          </label>
        </div>
        <div className='form__field-wrapper'>
          <input
            className='form__field-input'
            id='password'
            type='password'
            placeholder='••••••••••'
         />
          <label className='form__field-label' htmlFor='password'>
            Password
          </label>
        </div>
        <div className='form__submit-btn-wrapper'>
          {this.props.currentlySending ? (
            <LoadingButton />
          ) : (
            <button className='form__submit-btn' type='submit'>
            
            </button>
             )}
        </div>
      </form>
    )
  }


}

Form.propTypes = {
  dispatch: React.PropTypes.func,
  data: React.PropTypes.object,
  onSubmit: React.PropTypes.func,
  changeForm: React.PropTypes.func,
  btnText: React.PropTypes.string,
  error: React.PropTypes.string,
  currentlySending: React.PropTypes.bool
}

export default Form
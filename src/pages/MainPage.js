import React from 'react'
import Nav from './components/common/Nav'

const MainPage = () => {

    return (
        <div>
            <div className='wrapper'>
                <Nav />
            </div>
        </div>
    )
}

function select (state) {
    return {
      data: state
    }
  }
  

export default MainPage;
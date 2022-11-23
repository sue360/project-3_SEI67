
import React from 'react'

const Profile = () => {


  return (
    <div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        margin: '18px 0px',
      }}>
        <div>
          <img style={{ width: '160px', height: '160px', borderRadius: '80px' }}
            src="https://images.unsplash.com/photo-1528271537-64e11fc31bba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          />
        </div>
        <div>
          <h2> whatever blah </h2>
          <div style={{ diplay: 'flex', justifyContent: 'space-between', width: '100%' }} >
            <h5> bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </h5>
            <h5> bla bla bla 2</h5>
            <h5> bla bla bla 3</h5>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Profile
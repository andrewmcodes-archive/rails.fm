import React from 'react'

import { Segment } from '../components/segment'
import { Link } from '../components/link'
import { Canberra } from '../components/canberra'

export default () => (
  <>
    <Canberra title='404 Not Found' />
    <Segment>
      <div className='container'>
        <img
          src='https://media.giphy.com/media/hEc4k5pN17GZq/giphy.gif'
          alt='porque no los dos? meme'
        />
        <h1>Ooops</h1>
        <h2>looks like you done screwed up</h2>
        <p>
          it seems that page doesnt exist. go back <Link to='/'>home</Link>?
        </p>
      </div>
    </Segment>
  </>
)

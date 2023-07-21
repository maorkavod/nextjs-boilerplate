import React from 'react'
import { getData }  from '../utils/data'
import PropTypes from 'prop-types';
import Products from '../components/UI/products'

export default function Home ({ data }) {
  return (
    <div className='flex max-w-screen-xl mx-auto'>
      <div className='flex-1 w-30'>
      {/* {data.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          </div>
      ))} */}
      </div>
      <div className='flex-1 w-70'>
        <Products />
      </div>
      <div className='flex-1 w-30'>
        
      </div>
    </div>
  )
}

export async function getServerSideProps () {
  const data = await getData()

  return { props: { data } }
}

Home.propTypes = {
  data: PropTypes.array.isRequired,
};
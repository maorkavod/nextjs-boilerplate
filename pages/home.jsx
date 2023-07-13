import React from 'react';
import Button from "../components/UI/Button"


export default function Home({ data }) {
    return (   
        <div>
            <Button/>
        </div>
    )
    // Render data...
  }
   
  // This gets called on every request
  export async function getServerSideProps() {

    const data = []
   
    // Pass data to the page via props
    return { props: { data } }
  }
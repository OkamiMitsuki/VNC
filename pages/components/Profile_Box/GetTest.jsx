import * as React from 'react';
import fetch from 'node-fetch'
import useSWR from 'swr';

export async function GetTest() {
  const res = await fetch('http://localhost:3000/api/VcLamy')
  const Vcdata = await res
  return (
    <p> {Vcdata} </p>
  )
}
export default GetTest
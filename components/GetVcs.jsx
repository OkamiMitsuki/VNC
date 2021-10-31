import * as React from 'react';
import fetch from 'node-fetch'

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/VcLamy')
  const Vcdata = await res
  return { props: Vcdata }
}
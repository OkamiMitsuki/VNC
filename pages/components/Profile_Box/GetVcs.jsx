import * as React from 'react';
import useSWR from 'swr';

export default function GetVcs() {
  const { data, error } = useSWR('/api/VcLamy')
  if (error) return <div>faild to load</div>
  if (!data) return <div>loading...</div>

  return (
    <p>{data.title}</p>
  )
}
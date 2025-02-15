import React from 'react'
type ParamProps = {
    params: {
        id: string
    }
};

export default function page({params} : ParamProps) {
  return (
    <div>Page {params.id}</div>
  )
}

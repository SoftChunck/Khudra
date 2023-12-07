import React from 'react'
import { Image, TouchableOpacity } from 'react-native'

export default function ImageIcon({path}) {
  return (
    <TouchableOpacity>
        <Image 
     width={32}
     height={32}
     source={path}
    />
    </TouchableOpacity>
  )
}

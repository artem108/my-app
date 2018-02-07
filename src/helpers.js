import React, { Component } from 'react'

export function getRandom(num) {

  const number = Number(num)

  const randomNum = Math.round(Math.random() * 10)
  for (var i = 0; i < num; i++) {
    console.log(randomNum);
    if (i === randomNum) {
      return true
    }
  }
  return false
}

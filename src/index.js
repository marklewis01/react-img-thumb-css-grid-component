import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

import Grid from './Grid'
import Thumb from './Thumb'

import './styles.css'

const images = [
  {
    alt: '1-Some alt text',
    imageUrl:
      'https://images.unsplash.com/photo-1523730647456-cc896ae6243a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b6f1c29695debe4443c503119d6198e0&auto=format&fit=crop&w=500&q=60',
    title: '1-Title from list text',
    overlayBackground: 'tomato',
    textBackground: 'purple',
    textColor: 'green'
  },
  {
    alt: '2-Some alt text',
    imageUrl:
      'https://images.unsplash.com/photo-1510552817210-27e15f32db3d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d7310d5eab22332f43df226da3031639&auto=format&fit=crop&w=500&q=60',
    title: '2-Title from list text',
    color: 'blue'
  },
  {
    alt: '3-Some alt text',
    imageUrl:
      'https://images.unsplash.com/photo-1514926239779-5d5019ec302b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ddd03d8080483c00723e6f16ef9d20ff&auto=format&fit=crop&w=500&q=60',
    title: '3-Title from list text',
    color: 'green',
    textBackground: 'white',
    textColor: 'black'
  },
  {
    alt: '4-Some alt text',
    imageUrl:
      'https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7dd4351794fdd325ab865ced79786118&auto=format&fit=crop&w=500&q=60',
    title: '4-Title from list text',
    color: 'orange'
  }
]

function App() {
  return (
    <Fragment>
      <Grid columns={3}>
        <div className="grid-cell">
          <div className="square-image" />
          <div className="text-wrapper">
            <div className="text">John Doe</div>
          </div>
        </div>
        <Thumb />
        <Thumb title="a sample title" />
      </Grid>
      <br />
      <Grid columns={8}>
        <Thumb />
        <Thumb />
        <Thumb />
        <Thumb
          alt="Some alt text"
          imageUrl="https://source.unsplash.com/random"
          title="Some title text"
        />
      </Grid>
      <br />
      <Grid columns={4}>
        {images.map(image => (
          <Thumb
            alt={image.alt}
            imageUrl={image.imageUrl}
            key={image.title}
            title={image.title}
            color={image.color}
            overlayBackground={image.overlayBackground}
            textBackground={image.textBackground}
            textColor={image.textColor}
          />
        ))}
      </Grid>
    </Fragment>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

/**
 * Props:
 *  img alt text
 *  youtube link
 *  thumb-image
 *  project title
 *  small/large
 */

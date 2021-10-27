import { Button, ButtonGroup } from '@material-ui/core'

export default function Home() {
  return (
    <>
      <div style={{ margin: '0.5em' }}>
        <Button variant="contained">Default</Button>{' '}
        <Button variant="contained" color="primary">Primary</Button>{' '}
        <Button variant="contained" color="secondary">Secondary</Button>{' '}
        <Button variant="contained" disabled>Disabled</Button>{' '}
        <Button variant="contained" color="primary" href="https://google.com/">LINK</Button>
      </div>
      <div style={{ margin: '0.5em' }}>
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </div>
    </>
  )
}
import AnnouncementsList from '../../src/features/announcements/components/AnnouncementsList'
import { it, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'

describe('AnnouncementsList', () => {
  it('should render list of announcements when fetching data was successfull', () => {
    render(<AnnouncementsList />)

    screen.debug()
  })
})

import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'

type MenuButtonProps = { background?: string }

export const MenuButton = styled(Button)<MenuButtonProps>(({ background, theme }) => ({
  display: 'inline-block',
  padding: '.75rem 1.25rem',
  color: '#fff',
  textTransform: 'uppercase',
  fontSize: '1rem',
  letterSpacing: '.15rem',
  transition: 'all .3s',
  position: 'relative',
  overflow: 'hidden',
  zIndex: '1',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: '0',
    width: '100%',
    height: '0%',
    backgroundColor: background || theme.palette.primary.light,
    zIndex: -1,
    transition: 'all .3s',
  },
  '&:hover': {
    color: '#fff',
    '&::before': {
      height: '100%',
    },
  },
}))

import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, IconButton } from '@mui/material';

export const StyledAppBar = styled(AppBar)``;

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  maxWidth: '100%',
  alignItems: 'center',
  justifyContent: 'space-between',
  minHeight: '64px',
  boxSizing: 'border-box',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    padding: theme.spacing(1),
    '& .MuiTypography-h6': {
      fontSize: '1.1rem'
    }
  },
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    padding: '0 16px'
  }
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  border: '1px solid currentColor',
  borderRadius: theme.shape.borderRadius,
  boxSizing: 'border-box',
  maxWidth: '100%',
  '& .MuiTypography-root': {
    marginRight: theme.spacing(1),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1),
    marginTop: theme.spacing(1),
    '& .MuiTypography-root': {
      display: 'none'
    }
  },
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(1),
    '& .MuiTypography-root': {
      display: 'inline'
    }
  }
}));

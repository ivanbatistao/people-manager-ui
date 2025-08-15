import { Suspense, lazy } from "react";
import { Box, Typography, Toolbar, CircularProgress } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { dialogOpenSubject$ } from "../customDialog/subjects";
import { CustomDialog } from "../customDialog/CustomDialog";
import { StyledAppBar, StyledToolbar, StyledIconButton } from './Navbar.styles';

// Lazy load the FavoriteTable component
const FavoriteTable = lazy(() => import('./favoriteTable/FavoriteTable'));

const Navbar: React.FC = () => {
  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  };

  return (
    <Box sx={{ mb: 2 }}>
      <CustomDialog>
        <Suspense fallback={
          <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
            <CircularProgress />
          </Box>
        }>
          <FavoriteTable />
        </Suspense>
      </CustomDialog>
      <StyledAppBar position="fixed">
        <StyledToolbar>
          <Typography variant="h6" component="div">
            People Manager UI
          </Typography>
          <StyledIconButton
            color="inherit"
            aria-label="favorites"
            onClick={handleClick}
          >
            <Typography variant="button" component="span">
              Open Favorites
            </Typography>
            <FavoriteIcon />
          </StyledIconButton>
        </StyledToolbar>
      </StyledAppBar>
      <Toolbar />
    </Box>
  );
};

export default Navbar;

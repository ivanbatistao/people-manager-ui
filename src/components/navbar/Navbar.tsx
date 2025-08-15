import { Box, Typography, Toolbar } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FavoriteTable } from "./favoriteTable";
import { dialogOpenSubject$ } from "../customDialog/subjects";
import { CustomDialog } from "../customDialog/CustomDialog";
import { StyledAppBar, StyledToolbar, StyledIconButton } from './Navbar.styles';

const Navbar: React.FC = () => {
  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  };

  return (
    <Box sx={{ mb: 2 }}>
      <CustomDialog>
        <FavoriteTable />
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
      <Toolbar /> {/* Este Toolbar actúa como espaciador */}
    </Box>
  );
};

export default Navbar;

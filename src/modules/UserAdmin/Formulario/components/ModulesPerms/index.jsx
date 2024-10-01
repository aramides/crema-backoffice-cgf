import AppCheckboxField from '@crema/components/AppFormComponents/AppCheckboxField';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

import { Box, Button, Grid, Typography } from '@mui/material';
import AppTextField from '@crema/components/AppFormComponents/AppTextField';

import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

//Estilo del Accordion
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const ModulesPerms = ({ expanded, panel, onChange, nombre_rol }) => {
  const { messages } = useIntl();

  return (
    <Accordion
      expanded={expanded === panel}
      onChange={onChange}
      slotProps={{ transition: { unmountOnExit: true } }}
    >
      <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
        <Box display='flex' flexDirection='column'>
          <Typography>
            <AppCheckboxField name='permisos' />
            {messages['modules.perms.label']}
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Grid sx={{ my: 3 }} container direction='row' spacing={2}>
          <Grid item xs={4} md={3} lg={3}>
            <AppTextField label='Nuevo Permiso' name={nombre_rol} />
          </Grid>
          <Grid item xs={4} md={3} lg={3}>
            <Button type='submit' variant='contained'>
              Agregar
            </Button>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default ModulesPerms;

ModulesPerms.propTypes = {
  expanded: PropTypes.bool,
  panel: PropTypes.string,
  onChange: PropTypes.func,
  nombre_rol: PropTypes.string,
};

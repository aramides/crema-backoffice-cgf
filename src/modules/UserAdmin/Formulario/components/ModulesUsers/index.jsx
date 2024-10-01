import AppCheckboxField from '@crema/components/AppFormComponents/AppCheckboxField';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

import { Box, Button, Grid, Typography } from '@mui/material';

import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import AppSelectField from '@crema/components/AppFormComponents/AppSelectField';

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

const ModulesUsers = ({ formik, expanded, panel, onChange }) => {
  const { messages } = useIntl();

  const roles = [
    { value: 'analista', label: 'Analista' },
    { value: 'coordinador', label: 'Coordinador' },
    { value: 'director', label: 'Director' },
  ];

  const users = [
    { value: 'persona', label: 'Persona 1' },
    { value: 'persona2', label: 'Persona 2' },
    { value: 'persona3', label: 'Persona 3' },
  ];

  const perms = [
    { name: 'analista', label: 'Analista' },
    { name: 'coordinador', label: 'Coordinador' },
    { name: 'director', label: 'Director' },
  ];

  return (
    <Accordion
      expanded={expanded === panel}
      onChange={onChange}
      slotProps={{ transition: { unmountOnExit: true } }}
    >
      <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
        <Box display='flex' flexDirection='column'>
          <Typography>
            <AppCheckboxField name='usuario' />
            {messages['modules.usuarios.label']}
          </Typography>
          {formik.values.usuario === true ? (
            <>
              <Box display='flex' flexDirection='row'>
                {perms.map((perm) => {
                  return (
                    <Box
                      display='flex'
                      flexDirection='row'
                      alighItem='center'
                      key={perm.name}
                    >
                      <Typography sx={{ fontSize: 13 }} color='text.secondary'>
                        <AppCheckboxField name={perm.name} />
                        {perm.label}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            </>
          ) : null}
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container direction='row' spacing={4}>
          <Grid item xs={12} md={4} lg={4}>
            <AppSelectField
              name='nuevo_usuario'
              options={users}
              label='Usuario'
              labelId='usuario'
            />
          </Grid>

          <Grid item xs={12} md={4} lg={4}>
            <AppSelectField
              name='asignar_rol'
              options={roles}
              label='Roles'
              labelId='rol'
            />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Button type='submit' variant='contained'>
              Agregar
            </Button>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default ModulesUsers;

ModulesUsers.propTypes = {
  formik: PropTypes.object,
  expanded: PropTypes.bool,
  panel: PropTypes.string,
  onChange: PropTypes.func,
};

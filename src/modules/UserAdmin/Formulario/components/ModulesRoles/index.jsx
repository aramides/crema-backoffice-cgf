import AppCheckboxField from '@crema/components/AppFormComponents/AppCheckboxField';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

import {
  Box,
  Button,
  Grid,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
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

const ModulesRoles = ({ expanded, onChange, panel, formik, nombre_rol }) => {
  const { messages } = useIntl();

  const perms = [
    { name: 'crear', label: 'crear' },
    { name: 'editar', label: 'editar' },
    { name: 'eliminar', label: 'eliminar' },
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
            <AppCheckboxField name='rol' />
            {messages['modules.roles.label']}
          </Typography>
          {formik.values.rol === true ? (
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
        <Grid container direction='column' spacing={4}>
          <Grid item>
            <Grid container direction='column' spacing={2}>
              <Grid item xs={3} md={3} lg={3}>
                <Typography>
                  <AppCheckboxField name='crear' />
                  Crear
                </Typography>
              </Grid>

              <Grid item xs={3} md={3} lg={3}>
                <Typography>
                  <AppCheckboxField name='editar' />
                  Editar
                </Typography>
              </Grid>

              <Grid item xs={3} md={3} lg={3}>
                <Typography>
                  <AppCheckboxField name='eliminar' />
                  Eliminar
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={8} lg={8}>
            <Card elevation={3}>
              <CardContent>
                <Box display='flex' flexDirection='row' sx>
                  <AppTextField label='Nuevo rol' name={nombre_rol} />
                  <Button variant='contained' type='submit' sx={{ ml: 5 }}>
                    Agregar
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default ModulesRoles;

ModulesRoles.propTypes = {
  formik: PropTypes.object,
  expanded: PropTypes.bool,
  panel: PropTypes.string,
  onChange: PropTypes.func,
  nombre_rol: PropTypes.string,
};

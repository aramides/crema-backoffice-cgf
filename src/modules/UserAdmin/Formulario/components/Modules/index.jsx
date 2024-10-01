import AppCheckboxField from '@crema/components/AppFormComponents/AppCheckboxField';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';

import { Box, Typography } from '@mui/material';

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

const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(
  ({ theme }) => ({
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
  }),
);

const Modules = ({ formik }) => {
  const { messages } = useIntl();

  const perms = [
    { name: 'analista', label: 'Analista' },
    { name: 'coordinador', label: 'Coordinador' },
    { name: 'director', label: 'Director' },
  ];

  return (
    <Accordion slotProps={{ transition: { unmountOnExit: true } }}>
      <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
        <Box display='flex' flexDirection='column'>
          <Typography>
            <AppCheckboxField name='modulos' />
            {messages['modules.modules.label']}
          </Typography>
          {formik.values.modulos === true ? (
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
    </Accordion>
  );
};

export default Modules;

Modules.propTypes = {
  formik: PropTypes.object,
};

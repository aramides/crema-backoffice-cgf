import * as Yup from 'yup';

export const schemaReportsData = Yup.object().shape({
  companyName: Yup.string(),
  nroPatronalWorker: Yup.string(),
  nroPatronalAdministrative: Yup.string(),
  employerAddress: Yup.string(),
  nameRepresentative: Yup.string(),
  dniRepresentative: Yup.number().typeError(
    'Solo se admiten numeros en este campo.',
  ),
  nroRepresentative: Yup.string(),
  rifEmployer: Yup.string(),
  employerEmail: Yup.string(),
});

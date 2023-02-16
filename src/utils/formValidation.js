// Developer Validation
import * as Yup from 'yup';

export const developerPersonalInformationValidation = Yup.object().shape({
  personalInformation: Yup.object().shape({
    fullName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid Email').required('Required'),
    mobileNumber: Yup.string()
      .min(10, 'must be 10 digits')
      .max(10, 'must be 10 digits')
      .required('Required'),
    country: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
  }),
});

export const developerExperienceValidation = Yup.object().shape({
  experience: Yup.array().of(
    Yup.object().shape({
      companyName: Yup.string().required('Required'),
      position: Yup.string().required('Required'),
      dateOfJoining: Yup.string().required('Required'),
      workDescription: Yup.string().required('Required'),
      usedSkills: Yup.string().required('Required'),
    })
  ),
  projects: Yup.array().of(
    Yup.object().shape({
      title: Yup.string().required('Required'),
      url: Yup.string().matches(
        /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        'Invalid URL'
      ),
      description: Yup.string().required('Required'),
      duration: Yup.string().required('Required'),
    })
  ),
  licensesAndCertification: Yup.object().shape({
    name: Yup.string().required('Required'),
  }),
});

export const developerSkillValidation = Yup.object().shape({
  skills: Yup.object().shape({
    skill: Yup.array().of(Yup.string().required('Required')),
    language: Yup.array().of(Yup.string().required('Required')),
  }),

  socialProof: Yup.array().of(
    Yup.object().shape({
      linkedIn: Yup.string()
        .matches(
          /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
          'Invalid URL'
        )
        .required('Required'),
      twitter: Yup.string().matches(
        /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        'Invalid URL'
      ),
      instagram: Yup.string().matches(
        /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        'Invalid URL'
      ),
      facebook: Yup.string().matches(
        /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        'Invalid URL'
      ),
    })
  ),
});

// Client Validation
export const clientPersonalValidation = Yup.object().shape({
  personalInformation: Yup.object().shape({
    fullName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid Email').required('Required'),
    mobileNumber: Yup.string()
      .min(10, 'must be 10 digits')
      .max(10, 'must be 10 digits')
      .required('Required'),
    country: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
  }),
});

export const clientCompanyInfoValidation = Yup.object().shape({
  companyInformation: Yup.object().shape({
    companyName: Yup.string().required('Required'),
    companyEmail: Yup.string().email('Invalid email').required('Required'),
    mobileNumber: Yup.string()
      .min(10, 'must be 10 digits')
      .max(10, 'must be 10 digits')
      .required('Required'),
    country: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    agencyLink1: Yup.string()
      .matches(
        /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        'Invalid URL'
      )
      .required('Required'),

    noOfEmployees: Yup.number().required('Required'),
    aboutAgency: Yup.string()
      .min(15, 'must be 15 character or more')
      .required('Required'),
  }),
});

// Vendor Validation
export const clientPersonalValidation = Yup.object().shape({
  personalInformation: Yup.object().shape({
    fullName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid Email').required('Required'),
    mobileNumber: Yup.string()
      .min(10, 'must be 10 digits')
      .max(10, 'must be 10 digits')
      .required('Required'),
    country: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
  }),
});

export const clientCompanyInfoValidation = Yup.object().shape({
  companyInformation: Yup.object().shape({
    companyName: Yup.string().required('Required'),
    companyEmail: Yup.string().email('Invalid email').required('Required'),
    mobileNumber: Yup.string()
      .min(10, 'must be 10 digits')
      .max(10, 'must be 10 digits')
      .required('Required'),
    country: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    agencyLink1: Yup.string()
      .matches(
        /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        'Invalid URL'
      )
      .required('Required'),

    noOfEmployees: Yup.number().required('Required'),
    aboutAgency: Yup.string()
      .min(15, 'must be 15 character or more')
      .required('Required'),
  }),
});

// Vendor Validation
export const vendorValidation = Yup.object().shape({
  personalInformation: Yup.object().shape({
    fullName: Yup.string().required('Required'),
    designation: Yup.string().required('Required'),
    email: Yup.string().email('Invalid Email').required('Required'),
    contactNumber: Yup.string()
      .min(10, 'must be 10 digits')
      .max(10, 'must be 10 digits')
      .required('Required'),
  }),
  companyAgInformation: Yup.object().shape({
    companyName: Yup.string().required('Required'),
    companyEmail: Yup.string().email('Invalid email').required('Required'),
    aboutAgency: Yup.string()
      .min(15, 'must be 15 character or more')
      .required('Required'),
    companyContact1: Yup.string()
      .min(10, 'must be 10 digits')
      .max(10, 'must be 10 digits')
      .required('Required'),
    location: Yup.string()
      .min(15, 'must be 15 character or more')
      .required('Required'),
    agencyWebsite: Yup.string()
      .matches(
        /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        'Invalid URL'
      )
      .required('Required'),
    noOfEmployees: Yup.number().required('Required'),
    socialProof: Yup.object().shape({
      linkedIn: Yup.string()
        .matches(
          /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
          'Invalid URL'
        )
        .required('Required'),
      twitter: Yup.string().matches(
        /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        'Invalid URL'
      ),
      instagram: Yup.string().matches(
        /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        'Invalid URL'
      ),
      facebook: Yup.string().matches(
        /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        'Invalid URL'
      ),
    }),
  }),
});

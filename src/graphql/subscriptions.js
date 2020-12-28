/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateApplicantProfile = /* GraphQL */ `
  subscription OnCreateApplicantProfile {
    onCreateApplicantProfile {
      id
      Email
      UserName
      Name
      YoE
      CaFocus
      PayOpt
      Gender
      AppStatus
      Resume {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateApplicantProfile = /* GraphQL */ `
  subscription OnUpdateApplicantProfile {
    onUpdateApplicantProfile {
      id
      Email
      UserName
      Name
      YoE
      CaFocus
      PayOpt
      Gender
      AppStatus
      Resume {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteApplicantProfile = /* GraphQL */ `
  subscription OnDeleteApplicantProfile {
    onDeleteApplicantProfile {
      id
      Email
      UserName
      Name
      YoE
      CaFocus
      PayOpt
      Gender
      AppStatus
      Resume {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateRecuriterComment = /* GraphQL */ `
  subscription OnCreateRecuriterComment {
    onCreateRecuriterComment {
      id
      CandidateId
      Comment
      CreatedOn
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRecuriterComment = /* GraphQL */ `
  subscription OnUpdateRecuriterComment {
    onUpdateRecuriterComment {
      id
      CandidateId
      Comment
      CreatedOn
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRecuriterComment = /* GraphQL */ `
  subscription OnDeleteRecuriterComment {
    onDeleteRecuriterComment {
      id
      CandidateId
      Comment
      CreatedOn
      createdAt
      updatedAt
    }
  }
`;
export const onCreateApplicantEmployer = /* GraphQL */ `
  subscription OnCreateApplicantEmployer {
    onCreateApplicantEmployer {
      id
      CandidateId
      EmployerCode
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateApplicantEmployer = /* GraphQL */ `
  subscription OnUpdateApplicantEmployer {
    onUpdateApplicantEmployer {
      id
      CandidateId
      EmployerCode
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteApplicantEmployer = /* GraphQL */ `
  subscription OnDeleteApplicantEmployer {
    onDeleteApplicantEmployer {
      id
      CandidateId
      EmployerCode
      createdAt
      updatedAt
    }
  }
`;

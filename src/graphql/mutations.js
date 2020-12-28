/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createApplicantProfile = /* GraphQL */ `
  mutation CreateApplicantProfile(
    $input: CreateApplicantProfileInput!
    $condition: ModelApplicantProfileConditionInput
  ) {
    createApplicantProfile(input: $input, condition: $condition) {
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
export const updateApplicantProfile = /* GraphQL */ `
  mutation UpdateApplicantProfile(
    $input: UpdateApplicantProfileInput!
    $condition: ModelApplicantProfileConditionInput
  ) {
    updateApplicantProfile(input: $input, condition: $condition) {
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
export const deleteApplicantProfile = /* GraphQL */ `
  mutation DeleteApplicantProfile(
    $input: DeleteApplicantProfileInput!
    $condition: ModelApplicantProfileConditionInput
  ) {
    deleteApplicantProfile(input: $input, condition: $condition) {
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
export const createRecuriterComment = /* GraphQL */ `
  mutation CreateRecuriterComment(
    $input: CreateRecuriterCommentInput!
    $condition: ModelRecuriterCommentConditionInput
  ) {
    createRecuriterComment(input: $input, condition: $condition) {
      id
      CandidateId
      Comment
      CreatedOn
      createdAt
      updatedAt
    }
  }
`;
export const updateRecuriterComment = /* GraphQL */ `
  mutation UpdateRecuriterComment(
    $input: UpdateRecuriterCommentInput!
    $condition: ModelRecuriterCommentConditionInput
  ) {
    updateRecuriterComment(input: $input, condition: $condition) {
      id
      CandidateId
      Comment
      CreatedOn
      createdAt
      updatedAt
    }
  }
`;
export const deleteRecuriterComment = /* GraphQL */ `
  mutation DeleteRecuriterComment(
    $input: DeleteRecuriterCommentInput!
    $condition: ModelRecuriterCommentConditionInput
  ) {
    deleteRecuriterComment(input: $input, condition: $condition) {
      id
      CandidateId
      Comment
      CreatedOn
      createdAt
      updatedAt
    }
  }
`;
export const createApplicantEmployer = /* GraphQL */ `
  mutation CreateApplicantEmployer(
    $input: CreateApplicantEmployerInput!
    $condition: ModelApplicantEmployerConditionInput
  ) {
    createApplicantEmployer(input: $input, condition: $condition) {
      id
      CandidateId
      EmployerCode
      createdAt
      updatedAt
    }
  }
`;
export const updateApplicantEmployer = /* GraphQL */ `
  mutation UpdateApplicantEmployer(
    $input: UpdateApplicantEmployerInput!
    $condition: ModelApplicantEmployerConditionInput
  ) {
    updateApplicantEmployer(input: $input, condition: $condition) {
      id
      CandidateId
      EmployerCode
      createdAt
      updatedAt
    }
  }
`;
export const deleteApplicantEmployer = /* GraphQL */ `
  mutation DeleteApplicantEmployer(
    $input: DeleteApplicantEmployerInput!
    $condition: ModelApplicantEmployerConditionInput
  ) {
    deleteApplicantEmployer(input: $input, condition: $condition) {
      id
      CandidateId
      EmployerCode
      createdAt
      updatedAt
    }
  }
`;
